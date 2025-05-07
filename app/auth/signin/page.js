import { auth, signIn } from "@/auth";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default async function SignIn(){
const session = await auth();
console.log(session)
  return(
    <main className="min-h-scren flex justify-center bg-gray-50 py-8 px-2">
      <article>
        <div className="w-full md:w-[24em] rounded-md bg-white p-4">
          <h1 className="text-2xl mb-2">sign into Velora</h1>
          <p className="text-sm text-gray mb-4"> Sign into using...</p>
          <form 
          action={ async () => {
            "use server"
               await signIn("google")
          }}
          className="mb-2">
            <button type="submit" className="w-full h-[3.2em] flex justify-center items-center gap-2 border-b-2 border-blue-500 bg-black rounded-md"><FcGoogle className="text-2xl"/>
            <span className="text-white text-lg ">Google account</span>
            </button>
          </form>
          <p className="text-xs text-gray-600">By clicking on the sign-in button you confirm that you have agreed with our{""}
            <Link href ="#" className="text-gray-800 underline">Terms of use</Link>
            <Link href="#" className="text-gray-800 underline ">Privacy and policy</Link>
          </p> 
        </div>
      </article>
    </main>
  )
}