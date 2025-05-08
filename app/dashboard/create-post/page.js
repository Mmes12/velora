import { auth } from "@/auth"
import { AuthorizationCheck } from "@/config/suthorization-check"
import CreatePost from "./create-post"


export default async function page() {
  const session = await auth();
  return(
    <>
      <AuthorizationCheck />
      <CreatePost userId={session?. user.id}/>
    </>
  )
}