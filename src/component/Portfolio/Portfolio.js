import React from "react"
import "./Portfolio.css"
import Card from "./Card"
import Portfolio_data from "./Portfolio_data"
import {useState} from 'react'

const Portfolio = () => {
  const[toggle,setToggle] = useState(false)
  return (
    <>
      <section className='Portfolio top' id='portfolio'>
        <div className='container'>
          <div className='heading text-center '>
            <h4>VISIT MY Works AND KEEP YOUR FEEDBACK</h4>
            <h1>My Works</h1>
          </div>

          <div className='content grid'>
            {Portfolio_data.map((value, index) => {
              if(toggle){
                return <Card key={index} image={value.image} category={value.category} totalLike={value.totalLike} title={value.title} link={value.link} />
              }
              else{
                if(index<3){
                  return <Card key={index} image={value.image} category={value.category} totalLike={value.totalLike} title={value.title} link={value.link} />
                }
                return null
              }
            })}

            {/*<div className='box btn_shadow '>
              <div className='img'>
                  <img src='https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-01.jpg' alt='' />
              </div>
              <div className='category d_flex'>
                  <span>Development</span>
                  <label>
                    <i className='far fa-heart'></i> 360
                  </label>
              </div>
              <div className='title'>
                  <h2>Mobile app landing design & Services</h2>
                <a href='' className='arrow'>
                  <i class='fas fa-arrow-right'></i>
                </a>
              </div>
            </div>*/}
          </div>
          <div style={{position:'relative',top:'10px'}}>
          <button className="btn_shadow" style={{position:'absolute',top:'50%',left:'45%'}} onClick={(e)=>{setToggle(!toggle)}}>{toggle?'Show Less':'show More'}</button>
          </div>
          
        </div>
      </section>
    </>
  )
}

export default Portfolio
