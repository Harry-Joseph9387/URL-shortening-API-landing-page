import React from 'react'
import bgmobile from "../images/bg-boost-mobile.svg"
import bgdesktop from "../images/bg-boost-desktop.svg"
const Boost = () => {
  return (
    <>
        <div className="boost relative">
            <picture >
                <source className="w-full" media="(min-width:768px)" srcSet={bgdesktop}/>
                <img className="w-full" src={bgmobile}  alt="" />
            </picture>
            
            <div className="boost-text text-center w-full">
                <h1 className="text-4xl font-bold text-white mb-5">Boost your links today</h1>
                <button className="btn-cta">Get Started</button>
            </div>
        </div>
    </>
  )
}

export default Boost