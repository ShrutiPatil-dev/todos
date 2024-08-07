import React,{useState} from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
import './App.css'

function Todo() {
    const [input, setInput] = useState();
  const [todos, setTodos] = useState([]);


  const handleSubmit = () =>{

    if( input !== ""){
      setTodos([...todos,input]);
      setInput("");
    }
    else{
        alert("You must write something");
    }
    
  }

  const handleDelete = (index) =>{
    const newItem = [...todos];
    newItem.splice(index,1);
    setTodos(newItem);

  }

  const handleClear=()=>{
    setTodos([]);
}

  return (
    <div className='todo'>

    <div className="container">

    
    <div className="search">
       <h1>Todo List</h1>
      </div>

      <div className="input">
     
        <input type="text" value={input} onChange={(e) => setInput(e.target.value) } placeholder='Add Your Task'/>
        <button onClick={handleSubmit}>Submit</button>
      </div>


       <div className="message">
                You have 
                {
                    !todos.length ? " no task"
                    : todos.length === 1 ? " 1 task"
                    : todos.length > 1 ? ` ${todos.length} task`
                    : null 
                }
       </div>
     
      
      <div className="list">
      {
        todos.map((todo,index) => {
           return <li key={index}>{todo} <span className="delete" onClick={() => handleDelete(index)}><RiDeleteBin5Line size={20} color="red"/></span></li>
        })
      }
    
      </div>


    </div>

    
  </div>
)
  
}

export default Todo
