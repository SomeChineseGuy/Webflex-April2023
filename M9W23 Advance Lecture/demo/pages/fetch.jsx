import axios from "axios"
import { useEffect, useState } from "react"

// Front End
export default function Fetch(props) {
  const [gotData, setGotData] = useState(false);
  const [url, setUrl ] = useState('')
  // useEffect(() => {
  //   axios.get('https://dog.ceo/api/breeds/image/random')
  //   .then(({data}) => {
  //     console.log(data);
  //     setUrl(data.message)
  //     setGotData(true)
  //   })
  // }, []);
  console.log(props);

  return (
    <div>
      <h1>Welcome to the fetch page!</h1>
      {/* {gotData && <img src={url} />} */}
      <img src={props.message} alt="" />
    </div>
  )
}

// Back - End
export async function getServerSideProps() {
  const {data} = await axios.get('https://dog.ceo/api/breeds/image/random')
  console.log(data.message);
  return {
    props: {
      message: data.message,
      username: "Alvin"
    }
  }
}

// next has 2 different types of backend you can use per page
// you can only pick ONE of the 2 
// getServerSideProps
// getStaticProps