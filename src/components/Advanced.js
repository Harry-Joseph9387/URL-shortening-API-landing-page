import React from 'react'
import i1 from "../images/icon-brand-recognition.svg"
import i2 from "../images/icon-detailed-records.svg"
import i3 from "../images/icon-fully-customizable.svg"
const Advanced = () => {
  return (
    <>
    <div className="xl:px-40 lg:px-20 py-40 bg-gray-100">
        <h2 className="text-center font-bold text-4xl mb-5">Advanced Statistics</h2>
        <p className="text-center text-slate-600 text-lg">Track how your links are performing across the web <br />with our advanced Statistics dashboard</p>  
        <div className="grid md:grid-cols-3 grid-cols-1 mt-20 md:gap-0 gap-10 md:text-start text-center properties relative">
            <div className="line"></div>
            <article className="mx-5 bg-white rounded z-10 p-5 flex flex-col md:items-start items-center">
                <img className="bg-grey rounded-full -mt-16 mb-5 p-5" src={i1} alt="" />
                <h3 className="font-bold text-2xl mb-5">Brand Recognition</h3>
                <p className="text-slate-600 ">Boost your brand recognition with each click. Generic links don’t 
                mean a thing. Branded links help instil confidence in your content.</p>
            </article>
            <article className="mx-5 bg-white rounded z-10 p-5 flex flex-col md:items-start items-center">
                <img  className="bg-grey rounded-full -mt-16 mb-5 p-5"src={i2} alt="" />
                <h3 className="font-bold text-2xl mb-5">Detailed Records</h3>
                <p className="text-slate-600 ">Gain insights into who is clicking your links. Knowing when and where 
                people engage with your content helps inform better decisions.</p>
            </article><article className="mx-5 bg-white rounded p-5 flex flex-col md:items-start items-center">
                <img className="bg-grey rounded-full -mt-16 mb-5 p-5" src={i3} alt="" />
                <h3 className="font-bold text-2xl mb-5">Fully Customizable</h3>
                <p className="text-slate-600 ">Improve brand awareness and content discoverability through customizable 
                links, supercharging audience engagement</p>
            </article>
        </div>  
    </div>  
    </>
  )
}

export default Advanced