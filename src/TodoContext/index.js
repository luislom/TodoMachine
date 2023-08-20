import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext()

function TodoProvider({children}){
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);
    
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    
    const addTodo = (text) => {
        saveTodos();
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false,
        })
        saveTodos(newTodos);
    }
    
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
    return(
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            completeTodo,
            searchValue,
            setSearchValue,
            totalTodos,
            searchedTodos,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo,
        }}>
            { children }
        </TodoContext.Provider>
    )
}


export {TodoContext, TodoProvider}