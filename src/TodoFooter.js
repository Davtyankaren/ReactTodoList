import React, { useEffect } from 'react'
import './TodoFooter.css'

function TodoFooter({ length, onClearCompleted, completedSize, setCheckedAll }) {
    useEffect(() => {
        { completedSize === length && length !== 0 ? setCheckedAll(true) : setCheckedAll(false) }
    }, [length, completedSize])

    return (
        <div className='footerDIV'>
            <span>{completedSize}/{length} is Completed</span>
            <button onClick={onClearCompleted} className='clearBTN'>Clear Completed</button>
        </div>
    )
}

export default TodoFooter
