"use client"
import Link from "next/link";
import { useState } from "react";
import { FaGripLines } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <main className="bg-white shadow-grey-200 p-4 w-full">
      <div className="flex justify-between item-center pt-3 px-5 h-[50px]">
        <p className=" text-2xl font-bold text-blue-500">Velora</p>
        <ul className=" hidden md:flex gap-10 font-semibold cursor-pointer">
          <li><Link href= "/">Home</Link></li>
          <li><Link href="/dashboard/create-post">Create-post</Link></li>
          <li><Link href="/dashboard/post">Post</Link></li>
          <li><Link href= "/dashboard/profile">profiles</Link></li>
          
        </ul>
        <p className="hidden md:block w-[80px] h-[40px] bg-blue-500 text-white text-center pt-1"><Link href="/auth/signin">Sign-in</Link></p>
        <div className="block md:hidden">
          <FaGripLines className="block md:hidden" onClick={toggleMenu} />
        </div>
        {menuOpen && (
          <div className="absolute bg-white md:hidden px-5 pb-1">
            <ul className="flex flex-col gap-2">
              <li><Link  href="/">Home</Link></li>
              <li><Link href="/dashboard/create-post" >Create-post</Link></li> 
              <li><Link href="/dashboard/post">Post</Link></li>
              <li> <Link href="/dashboard/profile">profiles</Link></li>
            </ul>
            <p className="mt-2"><Link href="/auth/signin">signIn</Link></p>
          </div>
        )}
      </div>
    </main>
  )
}