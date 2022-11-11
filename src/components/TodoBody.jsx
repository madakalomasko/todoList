import { useState } from "react"



const TodoBody = (state)=>{
    const add =state.add.add
    const setadd = state.add.setadd
    const showDelete = state.add.showDelete
    const [value, setvalue] = useState("")
    const [addToArray, setAddToArray] = useState([])
   

    const handleChange = (change) => {
        setvalue(change.target.value)
    }
   
    const handleClick = (event)=>{
        event.preventDefault()
        setvalue(null)
        setAddToArray((click)=>{
            if (value) return [value, ...click]
            else return click
        })
        setadd(false)
    }
    return (
        <div className="todoBody">
            {add? <><input type="text" onChange={handleChange} /> <button onClick={handleClick}>click to add</button></> : <></>}
            <ul>
                {addToArray.map((todo, index)=>{
                    console.log(showDelete)
                    return <li key={index}>{todo}{showDelete? <button onClick={(event)=>{
                        event.preventDefault()
                        setAddToArray((click)=>{
                            let arr = [...click]
                            arr.splice(index, 1)
                            return arr
                        })
                    }}  className="deleteButton">delete</button>:<></>}</li>
                })}
            </ul>
        </div>
    )
}

export default TodoBody