import React from 'react'
import TodoItem from './TodoItem'
import './TodoList.css'

function TodoList({
    todos,
    onDelete,
    onChange,
    text,
    setText,
    checkedAll,
    setCheckedAll,
    setTodos,
}) {
    console.log(text,'todolist')
    return (
        <div className="todo">
            <span className='selected'>
                <input type='checkbox'
                    checked={checkedAll}

                    onChange={({ target: { checked } }) => {
                        setCheckedAll(checked)
                        setTodos(todos.map((todo) => ({ ...todo, isCompleted: checked })))
                    }}
                />
                Select All</span>
            {
                todos.map((todo) => {
                    return (
                        <TodoItem
                            text={text}
                            setText={setText}
                            key={todo.id}
                            todo={todo}
                            onDelete={onDelete}
                            onChange={onChange}
                        />
                    )
                })
            }
        </div>
    )
}

export default TodoList
