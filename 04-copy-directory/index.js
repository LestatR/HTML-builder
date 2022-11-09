let path = require('path');
let { readdir, mkdir, copyFile, rm } = require('fs/promises');
let sourceFolderPath = path.join(__dirname, '/files');
let copyFolderPath = path.join(__dirname, '/copy-files');
async function copyDir(sourceFolderPath, copyFolderPath) {
    await rm(copyFolderPath, { recursive: true, force: true });
    await mkdir(copyFolderPath, { recursive: true });
    let files = await readdir(sourceFolderPath, { withFileTypes: true });
    for (let file of files) {
        let sourceFile = path.join(sourceFolderPath, file.name);
        let copyFil = path.join(copyFolderPath, file.name);
        await copyFile(sourceFile, copyFil);
        console.log(`${file.name} copied`);
    }
    console.log('FOLDER COPIED');
}
copyDir(sourceFolderPath, copyFolderPath);