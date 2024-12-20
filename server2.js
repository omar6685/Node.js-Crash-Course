import {createServer} from 'http';
const PORT = process.env.PORT;

const users = [
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'Jane Doe'},
    {id: 3, name: 'James Doe'},
    {id: 4, name: 'Jenny Doe'},
];



// logger middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

// JSON middleware
const jsonMiddleware = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
}

// Route handler for GET /api/users
const getUsersHandler = (req, res) => {
    res.write(JSON.stringify(users));
    res.end();
}

// Route handler for GET /api/users/:id
const getUserHandler = (req, res) => {
    const id = req.url.split('/')[3];
    const user = users.find(user => user.id === parseInt(id));
    if (user) {
        res.write(JSON.stringify(user));
    } else {
        res.statusCode = 404;
        res.write(JSON.stringify({ message: 'User Not Found' }));
    }
    res.end();
}



// Route handler for POST /api/users

const postUserHandler = (req, res) => {
    let body = '';
    // listen to data
    req.on('data', (chunk) => {
        body += chunk.toString();
    });
    req.on('end', () => {
        const newUser = JSON.parse(body);
        users.push(newUser);
        res.statusCode = 201;
        res.write(JSON.stringify(newUser));
        res.end();
    });
}



// not found handler

const notFoundHandler = (req, res) => {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: 'Route Not Found' }));
    res.end();
}

// create server
const server = createServer((req, res) => {
    logger(req, res, () => {
        jsonMiddleware(req, res, () => {
            if (req.url === '/api/users' && req.method === 'GET') {
                getUsersHandler(req, res);
            } else if (req.url.match(/\/api\/users\/\d+/) && req.method === 'GET') {
                getUserHandler(req, res);
            } else if (req.url === '/api/users' && req.method === 'POST') {
                postUserHandler(req, res);
            } else {
                notFoundHandler(req, res);
            }
        });
    });

});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});