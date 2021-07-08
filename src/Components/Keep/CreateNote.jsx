import React, { useState } from 'react';
import "./../../../src/index.css"
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) =>{

    const [note,setNote] = useState({
        title:'',
        content:''
    })

    const InputEvent= (event)=>{

        // const value = event.target.value;
        // const name = event.target.value;

        const {name , value} = event.target;

        setNote((oldData) =>{
            return{
            
                ...oldData,
                [name]: value,
            }
        })
    }


    const addEvent = () =>{
        props.passNote(note)
    }

    return(
        <>
        <div className="main-content">
            <form>
                <input
                name="title"
                 type="text" 
                 value={note.title}
                  onClick={(InputEvent)} 
                  placeholder="Title" /> <br/> <br/>

                <textarea 
                name="content"
                rows="" 
                cols="" 
                value={note.content} 
                onChange={InputEvent} 
                placeholder="Write a note.."> 
                </textarea>
                <br/>
                <Button onClick={addEvent} variant="contained" color="primary">
                    <AddIcon/>
                </Button>

            </form>
        </div>
        </>
    )
}
export default CreateNote;