import React,{useState} from 'react';
import Button  from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import './ToDo.css';
import ListCompo from "./ListCompo"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const ToDoList = () =>{

    const [name , setName] = useState("")

    const [newitem, setNewitem]= useState([])

    const textType = (e) =>{
        setName(e.target.value)
    }

    const listOfItems = () =>{
        setNewitem((oldval)=>{
            return[...oldval,name]
        });
        setName("")  ;
    };
    return(
        <>
           <div className="main-div">
               
               <h1> To Do List</h1>
               <br/>
               <div className="kada">
               <input type="text" value={name} onChange={textType} placeholder="add list"/>
               <br/>
               <br/>
               
               <Button onClick={listOfItems} variant="contained" >
               <AddIcon/>
                </Button>
                <br/>
               </div>
               <hr/>
               <ol>
                  
               
               {
                newitem.map((val, index)=>{
                    return(
                        <ListCompo key={index} text={val}/>
                    )
                })  
               }
               </ol>
           </div> 
           
           <button className="btn btn-primary text-center" >hello nabin</button>

        
        </>
    );
}
export default ToDoList;