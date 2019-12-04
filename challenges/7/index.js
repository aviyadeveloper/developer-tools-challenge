const fs = require('fs');
const path = require('path');
const ascii = require('./ascii');
const jumbleAscii = require('./jumbleAscii');

const generateLevel = () => {
  let title = 'What an odd kid';
  let jumbledAscii = jumbleAscii(ascii);
  let level = fs.readFileSync(path.join(__dirname, 'template.html')).toString();
  level = level.replace('{{title}}', title);
  level = level.replace('{{body}}', jumbledAscii);

  return level;
};

module.exports = generateLevel;
