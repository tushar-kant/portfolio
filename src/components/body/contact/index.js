import React from 'react'
import Separator from '../../common/separator'
import './contact.css'
import SocialContact from '../../common/social-contact/index'
import ContactUs from './contact-form'

function Contact() {
    return (
        <div className="contact">
            <Separator/>
            <label className="section-title">Contact</label>
            <div className="contact-container">
                <div className="contact-info">
                    <p>Want to get in touch ? Contact me on any of the platform</p>
                </div>
                <div className="contact-info">
                    <SocialContact/>
                </div>
                
                
            </div>
            <div className="App">
                <div className="container">
                    <div className="contact-form-head">
                        <p>Or Drop a Mail...!!</p>
                    </div>
                    <ContactUs/>
                </div>
            </div>
        </div>
    )
}

export default Contact
