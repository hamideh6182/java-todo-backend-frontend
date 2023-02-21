
import {Todo} from "../model/Todo";
import {useState} from "react";
import TodoCard from "./TodoCard";
import "./TOdoBoards.css"

export type ToDoBoardsProps = {
    todos: Todo[],
    deleteTodo(id:string):void
    updateToDo(id:string,todo:Todo):void
}

export default function TodoBoards (props:ToDoBoardsProps) {
   const openTodos = props.todos.filter((todo)=>todo.status === "OPEN").map((todo)=>{
       return(
           <TodoCard todo={todo} deleteTodo={props.deleteTodo} updateTodo={props.updateToDo}/>
       );
   }).reverse();

   const progressTodos = props.todos.filter((todo)=>todo.status === "IN_PROGRESS").map((todo)=>{
       return(
           <TodoCard todo={todo} deleteTodo={props.deleteTodo} updateTodo={props.updateToDo}/>
       )
   }).reverse();

    const doneTodos = props.todos.filter((todo)=>todo.status === "DONE").map((todo)=>{
        return(
            <TodoCard todo={todo} deleteTodo={props.deleteTodo} updateTodo={props.updateToDo}/>
        )
    }).reverse();

    return(
        <div className={"todo-gallery"}>
            <div className={"todo-gallery-status"}>
                <h3>OPEN</h3>
                {openTodos}
            </div>
            <div className={"todo-gallery-status"}>
                <h3>PROGRESS</h3>
                {progressTodos}
            </div>
            <div className={"todo-gallery-status"}>
                <h3>DONE</h3>
                {doneTodos}
            </div>
        </div>
    );
}



