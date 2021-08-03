import React,{useState} from 'react'
import './input.css'
import { useDispatch } from 'react-redux'
import { saveTodo } from '../features/todoSlice'

const Input = () => {
    const [input, setInput] = useState("")
    const dispatch = useDispatch()

    const addToDo = () => {
        
            dispatch(saveTodo({
                item:input,
                 done:false,
                 id:Date.now()    
             }      
             ))
      setInput('')
    }
    return (
        <div>
            <div className="input">
                <input type="text"  placeholder="Add Todo Here..." value={input} onChange={e => setInput(e.target.value)} />
                <button onClick={addToDo}>Add</button>
            </div>
        </div>
    )
}

export default Input
