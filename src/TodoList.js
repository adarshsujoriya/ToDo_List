import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const TodoList = (props) => {



  return (
    <div className="todo_styles">
       <button className='btn' onClick={() => {
        props.onSelect(props.id);
       }}> <DeleteForeverIcon /> </button>
         <li> {props.text} </li>
    </div>
   
  )
}

export default TodoList
