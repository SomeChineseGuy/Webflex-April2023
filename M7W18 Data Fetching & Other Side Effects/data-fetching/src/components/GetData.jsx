import axios from 'axios';
import React, { useEffect, useState } from "react";

const GetData = () => {
  // const [counter, setCounter] = useState(0);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [data, setData] = useState("");
  const [dataState, setDataState] = useState({
    counter: 0,
    isLoaded: false,
    data: ""
  });

  const [counter2, setCounter2] = useState(0);
  const [isLoaded2, setIsLoaded2] = useState(false);
  const [data2, setData2] = useState("");

  const increment = () => {
    // setCounter(counter + 1)
    setDataState(prev => {
      console.log(prev);
      return {
        ...prev,
        counter: prev.counter + 1
      }
    })
  }
  const decrement = () => {
    // setCounter(counter - 1)
    setDataState(prev => {
      console.log(prev);
      return {
        ...prev,
        counter: prev.counter - 1
      }

    })
  }

  const increment2 = () => {
    setCounter2(counter2 + 1)
  }
  const decrement2 = () => {
    setCounter2(counter2 - 1)
  }

  useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then(({data}) => {
        // setData(data.message)
        // setIsLoaded(true)
        setDataState(prev => {
          return {
            ...prev,
            isLoaded: true,
            data: data.message
          }
        })
      })
  }, [dataState.counter]);

  useEffect(() => {
    axios.get('https://catfact.ninja/fact')
      .then(({data}) => {
        console.log(data.fact);
        setData2(data.fact)
        setIsLoaded2(true)
      })
  },[counter2])

  return (
    <div>
      <h1>Get me some data!!</h1>
      <div>
        <p>Number of Dog pics: {dataState.counter}</p>
        <div>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>
      </div>

      <div>
        <p>Cat Fact: #{counter2}</p>
        <div>
          <button onClick={increment2}>Increment</button>
          <button onClick={decrement2}>Decrement</button>
        </div>
      </div>

      {isLoaded2 && <p>{data2} </p>}
      {dataState.isLoaded && <img src={dataState.data} alt="dog pic"/>}
    </div>
  )
};

export default GetData;
