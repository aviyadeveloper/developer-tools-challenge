const jumbleAscii = ascii => {
  const asciiLineArray = ascii.split('\n');

  for (let i = 0; i < asciiLineArray.length; i++) {
    if (i % 2 === 0) {
      line = asciiLineArray[i]
        .split('')
        .reverse()
        .join('</span><span class="character">');
      line = `<span class="character">${line}</span>`;
      asciiLineArray[i] = `<span class="line">${line}</span>`;
    } else {
      line = asciiLineArray[i]
        .split('')
        .join('</span><span class="character">');
      line = `<span class="character">${line}</span>`;
      asciiLineArray[i] = `<span class="line">${line}</span>`;
    }
  }
  jumbledAscii = asciiLineArray.join('\n');
  jumbledAscii = `<span class="all">${jumbledAscii}</span>`;
  return jumbledAscii;
};

module.exports = jumbleAscii;
