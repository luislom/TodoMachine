function TodoItem(props){
    return (
        <li>
            <span>V</span>
            <p>{props.text}</p>
            <span>x</span>
        </li>
    );
}
export {TodoItem}