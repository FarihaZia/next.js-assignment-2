import Link from "next/link"

 function Header(){
    return(
        <div className="bg-black h-11 " >
           <div className="text-white flex justify-between items-center">
            <h1 className="m-3 text-xl">My Web</h1>
            <ul className="flex gap-4 justify-between mr-8 cursor-pointer">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            </div> 
        </div>
    )
 };
 export default Header