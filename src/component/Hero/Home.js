import React from "react"
import "./Home.css"
//import hero from "../pic/hero6.png"
import hero from "../pic/ssp1.png"
import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
import skill4 from "../pic/skill4.png"
import skill5 from "../pic/skill5.png"
import skill6 from "../pic/skill6.png"
import skill7 from "../pic/skill7.png"
import skill8 from "../pic/skill8.png"
import skill9 from "../pic/skill9.png"
import skill10 from "../pic/skill10.png"
import skill11 from "../pic/skill11.png"
import skill12 from "../pic/skill12.png"
import skill13 from "../pic/skill13.png"
import skill14 from "../pic/skill14.png"
import { FaFacebookF ,FaLinkedinIn,FaTwitter,FaGithub,FaStackOverflow,FaTiktok} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Nethmin</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" Skilled Programmer.", " React Developer."," Flutter Developer."," Game Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>Nethmin is currently studying at the University of Moratuwa, Sri Lanka. is interested in new technology trends, and has a hunger for Machine Learning.
Movie lover, Traveler, and simple human.
</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className="row-1 mtop_20">
                  <div className='button'>
                  <button className='btn_shadow' onClick={()=>{window.open('https://www.facebook.com/nethmin.dulsara.9/','_blank')}}>
                    <FaFacebookF/>
                  </button>
                  <button className='btn_shadow' onClick={()=>{window.open('https://www.linkedin.com/in/nethmin-dulsara-1553671b3/','_blank')}}>
                    <FaLinkedinIn/>
                  </button>
                  <button className='btn_shadow' onClick={()=>{window.open('https://twitter.com/nethmin_dulsara','_blank')}}>
                   <FaTwitter/>
                  </button>
                  </div>
                </div>
              
                <div className="row-1 mtop_20">
                <button className='btn_shadow'>
                   <FaGithub/>
                  </button>
                  <button className='btn_shadow'>
                   <FaStackOverflow/>
                  </button>
                  <button className='btn_shadow'>
                   <FaTiktok/>
                  </button>
                </div>
              </div>
              <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <div className="row_1">
                <button className='btn_shadow'>
                  <img src={skill4} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill5} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill6} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill7} alt='' />
                </button>
                </div>
                <div className="row_1 mtop_20">
                <button className='btn_shadow'>
                  <img src={skill8} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill9} alt='' />
                </button>
                </div>
                <h4>Programming Languages</h4>
                <div className="row_1 mtop_20">
                <button className='btn_shadow'>
                  <img src={skill11} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill12} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill13} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill14} alt='' />
                </button>
                </div>

              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
