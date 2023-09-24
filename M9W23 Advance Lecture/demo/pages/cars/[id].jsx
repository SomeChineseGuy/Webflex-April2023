import Link from "next/link";
import { useRouter } from "next/router"

export default function AllCars() {
  const route = useRouter()
  console.log(route);
  const handleReplace = () => {
    route.replace('/hello')
  }
  return (
    <div>
      <h1>You are on the {route.query.id} page</h1>
      <button onClick={handleReplace}>Replace</button>
      <Link href={'/hello'} > Hello </Link>
    </div>
  )
}
