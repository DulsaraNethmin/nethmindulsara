import React from "react"
import "../Portfolio/Portfolio.css"
import "../Blog/Blog.css"
import Card from "./Card"
import BlogApi from "./BlogApi"
import {useState} from 'react'
const Blog = () => {
  const[toggle,setToggle] = useState(false)
  return (
    <>
      <section className='Portfolio Blog' id='blog'style={{margin:"150px 0px 0px 0px"}}>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>VISIT MY BLOG AND KEEP YOUR FEEDBACK</h4>
            <h1>My Blog</h1>
          </div>

          <div className='content grid'>
            {BlogApi.map((value, index) => {
                if(toggle){
                  return <Card key={index} image={value.image} date={value.date} link={value.link} title_one={value.title_one} title_two={value.title_two} title_three={value.title_three} desc_one={value.desc_one} desc_two={value.desc_two} desc_three={value.desc_three} />
                }
                else{
                  if(index<3){
                    return <Card key={index} image={value.image} date={value.date} link={value.link} title_one={value.title_one} title_two={value.title_two} title_three={value.title_three} desc_one={value.desc_one} desc_two={value.desc_two} desc_three={value.desc_three} />
                  }
                  return null
                }
            })}
          </div>
          <div style={{position:'relative',top:'10px'}}>
          <button className="btn_shadow" style={{position:'absolute',top:'50%',left:'45%'}} onClick={(e)=>{setToggle(!toggle)}}>{toggle?'Show Less':'show More'}</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
