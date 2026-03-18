import React from 'react'
import './contact.css'
import  whatsapp_logo  from '../../assets/whatsapp-logo.png'

const Contact = () => {
  return (
    <div className='contact-container' onClick={() => window.open('https://wa.me/+491724062056', '_blank')}>
        <img src={whatsapp_logo} alt="" />
        <p style={{color: 'black'}}>Whatsapp</p>
    </div>
  )
}

export default Contact