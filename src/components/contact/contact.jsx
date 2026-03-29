import React from 'react'
import './contact.css'
import  whatsapp_logo  from '../../assets/whatsapp-logo.png'
import mail_logo from '../../assets/mail-logo.png'

const Contact = () => {
  return (
    <div className='contact-container'>
        <div className='contact' onClick={() => window.open('https://wa.me/+491724062056', '_blank')}>
          <img src={whatsapp_logo} alt="" />
          <p style={{color: 'black'}}>Whatsapp</p>
        </div>
        <div className='contact' onClick={() => window.open('mailto:nibavisahof@gmail.com', '_blank')}>
          <img src={mail_logo} alt="" />
          <p style={{color: 'black'}}>E-mail</p>
        </div>
        
        
    </div>
  )
}

export default Contact