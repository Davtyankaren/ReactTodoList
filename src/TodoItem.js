import React from 'react'
import { useHistory } from 'react-router-dom'
import './TodoItem.css'

function TodoItem({ todo, onDelete, onChange, text, setText }) {
    const history = useHistory()
    console.log(text, 'todoitem')
    return (
        <div className="todos">
            <label>
                <input type="checkbox" checked={todo.isCompleted} onChange={(e) => {
                    onChange({
                        ...todo,
                        isCompleted: e.target.checked,
                    });
                }} />

                <span
                    onClick={() => history.push(`/info/${todo.id}`)}
                    style={{
                        backgroundColor: text === todo.text ? 'red' : 'transparent',
                        color: text === todo.text ? 'white' : 'white'
                    }}>{todo.text}</span>
                <button className='DeleteBTN' onClick={() => {
                    onDelete(todo)
                }}>DELETE</button>
            </label>
        </div >
    )
}
export default TodoItem
