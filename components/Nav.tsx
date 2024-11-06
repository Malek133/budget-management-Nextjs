'use client'

import Link from "next/link"
import {
  // SignInButton,
  // SignedIn,
  SignedOut,
  UserButton,
  useUser
} from '@clerk/nextjs'
import { Button } from "./ui/button";

const  NavBar = () => {

  const { isLoaded, isSignedIn } = useUser();
  return (
    // <div
    //  className='flex justify-end items-center gap-3 p-3 mx-24'
    // >
      
    //      <Link href="/Dashboard">
    //   <p>
    //     Dashboard
    //   </p>
    //   </Link>
    //   <Link href="/">
    //   <p>
    //     Home
    //   </p>
    //   </Link>
      
        

    //     <SignedOut>
    //         {/* <SignInButton /> */}
    //       </SignedOut>
    //       {/* <SignedIn> */}
    //         <UserButton />
    //       {/* </SignedIn> */}
       
    // </div>

    <div className="className='flex justify-end items-center gap-3 p-3 mx-24">
    {isLoaded &&
      (isSignedIn ? (
        <>
          <div className="flex justify-between items-center">
            <div className="flex text-2xl items-center font-bold">
              e <span className="text-amber-400">.Track</span>
            </div>

            <div className="md:flex hidden">
              <Link href={"/budjets"} className="btn">
                Mes budjets
              </Link>
              <Link href={"/dashboard"} className="btn mx-4">
                Tableau de bord
              </Link>
              <Link href={"/transactions"} className="btn">
                Mes Transactions
              </Link>
            </div>
            <SignedOut>
            </SignedOut>
            <UserButton/>
          </div>

          <div className="md:hidden flex mt-2 justify-center">
              <Link href={"/budjets"} className="btn btn-sm ">
                Mes budjets
              </Link>
              <Link href={"/dashboard"} className="btn mx-4 btn-sm">
                Tableau de bord
              </Link>
              <Link href={"/transactions"} className="btn btn-sm">
                Mes Transactions
              </Link>
            </div>
        </>
      ) : (
        <div className="flex items-center justify-between">
           <div className="flex text-2xl items-center font-bold">
              e <span className="text-amber-500">.Track</span>
            </div>
           <div className=" flex mt-2 justify-center">
              <Link href={"/sign-in"} className="btn btn-sm">
               <Button variant="outline">Se connecter</Button> 
              </Link>
              <Link href={"/sign-up"} className="btn mx-4 btn-sm btn-accent">
                <Button variant="outline">S inscrire</Button>
              </Link>
              
            </div>
        </div>
      ))}
  </div>
  )
}

export default NavBar