import React from 'react'
import './Modal.css'

const Modal = ({score}) => {
  return (
    <div className='modal'>
        <div className='modal-title'>Your score is {score}!</div>
        <div onClick={() => window.location = "/"} className='modal-btn'>Restart</div>
    </div>
  )
}

export default Modal