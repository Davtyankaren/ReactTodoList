import './App.css';
import { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import TodoFooter from './TodoFooter';

function App() {
  const checkDuplicate = (todos, text) => {
    let result = false;
    todos.forEach((element) => {
      if (element.text === text) {
        result = true
      }
    })
    return result
  }

  


  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Learn HTML',
      isCompleted: false,
    },
    {
      id: 2,
      text: 'Learn CSS',
      isCompleted: false,
    },
    {
      id: 3,
      text: 'Learn JS',
      isCompleted: false,
    },
    {
      id: 4,
      text: 'Learn React',
      isCompleted: false,
    }

  ])




  let textOfArray = todos.map((todo) => todo.text)

  let completedSize = todos.filter((todo) => todo.isCompleted).length

  const [text, setText] = useState('')
  console.log(text, 'app')
  const [checkedAll, setCheckedAll] = useState(false)
  return (
    <div className="App">
      <TodoForm
        text={text}
        setText={setText}
        textOfArray={textOfArray}
        onDelete={() => setText('')}
        onAdd={(text) => {
          if (text !== '' && !checkDuplicate(todos, text)) {
            setTodos([
              ...todos,
              {
                id: Math.random(),
                text: text,
                isCompleted: false
              }
            ])
          }
          setText('')
        }} />
      <hr />
      <TodoList
        text={text}
        setText={setText}
        todos={todos}
        checkedAll={checkedAll}
        setCheckedAll={setCheckedAll}
        setTodos={setTodos}
        completedSize={completedSize}
        length={todos.length}

        onDelete={(todo) => {
          setTodos(todos.filter((t) => t.id !== todo.id))
        }}
        onChange={(newTodo) => {
          setTodos(todos.map((todo) => {
            if (todo.id === newTodo.id) {
              return newTodo
            }
            return todo
          }))
        }}
      />
      <hr />
      <TodoFooter
        completedSize={completedSize}
        length={todos.length}
        setCheckedAll={setCheckedAll}
        onClearCompleted={() => {
          setTodos(todos.filter((todo) => !todo.isCompleted))
        }} />
    </div>
  );
}

export default App;
