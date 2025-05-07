import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer(){
  return(
    
      <footer className=" grid grid-cols-1 gap-4 md:px-8 md:grid-cols-2 lg:grid-cols-3 py-4 px-2 lg:gap-0">
        <div>
        <p className="text-2xl text-blue-500 font-bold ">Velora</p>
        <p className=" text-xs text-gray-600">Velora Blog</p>
        </div>
        <div>
          <p className="text-md text-gray-700">Abuja office</p>
          <p className="text-md text-gray-700"> Ademola Adetokunbo</p>
        </div>
        <div>
          <ul className="flex lg:justify-end items-center gap-4">
            <li><Link href="#" className=" text-blue-500 text-2xl"><FaFacebookF /></Link></li>
          <li><Link href="#" className=" text-blue-500 text-2xl"><FaInstagramSquare /></Link></li>
          <li><Link href="#" className=" text-blue-500 text-2xl"><FaXTwitter /></Link></li>
          </ul>
        <ul className="flex lg:justify-end items-center gap-4">
          <li><Link href="#" className="text-xs text-gray">terms of use</Link></li>
          <li><Link href="#" className="text-xs text-gray">bug bounty</Link></li>
          <li><Link href="#" className="text-xs text-gray">FAQS</Link></li>
        </ul>
        </div>
      </footer>
    
  )
}