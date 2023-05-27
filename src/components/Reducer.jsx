import React, { useReducer } from 'react'

const Reducer = () => {
const initialTodos=[{
  id:1,
  name:"mugerwa"
}];
function reducer(state,action){
  switch(action.type){
    case 'ADD':
      return[
        ...state,
        {
          id:state.length+1,
          name:action.payload
        }
      ];
      case 'DELETE':
        return state.filter(todo=>todo.id!=action.payload)
    
  }

}
  const[todos,dispatch]=useReducer(reducer,initialTodos)
  return (
    <>
    <div>
      <p>{todos.length}</p>
      <label className='font-bold text-md text-slate-600'>Enter item</label> <br/>
      <input type="text" onBlur={(e)=>dispatch({
        type:'ADD',
        payload:e.target.value
      })} 
      className='my-2 border-2 border-slate-800 p-1 rounded focus:outline-none'/>
    </div>
    <p className='font-bold text-center text-2xl'>Yo todos</p>
    <ul>
      {
        todos.map(({id,name})=>(
          <li key={id}>-{ name}
          <button  className='p-2 bg-red-500 txt-wdhite text-sm rounded'
          onClick={()=>dispatch({
            type:'DELETE',
            payload:id
          })}
          >Delete</button>
          </li>
        ))
      }
    </ul>
    </>
  )
}

export default Reducer
