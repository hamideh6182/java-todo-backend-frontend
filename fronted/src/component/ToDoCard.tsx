import {ToDo} from "../model/ToDo";

export type ToDoCardProps = {
    toDo : ToDo
 }

 export default function ToDoCard(props:ToDoCardProps){
    return(
        <div>
            <p>{props.toDo.description}</p>
            <p>{props.toDo.status}</p>
        </div>
    )
 }