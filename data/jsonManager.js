const fs = require('fs');
const path = require('path');

let manager = (name) => {
  return {
    filePath: path.join(__dirname, '../data/' + name + '.json'),

    readFile() {
      let file = fs.readFileSync(this.filePath, 'utf-8');
      file ? JSON.parse(file) : [];
    },

    writeFile(contents) {
      let file = JSON.stringify(contents, null, 2);
      fs.writeFileSync(this.filePath, file);
    },

    all() {
      return this.readFile();
    },
  };
};

module.exports = manager;
