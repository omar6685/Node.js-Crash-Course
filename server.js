import http from 'http';
import fs from 'fs/promises'
import url from 'url';
import path from 'path';
const PORT = process.env.PORT;


// gt current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// console.log(__filename,__dirname);


const server = http.createServer(async (req, res) => {
    // res.setHeader('Content-Type', 'text/html');
    // res.statusCode = 404;
    // console.log(req.url);
    // console.log(req.method);

    try {
        // chack if GET request
        if (req.method == 'GET') {
            let filePath;
            if (req.url === '/') {
                // res.writeHead(200, { 'Content-Type': 'text/html' });
                // res.end('<h1>HomPage</h1>');
                filePath = path.join(__dirname, 'public', 'index.html');
            } else if (req.url === '/about') {
                // res.writeHead(200, { 'Content-Type': 'text/html' });
                // res.end('<h1>About Page</h1>');
                filePath = path.join(__dirname, 'public', 'about.html');
            } else { 
                // res.writeHead(404, { 'Content-Type': 'text/html' });
                // res.end('<h1>Page Not Found</h1>');
                throw new Error('Page Not Found');

            }
            const data = await fs.readFile(filePath);
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end();

        } else {
            throw new Error('Invalid Request');
        }
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('<h1>Server Error</h1>');
        console.log(error.message);
    }


    // res.end(JSON.stringify({message: 'server Error'}));
});


server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})