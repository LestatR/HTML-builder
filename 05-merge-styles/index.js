let fs = require('fs');
let path = require('path');
let { readdir } = require('fs/promises');
let sourceFolder = path.join(__dirname, '/styles');
let targetFile = path.join(__dirname, '/project-dist', 'bundle.css');
async function makeBundle(sourceFolder, targetFile, err) {
    let downStream = fs.createWriteStream(targetFile);
    if (err) {
        console.log(err);
    } else {
        let files = await readdir(sourceFolder, { withFileTypes: true });
        for (let file of files) {
            if (file.isFile() && path.extname(file.name) === '.css') {
                let tempData = path.join(sourceFolder, file.name);
                let upStream = fs.createReadStream(tempData, 'utf8');
                upStream.on('data', (data) => downStream.write(data));
                /* console.log(tempData); */
            }
        }
    }
    console.log('Bundle is ready!');
}
makeBundle(sourceFolder, targetFile);