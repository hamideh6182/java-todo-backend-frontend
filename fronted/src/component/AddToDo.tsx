import {ChangeEvent, useEffect, useState} from "react";
import {ToDo} from "../model/ToDo";
import axios from "axios";



export default function InputUser(){
    function addToDo(description:string) {

        axios.post('./api/todo', {
                description:description,
                status: 'OPEN'
            }
        )
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }




    const[description,setDescription]=useState("");

    function handleInput(event:ChangeEvent<HTMLInputElement>){
        setDescription(event.target.value)
    }


    return(
        <div>
            <input onChange={handleInput}/>
            <button onClick={()=>addToDo(description)}>click</button>
        </div>

    );

}
