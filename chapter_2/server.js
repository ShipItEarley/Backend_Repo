// The address for this server connected to the network is: http:localhost:8383

const express = require('express')
const app = express()
const PORT = 8383

app.get('/', (req, res) => {
    console.log('I hit an endpoint', req.method);
    res.sendStatus(200)
})
app.listen(PORT, () => console.log(`Server has started on ${PORT}`));


// HTTP VERBS && Routes (or paths)

/* In web development, routing refers to how an application determines what action to take in response to a particular client request. The route typically includes information about the type of request (method, such as GET, POST, PUT, DELETE) and the path (the subdirectory in the URL).

Each route maps to a specific endpoint, which is a part of the application responsible for processing that request and returning an appropriate response. Think of endpoints as destinations where the application executes logic to handle the request.

*/


/*
// Define a GET route for "/home"
app.get('/home', (req, res) => {
    res.send('Welcome to the Home Page!');
});

// Define a POST route for "/submit"
app.post('/submit', (req, res) => {
    res.send('Form submitted successfully!');
});

// Define a DELETE route for "/delete-item"
app.delete('/delete-item/:id', (req, res) => {
    const itemId = req.params.id;
    res.send(`Item with ID ${itemId} deleted.`);
});
*/