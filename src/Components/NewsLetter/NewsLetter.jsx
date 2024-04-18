import React from 'react'
import './NewsLetter.css'


const NewsLetter = () => {
  return (
    <div className='NewsLetter'>
        <h1>Get Exclusive offers on your email</h1>
        <p>Subscribe to our newsletter to stay upgraded</p>
        <div>
            <input className='input' type="email" placeholder='Your email id' />
            <button>SUBSCRIBE</button>
        </div>
    </div>
  )
}

export default NewsLetter