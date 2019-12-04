const express = require('express');
const ip = require('ip');
const path = require('path');
const fs = require('fs');

const app = express();
const ipAddress = ip.address();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  const code = req.query['code'];

  // If empty code start level 1
  if (code === '') {
    return res.sendFile(path.join(__dirname, 'challenges', '1', 'index.html'));
  }

  if (code) {
    // Verify code
    const listFile = fs.readFileSync(
      path.join(__dirname, '/challenges/list.json')
    );
    const list = JSON.parse(listFile);

    // Fetch level path
    if (list[code]) {
      const challengePath = path.join(__dirname, list[code]['entryPoint']);
      if (path.extname(challengePath) === '.js') {
        let generateLevel = require(challengePath);
        res.send(generateLevel());
      } else if (path.extname(challengePath) === '.html') {
        // Send level
        return res.sendFile(challengePath);
      }
    } else {
      return res.send({ error: 'code does not exist' });
    }
  } else {
    return res.sendFile(path.join(__dirname, '/challenges/index.html'));
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
  console.log(`Network access via: ${ipAddress}:${port}!`);
});
