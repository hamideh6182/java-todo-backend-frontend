import {ToDo} from "../model/ToDo";
import ToDoCard from "./ToDoCard";

export type ToDoBoardProps = {
    toDos : ToDo[],
    title:string
}

export default function ToDoBoard (props:ToDoBoardProps){
    const toDoCard = props.toDos.map((toDo) =>
        {
            return <ToDoCard toDo={toDo}/>
        }
    )
    return(
        <div>
            {toDoCard}
        </div>

    )
}