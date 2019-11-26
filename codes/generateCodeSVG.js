const generateCodeSVG = code => {
  const TextToSVG = require('text-to-svg');
  const textToSVG = TextToSVG.loadSync();

  const attributes = { fill: 'black', stroke: 'black' };
  const options = {
    x: 0,
    y: 0,
    fontSize: 24,
    anchor: 'top',
    attributes: attributes
  };

  const svg = textToSVG.getSVG(`${code}`, options);

  return svg;
};

module.exports = { generateCodeSVG };
