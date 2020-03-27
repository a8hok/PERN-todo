import React, { Fragment, useState } from 'react';

const InputTodo = () => {
  const [description, setDescription] = useState('');
  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch('http://localhost:5000/todos', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(body),
      });
      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <Fragment>
      <h1 className='text-center mt-5'>Pern todo list</h1>
      <form className='d-flex mt-5' onSubmit={onFormSubmit}>
        <input
          className='form-control'
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className='btn btn-success'>Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
