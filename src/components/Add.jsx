import { useState } from "react"
import TodoBody from "./TodoBody"

const Add = ()=>{
    const [add, setadd] = useState([])

    const todoWindow = () => {
        return setadd((pushinput)=>{
            console.log(pushinput)
           return [...pushinput , <div><input placeholder="todo..."/><button>Add todo</button></div>]
        })
    }
    return <div>
    <button onClick={() => {
        todoWindow()
    }}>Add</button>
     <TodoBody add={add}/>
    </div>
}

export default Add