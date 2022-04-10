import React from "react"
import "./Features.css"
const Card = (props) => {
  return (
    <>
      <div className='box1 btn_shadow'>
        <img src={props.image} alt='' />
        <h2 id="card_title">{props.title}</h2>
        <p id="card_desc">{props.desc}</p>
        <a href='/'>
          <i className='fas fa-arrow-right'></i>
        </a>
      </div>
    </>
  )
}

export default Card
