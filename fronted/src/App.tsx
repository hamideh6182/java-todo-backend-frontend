import React, {useEffect, useState} from 'react';
import './App.css';
import "./component/AddToDo"
import "./component/ToDoBoards"
import InputUser from "./component/AddToDo";
import "./component/Header"
import Header from "./component/Header";
import axios from "axios";
import {ToDo} from "./model/ToDo";
import ToDoBoards from "./component/ToDoBoards";

function App() {
 // const [description,setDescription]=useState("");
  const [toDos,setToDos]=useState<ToDo[]>([]);




 /* function handleDescription(){
    setDescription(description)
  }*/
   function addNewToDo(newToDo: ToDo) {
         setToDos(prevState => [...prevState, newToDo])
   }
   

  function getAllToDos(){
    axios.get("./api/todo")
        .then((response) => {
          setToDos(response.data)
        })
        .catch(error => {
              console.error(error)
            }
        )
  }
    useEffect(()=>{
       getAllToDos()
    },toDos)

  // useEffect(()=>{
  //     addNewToDo(toDo)
  // },)

  return (
    <div className="App">
      <Header/>
        <div>
            <ToDoBoards toDoBoards={toDos}/>
        </div>
        <div>
          <footer>
            <InputUser />
          </footer>
        </div>


    </div>
  );
}

export default App;
