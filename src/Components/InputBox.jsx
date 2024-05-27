import React from 'react';
import { useState } from 'react'; 
import "./InputBox.css"

const InputBox = () => {
    const [pretodo,setNewtodo]=useState([])
     const  [todos,setTodo]=useState([])
     const [edit,setEdit]= useState(-1)
    const [preone,setNewone]=useState()

    const [pretwo,setNewtwo]=useState()

    const [current,setFilter]=useState("")
      
    // console.log(prefilter);

    const latest=()=>{
        

        setNewtodo([...pretodo,{
            name:preone,
            desc:pretwo,
            status:"notcompleted",
        }])
        setTodo([...pretodo,{
            name:preone,
            desc:pretwo,
            status:"notcompleted",
        }])
        setNewone("")
        setNewtwo("")
    }

   function handleEdit(i){
    console.log(pretodo[i])
    setNewone(pretodo[i].name)
    setNewtwo(pretodo[i].desc)
    setEdit(i)
   }


    return (
      
        <div className="body">
            <h1 className="title">My Todo</h1>
        <div className="searchBox">
           <input type="text"value={preone} onChange={(e)=>setNewone(e.target.value)} className="todo todo-name" placeholder="Todo Name"/> 
           <input type="text" value={pretwo} onChange={(e)=>setNewtwo(e.target.value)} className="todo todo-description" placeholder ="Todo Description"/>
          {edit >= 0 ?<button className='add_todo_btn' onClick={()=> {
            pretodo[edit].name = preone
            ,pretodo[edit].desc =pretwo ,
            setEdit(-1),
            setNewone('')
    setNewtwo('') }        }>Update</button> : <button className="add_todo_btn" onClick={latest}>Add Todo</button>}
           </div>
           <div className="midsection">
            <p className="midsection-title">My Todos</p>
            <p className="midsection-btn">Status Filter: 
            <select  onChange={(e)=>{
                     
                   if (e.target.value ==="completed"){
                        let val = todos.filter((e)=> e.status ==="completed")
                        setNewtodo(val)
                   }
                   else if(e.target.value ==="notcompleted"){
                    let val = todos.filter((e)=> e.status !=="completed")
                    setNewtodo(val)
                   }
                   else{
                       setNewtodo(todos)
                   }
                }}>
                <option value="all" className="">All</option>
                <option value="completed" className="">Completed</option>
                <option value="notcompleted" className="">Not Completed</option>
                </select></p>
           </div>
           <div className='parenttodos'>
           {pretodo.map((ele,index)=>{
            return(
               
                <div className="todos">
                <div className="Name">
                    <p>Name: {ele.name}</p>
                </div>
    
                <div className="description">
                <p>Description: {ele.desc}</p>
                </div>
    
                <div className="status">
                <p>Status: <select onChange={(e)=>{
                    pretodo[index].status =e.target.value
                    todos[index].status = e.target.value              
                
                }}
                     className={ele.status === "completed"?"options completed": "options notcompleted"} value={pretodo[index].status}>
                    <option value={"completed"} className="completed">Completed</option>
                <option value={"notcompleted"} className="notcompleted">Not Completed</option>
                </select></p>
                
                </div>
                <div className="cardbuttons">
                    <button className="edit" onClick={()=> handleEdit(index)}>Edit</button>
                    <button className="delete" onClick={()=>{
                    let val=     pretodo.splice(index,1)
                    setNewtodo([...pretodo  ])
                        
                    }} >Delete</button>
                </div>
    
               </div>
               
            )
           })}
           </div>
          
           </div>
    );
};

export default InputBox;