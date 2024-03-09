'use strict';

const movePawn = (fields, activeField, activeRowIndex, activeColumnIndex) => {
  const result = [];
  const direction = activeField.figure.colorType === 'white' ? -1 : 1;

  const nextRowOneStep = fields[activeRowIndex + direction];
  const nextColumnOneStep = nextRowOneStep[activeColumnIndex];

  if(nextRowOneStep && !nextColumnOneStep.figure) {
    result.push(nextColumnOneStep);
  }

  const nextColumnCapturingRight = activeColumnIndex - 1;
  const nextColumnCapturingLeft = activeColumnIndex + 1;
  const nextFieldRight = nextRowOneStep && nextRowOneStep[nextColumnCapturingRight];
  const nextFieldLeft = nextRowOneStep && nextRowOneStep[nextColumnCapturingLeft];

  if (nextFieldRight && nextFieldRight.figure && nextFieldRight.figure.colorType !== activeField.figure.colorType) {
    result.push(nextFieldRight);
  }

  if (nextFieldLeft && nextFieldLeft.figure && nextFieldLeft.figure.colorType !== activeField.figure.colorType) {
    result.push(nextFieldLeft);
  }

  if (activeRowIndex === (activeField.figure.colorType === 'white' ? 6 : 1)) {
    const nextRowTwoSteps = fields[activeRowIndex + 2 * direction];
    if (nextRowTwoSteps && !nextRowTwoSteps[activeColumnIndex].figure) {
      result.push(nextRowTwoSteps[activeColumnIndex]);
    }
  }
  
  return result;
}

export default movePawn;

