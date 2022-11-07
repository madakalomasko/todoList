const TodoBody = (todo)=>{
    console.log(todo)
    return (
        <div className="todoBody">
            <ul>
                {todo.add}
                <li>todo one</li>
                <li>todo two</li>
                <li>todo three</li>
            </ul>
        </div>
    )
}

export default TodoBody