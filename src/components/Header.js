import React,{useState} from 'react'
import logo from "../images/logo.svg"
const Header = () => {
    const [isOpen,setIsOpen]=useState(false)
  return (
    <>
        <header className="flex justify-between  items-center xl:px-40  py-10 px-10">
            <img src={logo} alt="" className="md:hidden"/>
            <div className="md:justify-between md:w-full  hidden md:flex">
                <div className="flex">
                    <img src={logo} alt="" />
                    <ul className="flex justify-between ml-10 gap-5 items-center">
                        <li><button className="">Features</button></li>
                        <li><button className="">Pricing</button></li>
                        <li><button className="">Resources</button></li>
                    </ul>
                </div>
                <ul className="flex justify-between items-center gap-5">
                        <li><button className="">Login</button></li>
                        <li><button className="btn-cta font-bold ">Sign Up</button></li>
                </ul>
            </div>
            {isOpen &&
                <div className="absolute left-5 right-5 px-5 top-20 rounded-lg navigation py-5 text-center  text-slate-200   ">
                    <ul className="flex justify-between flex-col h-72">
                        <li><button className="font-bold text-lg">Features</button></li>
                        <li><button className="font-bold text-lg">Pricing</button></li>
                        <li><button className="font-bold text-lg">Resources</button></li>
                        <hr />
                        <li><button className="font-bold text-lg">Login</button></li>
                        <li><button className="btn-cta font-bold text-lg w-full ">Sign Up</button></li>
                    </ul>
                </div>
            }
            <div className="md:hidden">
                {isOpen?<button onClick={()=>{setIsOpen(false)}}>Close</button>
                :<button onClick={()=>{setIsOpen(true)}}>Menu</button>}
            </div>
            
            
        </header>
    </>
  )
}

export default Header