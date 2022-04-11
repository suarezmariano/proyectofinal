const fs = require('fs');
const path = require('path');

let manager = (name) => {
  return {
    filePath: path.join(__dirname, '../data/' + name + '.json'),

    readFile() {
      let file = fs.readFileSync(this.filePath, 'utf-8');
      if (file) {
        return JSON.parse(file);
      }
      return [];
    },

    writeFile(contents) {
      let file = JSON.stringify(contents, null, 2);
      fs.writeFileSync(this.filePath, file);
    },

    all() {
      return this.readFile();
    },

    generateId() {
      let file = this.readFile();
      let row = file.pop();

      if (row) {
        return ++row.id;
      }

      return 1;
    },

    find(id) {
      let file = this.readFile();
      return file.find((row) => row.id == id);
    },

    create(row) {
      let file = this.readFile();
      row.id = this.generateId();
      file.push(row);

      this.writeFile(file);

      return row.id;
    },
  };
};

module.exports = manager;
