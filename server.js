import http from 'http';
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    // res.setHeader('Content-Type', 'text/html');
    // res.statusCode = 404;

    res.writeHead(404, { 'Content-Type': 'application/json' });


    res.end(JSON.stringify({message: 'server Error'}));
});


server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})