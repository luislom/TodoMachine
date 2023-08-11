import React from 'react';
import './TodoItem.css';
// import { completeIcon } from './completeIcon';
// import { deleteIcon } from './deleteIcon';
import {RxCheck} from 'react-icons/rx'
import { RiCloseCircleLine } from "react-icons/ri";


function TodoItem(props){
    return (
        <li className='TodoItem'>
            
            
            <div className='Icon Icon-check'>
                <RxCheck className={` ${props.completed && "Icon-check--active"}`}
                onClick={props.onComplete}
                />
            </div>
            
            
            <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
            
            <div className='Icon Icon-delete'>

                <RiCloseCircleLine
                onClick={props.onDelete}
                />
            </div>
            
        </li>
    );
}
export {TodoItem}