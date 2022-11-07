let fs = require('fs');
let path = require('path');
let stream = new fs.ReadStream(path.join(__dirname, 'text.txt'), 'utf8');
stream.on('readable', () => {
    let data = stream.read();
    console.log(data);
});
stream.on('error', (err) => {
    console.log('error', err.message);
});