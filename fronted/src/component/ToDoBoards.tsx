// @ts-ignore

import {ToDo} from "../model/ToDo";
import {useState} from "react";
import ToDoBoard from "./ToDoBoard";
import ToDoCard from "./ToDoCard";


export type ToDoBoardsProps = {
    toDoBoards: ToDo[],
}

export default function ToDoBoards (props:ToDoBoardsProps) {
    const [titles, setTitles] = useState("")

    const toDoBoardToDo = props.toDoBoards.filter(({title})=>
          title.toLowerCase().includes(titles.toLowerCase)))


    const toDoBoardToDo = props.toDoBoards.filter((todos)=>{
            todos.status === "OPEN"
    }


    return (
        <>
            {
                toDoBoards.map((todo:ToDo)=>
                <ToDoBoard toDos={props.toDoBoards} title={"Todo"}/>
            }
        </>
    )
}



