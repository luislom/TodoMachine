function TodoCounter({ total, completed }){
    return (
        <h1>
            Has completado {completed} a {total} TODOS
        </h1>
    );
}

export {TodoCounter}