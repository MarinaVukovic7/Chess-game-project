'use strict';

let socket = io.connect();

const handleRegistered = (msg, canvas) => {
  canvas.setActivePlayer(msg.color, msg.isActive);
}

export const appendSocketEventListener = (canvas) => {
  socket.on('secondPlayerRegistered', (msg) => {
    handleRegistered(msg, canvas);
    removeWaitingWindow();
  });

  socket.on('waitingForAnotherPlayer', () => {
    createWaitingWindow();
  })

  socket.on('msgFromServer', (msg) => {
    canvas.sendBoardData(msg);
  });

  socket.on('playerDisconnected', () => canvas.createCheckmateWindow(
  `Other player left the game! 
  You won!`, './assets/images/winner.png'));

  socket.on('gameoverMsgFromServer', () => canvas.createCheckmateWindow(
    `Checkmate!<br>Game is over. You lose!`,
    './assets/images/checkmate.png'));
}

const createWaitingWindow = () => {
  const waitingDiv = document.createElement('div');
  waitingDiv.innerHTML = `Please wait.<br>Opponent is connecting.`;
  waitingDiv.className = 'waitingDiv';
  document.body.append(waitingDiv);
  
  const waitingImg = document.createElement('img');
  waitingImg.src = './assets/images/loading.svg'
  waitingImg.className = 'waitingImg';
  waitingDiv.append(waitingImg);
  return waitingDiv;
}

const removeWaitingWindow = () => {
  const waitingDiv = document.querySelector('.waitingDiv');
  waitingDiv.className = 'none';
}

export const sendMsgToServer = (msg) => {
  socket.emit('msgFromClient', { fields: msg.fields, senderId: socket.id, activePlayerColor: msg.activePlayerColor });
}

export const sendGameoverMsg = (msg) => {
  socket.emit('gameoverMsgFromClient', { fields: msg.fields, senderId: socket.id });
}
