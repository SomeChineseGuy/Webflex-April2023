import { useRouter } from "next/router"
import { PrismaClient } from '@prisma/client'
import { useEffect } from "react";
// Front End
export default function U ({url}) {
  const router = useRouter();

  useEffect(() => {
    if(url) {
      router.push(url.longUrl)
    }
  },[url])
  
  if(!url) {
    return(
      <div>
        <h1>{router.query.id} is not a short URL. </h1>
      </div>
    )
  }

  return (
    <div>
      loading....
    </div>
  )
}

// Back End
export async function getServerSideProps(req) {
  const id = req.params.id
  //Connect
  const prisma = new PrismaClient()
  // Get the data
  const url = await prisma.url.findFirst({
    where: {
      shortUrl: id
    }
  })
  
  // Disconnect
  await prisma.$disconnect()

  return {
    props: {
      url
    }
  }
}