var fs = require('fs');
var path = require('path');
var folderPath = '../../public/core-contributors';
try {
    var files = fs.readdirSync(folderPath);
    files.forEach(function (filename) {
        if (filename.endsWith('.jpg') || filename.endsWith('jpeg') || filename.endsWith('png')) {
            var newFilename = "".concat(filename.slice(-9, -5), ".webp"); // 移除最後的 .png，再加上 .webp
            var oldPath = path.join(folderPath, filename);
            var newPath = path.join(folderPath, newFilename);
            fs.renameSync(oldPath, newPath);
            console.log("Renamed ".concat(filename, " to ").concat(newFilename));
        }
    });
    console.log('All files renamed successfully!');
}
catch (err) {
    console.error('Error occurred:', err);
}
