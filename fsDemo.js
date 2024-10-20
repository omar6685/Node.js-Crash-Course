// import fs from 'fs';
import fs from 'fs/promises';


// readFile() - callback

//  fs.readFile('./test.txt', 'utf8', (err, data) => {
//      if (err) throw err;
//      console.log(data);
//  });


// readFileSync() - synchronous version

// const data = fs.readFileSync('./test.txt', 'utf8');
// console.log(data);

// readfile() - Promise .then()
// fs.readFile('./test.txt', 'utf8')
// .then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

// readfile() - async/await
const readFile = async () => {
    try {
        const data = await fs.readFile('./test.txt', 'utf8');
        console.log(data);
    } catch (error) {
     
        console.log(error);
    }
}


// WriteFile()

const writeFile = async () => {
    try {
        await fs.writeFile('./test.txt', 'Hello World');
        console.log('File written successfully');
    } catch (error) {
        console.log(error);
    }
}


// appendFile()
const appendFile = async () => {
    try {
        await fs.appendFile('./test.txt', '\nHello Everyone');
        console.log('File Appended successfully');
    } catch (error) {
        console.log(error);
    }
}


writeFile();
appendFile();
readFile();
