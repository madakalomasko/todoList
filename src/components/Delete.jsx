const Delete = (state)=>{
   const setShowDelete = state.setShowDelete.setShowDelete
   const add = state.setShowDelete.add
   const handleClick = (event) => {
      event.preventDefault()
      setShowDelete((del)=>{
         return !del
      })
   }

   return  <>
   <button onClick={handleClick}>delete</button></>
}

export default Delete