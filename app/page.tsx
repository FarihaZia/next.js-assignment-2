'use client'
import { useRouter } from "next/navigation"
import Header from "./components/Header"
import About from "./components/About"
export default function home(){
  return(
  <div >
    <Header/>
    <About/>
  </div>)
};