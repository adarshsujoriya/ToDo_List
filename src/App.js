import React, { useState } from 'react'
import "./App.css";
import TodoList from './TodoList';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const App = () => {

  const [InputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
   setInputList(event.target.value);
  };

  const listOfItems = () =>{
  setItems((olditems) => {
    return [...olditems, InputList];
  })
  setInputList("");
  };

  const deleteitem = (id) =>{
    console.log("daleted")

    setItems((olditems) => {
      return olditems.filter((arrele, index) =>{
          return index !== id;
      });
    });
  };

  return (
    <div className='main-div'>
      <div className="center-div">
        <br />
        <h1>Todo List</h1>
        <br />
        <input type="text" placeholder='Add an item' value={InputList} onChange={itemEvent} />
        <Button  className='mat-btn' onClick={listOfItems}> <AddIcon />  </Button>

        <ol>
          {/* <li> {InputList} </li> */}

          {Items.map( (itemval, index) => {
            return <TodoList
            key={index} 
            id={index}
            text={itemval}
            onSelect = {deleteitem}
             />
          })}
        </ol>
      </div>.
    </div>
  )
}

export default App
