
import React,{ useState } from "react";
import TodoItem from "./TodoItem";


function Main(){

const [inputText, setInputText] = useState("");
const [items, setItems] = useState([]);

function handleChange(event){
    const newValue = event.target.value;
    setInputText(newValue);

}

function addItem(){

    setItems((prevItems)=>{
        return [...prevItems, inputText];
    });
setInputText("");
}

function  deleteItem(id){
  setItems(prevItems => {
    return prevItems.filter((item, index) =>{
      return index !==id;
    });
  });
}

return(
     <>
  
  <div className="container">
<div className="heading">
<h1>My To-Do List</h1>
</div>

  <div className="form">
   
   <input onChange={handleChange} type="text"  value={inputText}/>
   <button onClick={addItem}>
 <span>Add</span>
   </button>
  </div>
  
 <ul>

  {items.map((todoItem,index)=>{
    return(
    <TodoItem  
    key={index}
     id={index}
    text = {todoItem}
  onChecked={deleteItem}
    />
    )
  })}
 </ul>
 </div>
  </>
)
}

export default Main;