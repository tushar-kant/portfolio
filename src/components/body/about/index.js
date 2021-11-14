import React from 'react'
import SocialContact from '../../common/social-contact'
import './about.css'

function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    <div className="about-me">
                        Hello There 👋 I am 
                        <br/>
                        <span className="info-name">Tusharkanta Nayak</span>
                        <br/>
                        I am a Blockchain Practitioner, a Open Source Enthusiasist and
                        I love learning new things !!
                    </div>

                    <div className="bootstrap-buttons d-grid gap-2 d-md-block text-center">
                        <button className="button-1 btn btn-outline-light" type="button">
                            <a href="https://github.com/tushar-kant" target="_blank" rel="noreferrer">
                            <i class="devicon-github-original colored download-icon"></i>Github
                            </a>
                        </button>
                        <button className="button-2 btn btn-outline-light" type="button">
                            <a download href={require('../../../assets/Resume.pdf').default}>
                            <i class="far fa-download download-icon"></i>Get CV
                            </a>
                        </button>
                    </div>
                </div>
                <div className="about-photo">
                    <img src={require('../../../assets/user.jpg').default} alt="" className="picture"></img>
                </div>
            </div>
            <br/>
            <br/>
            <SocialContact/>
        </div>
    )
}

export default About
