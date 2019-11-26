const { generateCode } = require('./generateCode');

const generateCodes = (num, length) => {
  const codes = {};
  const chars = 'abcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split(
    ''
  );
  const totalPossibleCodes = chars.length ** length;
  if (totalPossibleCodes < num) {
    return console.log(
      `This length of code will only allow for ${totalPossibleCodes} codes but you have specified you want ${num} codes.`
    );
  }
  let i = 0;
  while (i < num) {
    // get new code
    let code = generateCode(chars, length);

    // verify code is unique and store in codes object;
    if (!codes.hasOwnProperty(code)) {
      codes[code] = {
        isChallenge: false,
        entryPoint: false,
        levelNumber: false,
        previousLevelCode: false,
        nextLevelCode: false,
        author: false,
        notes: false,
        imagePath: `challenges/svg-files/${code}.svg`
      };
      i++;
    }
    // avoid possible loop if total codes limit reached
    if (Object.keys(codes).length === totalPossibleCodes) {
      console.log('REACHED LIMIT OF CODES, BREAKING.');
      break;
    }
  }
  return codes;
};

module.exports = { generateCodes };
