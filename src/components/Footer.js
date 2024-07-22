import React from 'react'
import logo2 from "../images/logo2.svg"
import instagram from "../images/icon-instagram.svg"
import twitter from "../images/icon-twitter.svg"
import pinterest from "../images/icon-pinterest.svg"
import facebook from "../images/icon-facebook.svg"
const Footer = () => {
  return (
    <>
       <footer className="flex lg:flex-row flex-col lg:text-start text-center justify-between items-center py-10 xl:px-40 lg:px-20 px-10 bg-slate-800 text-white"> 
            <img src={logo2} alt="" />
            <div className="grid xl:gap-12 lg:gap-6 gap-10 lg:grid-cols-4 grid-cols-1">
                <article>
                    <h4  className="font-bold text-lg lg:mb-5 mb-0 lg:mt-0 mt-10">Features</h4>
                    <ul>
                        <li>Link Shortening</li>
                        <li>Branded Links</li>
                        <li>Analytics</li>
                    </ul>
                </article>
                <article>
                    <h4  className="font-bold text-lg lg:mb-5 mb-0">Resources</h4>
                    <ul>
                        <li>Blog</li>
                        <li>Developers</li>
                        <li>Support</li>
                    </ul>
                </article>
                <article>
                    <h4  className="font-bold text-lg lg:mb-5 mb-0">Company</h4>
                    <ul>
                        <li>About</li>
                        <li>Our Team</li>
                        <li>Careers</li>
                        <li>Contact</li>
                    </ul>
                </article>
                <article className="flex items-start gap-4 h-auto">
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                    <img src={pinterest} alt="" />
                    <img src={instagram} alt="" />
                </article>
            </div>
        </footer> 
    </>
  )
}

export default Footer