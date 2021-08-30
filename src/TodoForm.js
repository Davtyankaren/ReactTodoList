import {React, useState} from 'react'
import './TodoForm.css'



function TodoForm({onAdd,text,setText,textOfArray,onDelete}) {
    return (
            <form onSubmit={(e)=>{
                e.preventDefault();
                textOfArray.includes(text)? onDelete() : onAdd(text)
            }}>
                <input type='text' value={text} className='formINPUT'
                onChange={(e) => {
                    setText(e.target.value)
                }} />
                <button className={'AddBTN'}>{textOfArray.includes(text)? 'D':'A'}</button>
            </form>
    )
}

export default TodoForm
