import React, {useEffect, useState} from 'react';
import './App.css';
import "./component/AddToDo"
import "./component/TodoBoards"
import InputUser from "./component/AddToDo";
import "./component/Header"
import Header from "./component/Header";
import axios from "axios";
import {Todo} from "./model/Todo";
import TodoBoards from "./component/TodoBoards";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import AddTodo from "./component/AddToDo";

function App() {
 // const [description,setDescription]=useState("");
  const [todos,setToDos]=useState<Todo[]>([]);

  function fetchTodos(){
    axios.get("./api/todo")
        .then((response) => {
          setToDos(response.data)
        })
        .catch((error) => {
              console.error(error)
            }
        )
  }

  function deleteTodo(id:string){
      axios.delete("./api/todo"+id)
          .then(()=> {
                  fetchTodos();
              }
          ).catch((error)=>
          console.error((error))
      )
  }

  function updateTodo(id:string,todo:Todo){
      axios.put("./api/todo"+id+"/update"+todo)
          .then(()=>{
              fetchTodos();
              }
          ).catch((error)=>
          console.error((error))
      )
  }

    function addToDo(todoToAdd: Todo) {
        axios.post("/api/todo", todoToAdd)
            .then(() => {
                fetchTodos();
            })
            .catch((error) => {
                console.error("Something went wrong :(" + error)
            });
    }

    useEffect(()=>{
       fetchTodos()
    },[])


  return (
    <div className="App">
      <Header/>
        <div>
            <div className="App">
                <AddTodo addTodo={addToDo}/>
                <TodoBoards updateToDo={updateTodo} deleteTodo={deleteTodo} todos={todos}/>
            </div>
        </div>

    </div>
  );
}

export default App;
