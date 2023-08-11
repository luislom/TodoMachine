import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

// const defaultTodos = [
//   {text:'Cortar cebolla', completed: true},
//   {text:'Curso React', completed: false},
//   {text:'Tarea Fisíca', completed: false},
//   {text:'Hacer compras', completed: true}
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');

function App() {
  // const localStorageTodos = localStorage.getItem('TODOS_V1');

  // let parsedTodos;

  // if (!localStorageTodos){
  //   localStorage.setItem('TODOS_V1', JSON.stringify([]));
  //   parsedTodos = [];
  // } else {
  //   parsedTodos = JSON.parse(localStorageTodos);
  // }

  const [todos, setTodos] = React.useState(() => {
    const localStorageTodos = localStorage.getItem('TODOS_V1');
    if (localStorageTodos) return JSON.parse(localStorageTodos);
    return []
  })

  const [searchValue, setSearchValue] = React.useState('');
  

  const completedTodos = todos.filter(
    todo => todo.completed
    ).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const noTildes = (text) => {
        return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      };
      const todoText = noTildes(todo.text.toLocaleLowerCase());
      const searchText = noTildes(searchValue.toLocaleLowerCase());
      
      return todoText.includes(searchText);
    }
  );

  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))
    setTodos(newTodos);
  };

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
  }

  


  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch
        searchValue = {searchValue}
        setSearchValue  = {setSearchValue}
      /> 

      <TodoList >
        {searchedTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
        

      <CreateTodoButton/>

    </>
  );
}




export default App;
