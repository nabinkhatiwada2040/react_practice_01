import React ,{Suspense,lazy} from "react";
import './App.css';
import image from './loading.gif'
const Home = lazy(()=>import('./Home'));
const About = lazy(()=>import('./About'));

    // <div className="App">

/* <ToDoList/> */
/*     
  <Header/>
<CreateNote
  passNote={addNote}
/>

{
addItem.map((val, index) =>{
  return  <Note
    key ={index}
    id={index}
    title={val.title}
    content={val.content}
  />;
})}
<Footer/> */



// import ToDoList from './Components/Todo/ToDoList'
// import Header from "./Components/Keep/Header"
// import Footer from "./Components/Keep/Footer"
// import CreateNote from "./Components/Keep/CreateNote"
// import Note from "./Components/Keep/Note"
// import { useState } from 'react';

// import Pokeman from "./Components/Pokeman/Pokeman"



function App() {

  // const [addItem, setAddItem] = useState([])
  // const addNote = (note) =>{
  //   // alert("i am clicked")
  //   setAddItem((pdata) =>{
  //     return [...pdata, note]
  //   })
   
  // }


    // const [state, setstate] = useState(initialState)


  return (
<div>

<Suspense fallback={<img src="image" alt="loading"/>}>
<Home/>
<About/>
</Suspense>

{/* <Pokeman/> */}


  



    </div>
  );
}

export default App;
