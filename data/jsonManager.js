const fs = require('fs');
const path = require('path');

let manager = (name) => {
  return {
    filePath: path.join(__dirname, '../data' + name + '.json'),

    readFile() {
      let file = fs.readFileSync(this.filePath, 'utf-8');
      file ? JSON.parse(file) : [];
    },
  };
};

module.exports = manager;
