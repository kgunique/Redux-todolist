import React from 'react';
import './App.css';
import Input from './components/Input';
import TodoItem from './components/TodoItem';
import Totalcompleted from './components/Totalcompleted';

import { useSelector } from 'react-redux';
import { selectTodoList } from './features/todoSlice'



function App() {
  const todoList = useSelector(selectTodoList)

  return (
    <div className="App">
      <div className="app_container">
        <div className="header">
          <h1>To-Do List App</h1>
        </div>
        <div className="todo_container">
          {todoList.map(item => (
            <TodoItem
              key={item.id}
              name={item.item}
              done={item.done}
              id={item.id} />
          ))}

        </div>
        {/* inputbox */}
        <Input />
        <Totalcompleted />
      </div>
    </div>
  );
}

export default App;
