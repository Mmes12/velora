import Image from "next/image"
export default function Home() {
  return(
    <main className="">
      <div className=" relative">
        
      

        <Image
          width={200}
          height={100}
          src="/pexels-tima-miroshnichenko-6550162.jpg"
          alt="image"
          className=" photo w-[100vw] h-[90vh] opacity-50 flex"
          
        />

      <div className="absolute bottom-3 px-10 ">
          <p className="font-bold m-3">Featured</p>
          

          <div className=" text-blue-500 text-[2rem] text-5xl">
        <p>Breaking Into Product Design:</p>
        <p>Advice From Untitled Founder, Frankie</p>
          </div>

          <div className="text-[#F5FEFD] py-5 px-5" >
          <p>Let's get one thing out of the way: you don't need a fancy Bachelor's Degree to get into </p> <p>Product Design, we sat down with frankie sullivan to talk about gatekeeping in</p> <p>Product design and how anyone can get into this <span> growing industry </span></p>
          </div>
        </div>
        </div>
    
    </main>
  )
}
 //--let CurrentPhoto =0;
//const Photo = document.querySelectorAll('.photo');


//function Sildes(){

  //to dissapear and reappear
//Photo[CurrentPhoto].classList.remove('opacity-100');
//photo[CurrentPhoto].classList.add('opacity-0');

//increment
  //CurrentPhoto =(CurrentPhoto+1)% photo.lenght;


  //show the next photo
  //photo[CurrentPhoto].classList.add('opacity-0')
 //