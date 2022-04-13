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
      let item = file.pop();

      if (item) {
        return ++item.id;
      }

      return 1;
    },

    find(id) {
      let file = this.readFile();
      return file.find((item) => item.id == id);
    },

    create(item) {
      let file = this.readFile();
      item.id = this.generateId();
      file.push(item);

      this.writeFile(file);

      return item.id;
    },

    update(item) {
      let file = this.readFile();
      let updatedItems = file.map((eachItem) => {
        if (eachItem.id == item.id) {
          return item;
        }

        return eachItem;
      });

      this.writeFile(updatedItems);

      return item.id;
    },

    delete(id) {
      let items = this.readFile();
      let updatedItems = items.filter((item) => item.id != id);

      this.writeFile(updatedItems);
    },
  };
};

module.exports = manager;
