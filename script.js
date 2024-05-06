// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');

// Initialize express app
const app = express();

// Use body-parser middleware
app.use(bodyParser.json());

// Initialize tasks array
let tasks = [];

// Define routes
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
    let task = req.body.task;
    tasks.push(task);
    
    res.json({ message: 'Task added successfully' });
});

app.put('/tasks/:id', (req, res) => {
    let id = req.params.id;
    let newTask = req.body.task;
    tasks[id] = newTask;
    res.json({ message: 'Task updated successfully' });
});

app.delete('/tasks/:id', (req, res) => {
    let id = req.params.id;
    tasks.splice(id, 1);
    res.json({ message: 'Task deleted successfully' });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
