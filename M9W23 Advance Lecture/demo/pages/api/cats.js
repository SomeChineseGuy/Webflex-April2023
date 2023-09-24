// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios"

export default async function handler(req, res) {
  // connect to a DB
  // send request from back end to front end

  if(req.method === 'GET') {
    // I want this to give me a cat fact
    const {data} = await axios.get('https://catfact.ninja/fact')

    res.json({data: data.fact})
  }

  if(req.method === 'POST') {
    //  I want this to give me a dog picture
    res.json({data:"You got the POST Method!"})
  }

  if(req.method === 'DELETE') {
    res.json({data:"You got the DELETE Method!"})
  }
  // res.status(200).json({ name: 'Alvin' })
}
