import React from 'react'
import image from "../images/illustration-working.svg"

const Showcase = () => {
  return (
    <>
      <div className="xl:pl-40 lg:pl-20 xl:text-start px-10  text-center flex xl:flex-row flex-col w-full items-center">
        <div className="xl:pr-20">
          <h1 className="lg:text-7xl text-6xl font-bold mb-2 text-slate-800">More than just shorter links</h1>
          <p className="text-lg text-slate-500 mb-10">Build your brand’s recognition and get detailed insights 
          on how your links are performing.</p>
          <button className="btn-cta font-bold text-xl xl:mb-0 mb-14">Get Started</button>
        </div>
        <img  src={image} alt="" />
      </div>
    </>
  )
}

export default Showcase