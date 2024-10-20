import path from 'path';
import url from 'url';

const FilePath = './dir1/dir2/test.txt';

// basename()
console.log(path.basename(FilePath));


// dirname()

console.log(path.dirname(FilePath));

// extname()
console.log(path.extname(FilePath));

// parse()
console.log(path.parse(FilePath));

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename, __dirname);


// join()

const filePath2 = path.join(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath2);

// resolve()
const filePath3 = path.resolve(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath3);