"use client"
import { useEffect, useState } from "react"
export default function Home(){

  const[count,setCount] = useState(0)

  useEffect(() => {
    const getData = async
  })
  return(
    <main className=" flex flex-col gap-20 items-center justify-center px-20 py-20">
      <p className="text-4xl font-bold ">COUNT</p>
      <button>INCREMENT</button>
      <button>DECREMENT</button>
    </main>
  )
}
/*import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <p>my image</p>
        <Image width={300} height={300} src="/download.jpg" alt="image"/>
      </div>
    </main>
  );
}*/

/*Assignment:create a landing page or a home page;
export default function landingPage(){
  return(
    <main>
      <div className="">
        <ul className=" flex ">
          <li>Home</li>
          <li>About us</li>
          <li>contact us</li>
          <input type="button" placeholder="sign-in"></input>
        </ul>
        <Image width={300} height={300} src="/pexels-ekateri" alt="image" />
        </div>
    </main>
  );
}*/



