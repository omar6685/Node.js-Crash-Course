import http from 'http';
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    // res.setHeader('Content-Type', 'text/html');
    // res.statusCode = 404;
    console.log(req.url);
    console.log(req.method);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end('<h1>Hello World</h1>');


    // res.end(JSON.stringify({message: 'server Error'}));
});


server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})