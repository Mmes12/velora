// "use client"
// import { db } from "@/config/firebase.config";
// import { timestampToDate } from "@/utils/timestamp-to-date";
// import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
// import { useSession } from "next-auth/react";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { useState } from "react";



// export default function Post({userId}){
//   const [post, setPosts] = React.useState([]);
//   const {data: session} = useSession;
//   console.log(session)
//   const userIdentifier = userId || (session?.user?.id)

//   React.useEffect(()=>{
//     const handleFetchPost =async() => {
//       const q =query(collection(db,"posts" ));
//       const onSnap = await getDocs(q, where("user", "==",  userIdentifier),orderBy("timecreated", "desc")
//     );
//     const compilePost = [];
//     onSnap.docs.forEach(doc => {
//         compilePost.push({
//         id: doc.id,
//         data:doc.data(),
//       });
//         setPosts(compilePost)
//         console.log(compilePost)
//     })
//     }
//     session ? handleFetchPost(): null;
//   },[session, userIdentifier])
  
//   return(
//     <main className="min-h-dvh p-2 bg-gray-50">
//     <h1 className="text-center m-3 md:my-7 text-3xl lg:text-5xl font-bold text-blue">VELORA BLOG</h1>
//     <p className="text-center text-gray-700">our blogs are written by trusted authors and well known writers</p>
//     <div className="grid grid-cols-1 md:p-10">
//     {post.map(post => <Link href="" key={post.id} className="space-y-2 group">
// <Image
//   width={300}
//   height={300}
//         src="/bg-2.webp"
//   alt="blog image"/>

//     <div className="flex justify-between">
//       <span className="text-blue text-sm">{session?.user?.name.touppcase()}</span>
//       <span className="text-blue-400 text-sm">{timestampToDate(post.data.timecreated)}</span>
//       </div>
//       <h1 className="font-bold text-lg"> {post.data.title} </h1>
//       <p className="text-sm text-gray-500  line-clamp-1 group-hover:underline">{post.data.body}</p>
//       </Link>
//     )}
//       </div>
//     </main>
//   )
// }
"use client"
import { db } from "@/config/firebase.config";
import { timestampToDate } from "@/utils/timestamp-to-date";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Post({ userId }) {
  const [posts, setposts] = React.useState([]);
  const { data: session } = useSession();
  const userIdentifier = userId || (session?.user?.id)

  React.useEffect(() => {
    const handleFetchPost = async () => {
      const q = query(collection(db, "posts"));
      const onSnap = await getDocs(q,
        where("user", "==", userIdentifier),
        orderBy("timecreated", "desc")
      );
      const compilePost = [];

      onSnap.docs.forEach(doc => {
        compilePost.push({
          id: doc.id,
          data: doc.data(),
        });
      })
      setposts(compilePost)
      console.log(compilePost)

    }
    session ? handleFetchPost() : null;
  }, [session, userIdentifier])

  return (
    <main className="min-h-dvh p-2 bg-gray-50">
      <h1 className="text-center m-3 md:my-7 text-3xl lg:text-5xl font-bold text-blue-300">VELORABLOG</h1>
      <p className="text-center text-gray-700">Our blogs are written by trusted authors and well known writers so that we can provide you the best blog articles tailored to meet your needs</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-2 md:p-10">
        {posts.map(post => <Link href={`/dashboard/post/${post.id}`} key={post.id} className="space-y-2 group">
          <Image
            width={300}
            height={300}
            src="/bg-2.webp"
            alt="blog-image"
          />
          <div className="flex justify-between">
            <span className="text-blue text-sm"> {session?.user?.name.toUpperCase()} </span>
            <span className="text-blue-400 text-sm pr-10"> {timestampToDate(post.data.timecreated)}</span>
          </div>
          <h1 className="font-bold text-lg">{post.data.title}</h1>
          <p className="test-sm text-gray-500 line-clamp-1 group-hover:underline">{post.data.body} </p>
        </Link>
        )}

      </div>
    </main>
  )
}