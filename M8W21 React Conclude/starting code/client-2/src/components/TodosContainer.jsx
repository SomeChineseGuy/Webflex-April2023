import { useEffect, useRef, useState } from "react";
import axios from 'axios';

const TodosContainer = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const userInputRef = useRef(null);

  useEffect(() => {
    axios.get('http://localhost:8080/todos')
    .then(({data}) => {
      console.log(data);
      setTodos(data)
    })
  }, [])

  const handleClick = (id) => {
    // not all api calls needs to be in a useEffect
    // all api calls should be in a function OR a useEffect

    axios.post(`http://localhost:8080/todos/${id}/checkoff`)
      .then((res) => {
        console.log(res.data);
        const results = todos.map(item => {
          if(item.id === id) {
            return {
              ...item,
              done: !item.done
            }
          }
          return item;
        });
    
        setTodos(results)
      })
  }

  const handleDelete = (id) => {
    axios.post(`http://localhost:8080/todos/${id}/delete`)
    .then(res => {
      console.log(res.data);
      const results = todos.filter(item => {
        if(item.id !== id) {
          return item;
        }
      })
      setTodos(results)
    })
  }

  const handleChange = (e) => {
    const userInput = e.target.value;
    setInput(userInput)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const todo = {
      done: false,
      task: input,
      id: Math.random(Math.floor * 3)
    }

    axios.post(`http://localhost:8080/todos/add`, {body: todo})
      .then((res) => {
        console.log(res.data);
        setTodos([...todos, todo]);
      })
  }

  return (
    <div>
      <h1>Hello</h1>
      {todos.map(({task, done, id}) => {
        return (
          <div key={id} >
            <p onClick={() => handleClick(id)}>{task} {done ? '✅' : '🟩'}</p>
            <button onClick={() => handleDelete(id)}>Delete</button>
          </div>
        )
      })}

      <form onSubmit={handleSubmit}>
        <label htmlFor="">Add todo</label>
        <input ref={userInputRef} type="text" onChange={handleChange} value={input}/>
        <button>Add</button>
      </form>
    </div>
  )
}

export default TodosContainer;