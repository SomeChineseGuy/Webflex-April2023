import { useState } from "react";
import style from '../styles/Hello.module.css'

export default function Hello() {
  const [count, setCounter] = useState(0);
  const increment = () => {
    setCounter(count + 1)
  }

  const decrement = () =>{
    setCounter(count - 1)
  }
  return (
    <div>
      <h1 className={style.title}>Welcome, the count is {count}</h1>
      <div className={style.btnContainer}>
        <button className={style.btn} onClick={increment}>Increment</button>
        <button className={style.btn} onClick={decrement}>Decrement</button>
      </div>
    </div>
  )
}