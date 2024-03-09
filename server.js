'use strict';

import express from 'express';
const expressServer = express();
expressServer.use(express.static('public'));

import http from 'http';
const httpServer = http.Server(expressServer);

import { Server } from 'socket.io';
const io = new Server(httpServer);

const sockets = new Map();

const maxConnections = 2;
let connectedClients = 0;

io.on('connect', socket => {
    if (connectedClients < maxConnections) {
        sockets.set(socket.id, socket);

        if(connectedClients === 0) {
            socket.emit('waitingForAnotherPlayer');
        }

        if (connectedClients === 1) {
            const recipientSocket = getRecipientSocket(socket.id);
            if (recipientSocket) {
                const registeredPayload = { isActive: true, color: 'white' }
                recipientSocket.emit('secondPlayerRegistered', registeredPayload);
            }
        }

        socket.on('msgFromClient', (msg) => {
            const recipientSocket = getRecipientSocket(msg.senderId);
            if (recipientSocket) {
                const newActivePlayerColor = msg.activePlayerColor === 'white' ? 'black' : 'white';
                const switchActivePayload = { fields: msg.fields, isActive: true, color: newActivePlayerColor }
                recipientSocket.emit('msgFromServer', switchActivePayload);
            }
        })

        socket.on('gameoverMsgFromClient', (msg) => {
            const recipientSocket = getRecipientSocket(msg.senderId);
            if (recipientSocket)
            recipientSocket.emit('gameoverMsgFromServer', msg);
        });
        

        socket.on('disconnect', (msg) => {
            sockets.delete(socket.id);
            connectedClients--;

            if (connectedClients === 1) {
                const socketIds = [...sockets.keys()].flat();
                const recipientId = socketIds.at(0) ?? '';
                const recipientSocket = sockets.get(recipientId);
                if (recipientSocket)
                    recipientSocket.emit('playerDisconnected', msg);
            }
            console.log(`Client disconnected. ${connectedClients}/${maxConnections} connected.`);
        })

        connectedClients++;
        console.log(`Client connected. ${connectedClients}/${maxConnections} connected.`);

    } else {
        console.log('Connection limit reached.');
        socket.disconnect(true);
    }
}
)

const getRecipientSocket = (senderSocketId) => {
    const socketIds = [...sockets.keys()].flat();
    const recipientId = socketIds.find((id) => id !== senderSocketId) ?? '';
    const recipientSocket = sockets.get(recipientId);

    return recipientSocket;
}

const init = () => {
    httpServer.listen(80, err => {
        if (err) console.log(err);
        else console.log('Server is ready');
    })
}

init();