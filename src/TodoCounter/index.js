import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';


function TodoCounter(){
    const {
        completedTodos,
        totalTodos,
    }= React.useContext(TodoContext)

    return (
        completedTodos === totalTodos 
            ? <h1 className='TodoCounter'>Has completado todo crack!!!</h1> 
            : <h1 className='TodoCounter'>Has completado <span> {completedTodos} </span>de <span>{totalTodos}</span> TODOS</h1>
    );
}

export {TodoCounter}