import React from 'react'
// import {useSelector} from 'react-redux';

const Totalcompleted = () => {
    // const completedtodos = useSelector((state) => 
    //     state.todoList.filter((todo) => {return todo.done === true})
    // )
    return (
        <div>
            <hr style={{marginTop:'10px'}}/>
            {/* <h4>Done : {completedtodos.length}</h4> */}
            <h4>Total Completed Items : 0</h4>
        </div>
    )
}

export default Totalcompleted
