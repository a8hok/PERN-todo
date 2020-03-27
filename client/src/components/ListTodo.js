import React, { Fragment, useEffect, useState } from 'react';
import EditTodo from './EditTodo';

const ListTodo = () => {
  const [todos, setTodo] = useState([]);
  // get all todos
  const getTodo = async () => {
    try {
      const response = await fetch('http://localhost:5000/todos');
      const jsonDate = await response.json();
      setTodo(jsonDate);
    } catch (error) {
      console.error(error.message);
    }
  };
  // delete todo
  const deleteTodo = async (id) => {
    try {
      const todo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: 'DELETE',
      });
      setTodo(todos.filter((todo) => todo.todo_id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };
  // Trigger on window load
  useEffect(() => {
    getTodo();
  }, []);
  return (
    <Fragment>
      <h2 className='mt-5 center-text'>List Todo</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <EditTodo todo={todo} />
              </td>
              <td>
                <button
                  className='btn btn-danger'
                  onClick={() => deleteTodo(todo.todo_id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodo;
