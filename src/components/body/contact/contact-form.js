
import React from 'react';
import './contact-form.css'

export default function ContactUs() {

    return(
        <form name="contact" method="post" className="container">
            <input type="hidden" name="form-name" value="contact" />
            <div className="row pt-5 mx-auto">
                <div className="col-8 form-group mx-auto">
                    <input type="text" className="form-control" placeholder="Name" name="name" required/>
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                    <input type="email" className="form-control" placeholder="Email Address" name="email" required/>
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                    <input type="text" className="form-control" placeholder="Subject" name="subject" required/>
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                    <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message" required></textarea>
                </div>
                <div className="col-8 pt-3 mx-auto">
                    <input type="submit" className="btn btn-info" value="Send Message"></input>
                </div>
            </div>
        </form>

    )
}