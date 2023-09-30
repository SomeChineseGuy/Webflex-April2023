// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client'

export default async function handler(req, res) {
  //Connect
  const prisma = new PrismaClient()

  // Delete
  if(req.method === "DELETE") {
    const item = req.body.item
    await prisma.url.delete({
      where: {
        id: item.id
      }
    })
    res.status(200).json({ message: 'Item was delete' })
  }

  // Edit
  if(req.method === "PUT") {

  }

  // Disconnect
  await prisma.$disconnect()
  
}
