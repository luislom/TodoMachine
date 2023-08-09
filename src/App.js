import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  {text:'Cortar cebolla', completed: true},
  {text:'Curso React', completed: false},
  {text:'Tarea Fisíca', completed: false},
  {text:'Hacer compras', completed: true}
];


function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  
  console.log('Los usuarios buscan TODOs de ' + searchValue)
  const completedTodos = todos.filter(
    todo => todo.completed
    ).length;
  const totalTodos = todos.length;

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch
        searchValue = {searchValue}
        setSearchValue  = {setSearchValue}
      /> 

      <TodoList >
        {defaultTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed}
          />
        ))}
      </TodoList>
        

      <CreateTodoButton/>

    </>
  );
}




export default App;
