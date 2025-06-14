import React from 'react';

const Todo = ({ id, task, completed, toggleComplete, deleteTodo }) => {
  return (
    <div className={`todo ${completed ? 'completed' : ''}`}>
      <div className="circle" onClick={() => toggleComplete(id)} />
      <span onClick={() => toggleComplete(id)}>{task}</span>
      <button className="delete-btn" onClick={() => deleteTodo(id)}>×</button>
    </div>
  );
};

export default Todo;
