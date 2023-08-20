import React from "react"; 

function useLocalStorage(itemName, initialValue) {

    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() =>{

        setTimeout(() => {
            try {
                let parsedItem;
                const localStorageItem = localStorage.getItem(itemName);
                if (localStorageItem) { 
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem)
                } else {
                    setItem(initialValue);
                }
    
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(true);
            }
            
        }, 2000);
    }, [])

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem))
        setItem(newItem);
    };
    
    return {
        item, 
        saveItem, 
        loading, 
        error};

}
export { useLocalStorage };

// const defaultTodos = [
//   {text:'Cortar cebolla', completed: true},
//   {text:'Curso React', completed: false},
//   {text:'Tarea Fisíca', completed: false},
//   {text:'Hacer compras', completed: true}
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
