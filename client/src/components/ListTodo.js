import React, { Fragment, useEffect, useState } from 'react';

const ListTodo = () => {
  const [todos, setTodo] = useState([]);
  const getTodo = async () => {
    try {
      const response = await fetch('http://localhost:5000/todos');
      const jsonDate = await response.json();
      setTodo(jsonDate);
      console.log(jsonDate)
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    getTodo();
  }, []);
  return (
    <Fragment>
      <h2 className='mt-5 center-text'>List Todo</h2>
      <table class='table'>
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr>
              <td>{todo.description}</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodo;
