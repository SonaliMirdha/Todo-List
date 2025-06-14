import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import FilterBar from './FilterBar';

const TodoWrapper = () => {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = todo => {
    if (!todo.trim()) return;
    setTodos([{ id: Date.now(), task: todo, completed: false }, ...todos]);
  };

  const toggleComplete = id => {
    setTodos(todos.map(todo => (
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )));
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="todo-container">
      <TodoForm addTodo={addTodo} />
      {filteredTodos.map(todo => (
        <Todo key={todo.id} {...todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
      ))}
      <FilterBar
        total={todos.length}
        left={todos.filter(t => !t.completed).length}
        setFilter={setFilter}
        clearCompleted={clearCompleted}
      />
    </div>
  );
};

export default TodoWrapper;
