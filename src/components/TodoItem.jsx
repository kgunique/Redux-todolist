import React from 'react'
import CheckBox from '@material-ui/core/Checkbox';
import './todoitem.css';
import { useDispatch } from 'react-redux';
import { setCheck,setDelete } from '../features/todoSlice';
// import { setDelete } from '../features/todoSlice';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoItem = ({name,done,id}) => {
const dispatch = useDispatch()
    const handleCheck = ()=>{
        dispatch(setCheck(id))
    }
    const handleDelete = ()=>{
        // dispatch(setDelete(id))
        dispatch(setDelete({id:id}))
    }

    return (
        <>
        <div className="todoItem">
            {/* checkboxes */}
            
            <CheckBox 
                checked={done}
                color='primary'
                onChange={handleCheck}
                inputProps={{'aria-label':'secondary checkbox'}}/>
            
            {/* name */}
            <p className={done && 'todoItem--done'}>{name} </p>
            <button onClick={handleDelete}><DeleteIcon/></button>  

        </div>
        </>
    )
}

export default TodoItem
