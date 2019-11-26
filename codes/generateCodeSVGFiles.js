const fs = require('fs');

const { generateCodes } = require('./generateCodes');
const { generateCodeSVG } = require('./generateCodeSVG');

const codesFullData = generateCodes(200, 4);
const codes = Object.keys(codesFullData);

// Write image files. (revealed in public)
for (let i = 0; i < codes.length; i++) {
  fs.writeFileSync(
    `challenges/svg-files/${codes[i]}.svg`,
    generateCodeSVG(codes[i])
  );
}

// Write complete list (hidden from users)
fs.writeFileSync('challenges/list.json', JSON.stringify(codesFullData));
