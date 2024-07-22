import React,{useState} from 'react'
import bgdesktop from "../images/bg-shorten-desktop.svg"
import bgmobile from "../images/bg-shorten-mobile.svg"
const Shortener = () => {
    const [text,setText]=useState("")
    const [link,setLink]=useState("")
    const [issOpen,setIssOpen]=useState(false)
    const [isCopy,setIsCopy]=useState(false)
    async function funct(e){
        e.preventDefault()
        if(!text){
            alert("empty input")
        }
        else{
            const res=await fetch(`https://www.shareaholic.com/v2/share/shorten_link?url=http://${text}`)
            const data= await res.json()
            setLink(data.data)}
            setIssOpen(true)
        }
            
    function copy(){
        navigator.clipboard.writeText(link)
        setIsCopy(true)
    }
    
     return (
    <>
        <div className="flex justify-center lg:px-20 px-10 -mb-20 mt-14 ">
            <div className="showcase relative w-full">
                <picture>
                    <source media="(min-width:768px)" className="w-full" srcSet={bgdesktop} />
                    <img src={bgmobile} alt="" className="w-full" />
                </picture>
                <form className="absolute flex lg:flex-row flex-col items-center  w-full  px-10" action="">
                    <input type="text" placeholder="Shorten a link here" className=" lg:w-5/6 w-full rounded lg:py-4 py-2 px-6" onChange={(e)=>setText(e.target.value)} />
                    <button className="lg:w-1/6  w-full lg:mt-0 mt-2   btn-cta lg:ml-5 " onClick={funct}>Shorten it</button>
                </form>
                <div className={issOpen?" flex justify-center items-center display  gap-10":"hidden"}>
                    <a  href={`${text}`}className=''>{link}</a>
                    <button className="btn-cta" onClick={copy}>{isCopy?"Copied":"Copy"}</button>
                </div>
                
                
            </div>
        </div>    
    </>
  )
}

export default Shortener