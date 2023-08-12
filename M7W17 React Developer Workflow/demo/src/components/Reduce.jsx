import { useReducer, useState } from "react";
const initialState = {
  counter: 0,
  username: "Alvin",
  isLoggedIn: false,
  userData: [],
  userValues: {}
}

const Reduce = () => {
  const [counter, setCounter ] = useState(0);
  const [str, setStr] = useState("");
  const reduce = (state, action) => {
    console.log(action)
    if(action.type === 'increment') {
      return {
        ...state,
        counter: state.counter + 1
      }
    }
    if(action.type === 'decrement') {
      return {
        ...state,
        counter: state.counter - 1
      }
    }
    if(action.type === 'joe') {
      return {
        ...state,
        username: 'joe',
        isLoggedIn: action.isLoggedIn,
        counter: action.count
      }
    }
    if(action.type === 'ryan'){
      return {
        ...state,
        username: "ryan",
        isLoggedIn: action.isLoggedIn,
        counter: action.count
      }
    }
    if(action.type === 'submitbutton') {
      return {
        ...state,
        username: action.str
      }
    }
  }
  const [state, dispatch] = useReducer(reduce, initialState);

  const increment = () => {
    dispatch({type: 'increment', otherKey: "Someotherstuff?"})
  }

  const decrement = () => {
    dispatch({anotherVal: 10, type: 'decrement'})
  }

  const joe = () => {
    dispatch({type: 'joe', isLoggedIn: false, count: 1000})
  }

  const ryan = () => {
    dispatch({type: 'ryan', isLoggedIn: true, count: -37837})
  }
  
  const updateText = (e) => {
    setStr(e.target.value);
  }
  const handleSubmit = () => {
    dispatch({type: 'submitbutton', str: str})
  }
  return (
    <div>
      <p>The count is : {state.counter}</p>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <div>
        <div>
          <p>Name: {state.username}</p>
        </div>
      </div>
      <div>
        <div>
          <input type="text" value={str} onChange={updateText} />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>

      <div>
        <button onClick={joe}>Joe</button>
        <button onClick={ryan}>Ryan</button>
      </div>
    </div>
  )
}

export default Reduce;


