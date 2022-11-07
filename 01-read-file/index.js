let fs = require('fs');
let stream = new fs.ReadStream('./01-read-file/text.txt', 'utf8');
stream.on('readable', function() {
    let data = stream.read();
    console.log(data);
});
stream.on('done', function() {
    console.log('done');
});