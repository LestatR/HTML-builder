let fs = require('fs');
fs.readFile('./01-read-file/text.txt', 'utf8', function(error, fileContent) {
    console.log('Асинхронное чтение файла');
    if (error) throw error;
    console.log(fileContent);
});