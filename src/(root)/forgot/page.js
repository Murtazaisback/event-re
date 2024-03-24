// import Link from 'next/link'
import React from 'react'
import "./index.css"
import RootLayout from '../layout';

const Forgot = () => {
  return (
    <>
      <RootLayout>
    <div className='main_container'>
    <div className='BreadC'>
            <a className='BreadC_past' href='/'>Home</a>
            <p className='BreadC_div'>/</p>
            <a className='BreadC_Active' href='/Forgot'>Forgot password</a>
        </div>
      <div className="forgot_container">
        <div className="forgot_box">
          <h1>Forgot Password</h1>
          <form action="">
            <label htmlFor="">Email</label>
            <div>
              <input type="email" placeholder='Email' />

            </div>
            <div>
              <button type='submit'>Send Link</button>

            </div>
          </form>
        </div>
      </div>
    </div>
    </RootLayout>
    </>
  )
}

export default Forgot
