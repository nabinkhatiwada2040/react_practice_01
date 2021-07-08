import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';


const Note = (props) =>{
    return(
        <>
        <div className="note">
            <h1>{props.title}</h1>
            <p> {props.content}</p>
            <Button color="primary" variant="contained">
            <DeleteIcon/>
            </Button>
        </div>
        </>
    )
}
export default Note;