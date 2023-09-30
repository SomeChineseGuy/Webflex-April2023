import { PrismaClient } from '@prisma/client'

// only works in backend NOT front end
const prisma = new PrismaClient()

/*
const pool = new Pool({
  host: localhost,
  port: 5432
})

*/

async function main() {
  // ... you will write your Prisma Client queries here
  await prisma.url.createMany({
    data: [
      {longUrl: "https://www.youtube.ca/", shortUrl: "b2b2b2", active: true, userId: 1},
      {longUrl: "https://www.facebook.ca/", shortUrl: "c3c3c3", active: true, userId: 1},
    ]
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })