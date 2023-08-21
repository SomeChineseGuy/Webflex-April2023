import { useEffect, useState } from "react";

const DocumentTitle = (props) => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const increment = () => {
    setCounter(counter + 1)
  }
  const decrement = () => {
    setCounter(counter - 1)
  }

  const increment2 = () => {
    setCounter2(counter2 + 1)
  }
  const decrement2 = () => {
    setCounter2(counter2 - 1)
  }

  useEffect(() => {
    console.log('Everytime a re-render happens');
    const intervalref = setInterval(() => {
      console.log('this runs every 2 secs');
    }, 2000);

    const cleanup = () => {
      console.log('clearing interval');
      clearInterval(intervalref)
    }

    return cleanup();

  })

  useEffect(() => {
    console.log('Render one time at load');
    document.title = `Counter ${counter}`
    setCounter(counter + 1)
    // axios.get('https://www.getdata.com')
    
  }, [])

  useEffect(() => {
    console.log('This runs everytime the counter updates');
  }, [counter])
  
  return (
    <div>
      <h1>Hello</h1>
      <div>
        <p>The count is: {counter}</p>
        <div>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>
      </div>
      <p>The count is: {counter2}</p>
      <div>
        <button onClick={increment2}>Increment</button>
        <button onClick={decrement2}>Decrement</button>
      </div>
    </div>
  )
}

export default DocumentTitle;