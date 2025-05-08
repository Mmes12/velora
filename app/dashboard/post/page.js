import { auth } from "@/auth"
import { AuthorizationCheck } from "@/config/suthorization-check"
import Post from "./post"

export default async function page() {
  return(
    <>
    <AuthorizationCheck/>
    <Post userId={session?.user?.id} />
    </>
  )
  
}
