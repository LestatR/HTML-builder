let fs = require('fs');
let path = require('path');
fs.readdir('03-files-in-folder/secret-folder', { withFileTypes: true }, (err, stat) => {
    stat.forEach((file) => {
        if (!file.isDirectory()) {
            fs.stat(path.join(__dirname, 'secret-folder', file.name.toString()), (err, item) => {
                console.log(`${file.name.slice(0, -path.extname(file.name).length)}${path.extname(file.name)}_____${item.size / 1024} KB`);
            })
        }
    });
});