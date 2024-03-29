import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Components/Form';
import ToDoList from './Components/ToDoList';

function App() {
  
  //State stuff
  const [inputText, setInputText] = useState(''); 
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([]);
  //Functions
  //Use Effect
  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
        default:
          setFilteredTodos(todos);
          break;
    }
  }

  return (
    <div className="App">
    <header>
      <h1>ToDo list</h1>
    </header>
    <Form 
      todos={todos} 
      setTodos={setTodos} 
      inputText={inputText} 
      setInputText={setInputText}
      setStatus={setStatus}      
      ></Form>
      
    <ToDoList 
      setTodos={setTodos}
      todos={todos}
      filteredTodos={filteredTodos}
      ></ToDoList>
    </div>
  );
}

export default App;
