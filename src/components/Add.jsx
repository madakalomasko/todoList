import { useState } from "react"
import Delete from "./Delete"
import TodoBody from "./TodoBody"

const Add = ()=>{
    const [add, setadd] = useState(false)
    const [showDelete, setShowDelete] = useState(false)

    const todoWindow = () => {
        return setadd(true)
    }
    return <div>
    <button onClick={() => {
        todoWindow()
    }}>Add</button>
     <TodoBody add={{add, setadd, showDelete}}/>
     <Delete setShowDelete={{setShowDelete, add}}/>
    </div>
}

export default Add