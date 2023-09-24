import axios from "axios"
import { useEffect } from "react"

export default function Cats() {
  useEffect(() => {
    // getting more data from the database AFTER the page has loaded and we need more DB data
    axios.get('/api/cats')
    .then((res) => {
      console.log(res);
    })
  })
  return (
    <div>
      <h1>Welcome to my Cats Page!</h1>
    </div>
  )
}

// app.get('/api/cats')