import React, { useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete';



const ListCompo = (props) =>{

    const [state, setState] = useState(false);
    const cutIt = () =>{
        setState(true)
    }
    return(
        <>
         <div>
            
         <li style={{textDecoration: state ?"line-through" :"none"}}><span onClick={cutIt}> <DeleteIcon/></span> {props.text}</li>
         </div>


        </>
    )
}
export default ListCompo;