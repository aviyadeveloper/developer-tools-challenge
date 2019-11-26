const generateCode = (chars, length) => {
  let code = '';

  for (let j = 0; j < length; j++) {
    let nextChar = chars[Math.floor(Math.random() * chars.length)];
    code = code + nextChar;
  }

  return code;
};

module.exports = { generateCode };
