import React, { useState } from "react"
import {FaTimes,FaThumbsUp,FaChevronRight,FaHeart} from 'react-icons/fa'
import './Portfolio.css'

const Card = (props) => {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }
  return (
    <>
      <div className='box btn_shadow '>
        <div className='img'>
          <img src={props.image} alt='' onClick={()=>{}} />
        </div>
        <div className='category d_flex'>
          <span onClick={()=>{}}>{props.category}</span>
          <label>
          <FaHeart/> {props.totalLike}
          </label>
        </div>
        <div className='title'>
          <h2 onClick={()=>{window.open(props.link,'_blank')}} style={{textDecoration:"none"}}>{props.title}</h2>
          <a href='#popup' className='arrow' onClick={toggleModal}>
            <FaTimes/>
          </a>
        </div>
      </div>
    </>
  )
}

export default Card
