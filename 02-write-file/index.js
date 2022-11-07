let fs = require('fs');
let path = require('path');
let { stdin, stdout } = process;
let readLine = require('readline');
let input = readLine.createInterface(stdin, stdout);
let pathFile = path.join(__dirname, 'text.txt');
fs.writeFile(pathFile, '', (err) => {
    if (err) {
        throw error;
    }
})
console.log('write your text:');
input.on('line', (data) => {
    if (data === 'exit') {
        input.close();
    } else {
        fs.appendFile(pathFile, data + '\n', (err) => {
            if (err) throw error;
        });
    }
});
input.on('close', () => {
    console.log('your msg saved');
});