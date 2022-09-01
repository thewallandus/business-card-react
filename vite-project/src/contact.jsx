import React from 'react'
import ReactDOM from 'react-dom/client'
import './contact.css'

function Contact() {
    return (
        <div className="contact">
            <h1 className="contact--Name">Aitijya Sarkar</h1>
            <p className="contact--Role">Fullstack Web Developer</p>
            <div className="contact--Connect">
                <a href="" className='contact--Email'><img src="" alt="" />Email</a>
                <a href="" className='contact--LinkedIn'><img src="" alt="" />LinkedIn</a>
            </div>
        </div>
    )
}


export default Contact;