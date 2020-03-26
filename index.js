const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();

// Middleware starts here
app.use(cors());
app.use(express.json());

// Routes starts here
app.get('/todos', async (req, res) => {
  try {
    const allTodo = await pool.query('SELECT * FROM todo');
    res.json(allTodo);
  } catch (error) {
    console.error(error.message);
  }
});

app.get('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query('SELECT * FROM todo WHERE todo_id=$1', [id]);
    res.json(todo);
  } catch (error) {
    console.error(error.message);
  }
});

app.post('/todos', async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      'INSERT INTO todo (description) VALUES($1)',
      [description]
    );
    res.json(newTodo);
  } catch (error) {
    console.error(error.message);
  }
});

app.put('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      'UPDATE todo SET description=$1 WHERE todo_id=$2',
      [description, id]
    );
    res.json(updateTodo);
  } catch (error) {
    console.error(error.message);
  }
});

app.delete('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query('DELETE from todo WHERE todo_id=$1', [
      id,
    ]);
    res.json(deleteTodo);
  } catch (error) {
    console.error(error.message);
  }
});

// Server
app.listen(5000, () => {
  console.log('Server has started in 5000');
});
