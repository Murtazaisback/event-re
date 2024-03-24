'use client'
import React, { useState } from 'react';
import './index.css'
// import Link from 'next/link';
import RootLayout from '../layout';

const Login_org = () => {


  return (
    <>
      <RootLayout>
        <div className='main_container'>
        <div className='BreadC'>
            <a className='BreadC_past' href='/'>Home</a>
            <p className='BreadC_div'>/</p>
            <a className='BreadC_Active' href='/Login_org'>Login as Organizer</a>
        </div>
          <div className="login_container">
            <div className="login_section">

              <div className="coustomer_form ">
                <h2>ORGANIZERS</h2>
                <form action="" className="login_cous" >
                  <p>Already have an account?</p>
                  <h2>Login</h2>
                  <label htmlFor="">Email</label>
                  <input type="email" required />

                  <label htmlFor="">Password</label>
                  <input type="password" required />
                  <a href="/" className='cursor_pointer submit_btn'>Login</a>

                </form>
                <div className="sign_btnss">

                  <p>Don’t have an account?</p>
                  <a href="/Sign_Up_org" className="cursor_pointer" >Sign Up</a>
                </div>
                <div className="sign_btnss">
                  <p >Forget You Psssword?</p>
                  <a href="/forgot" className="cursor_pointer">Reset Psssword</a>

                </div>
                <a href="/Login">Or login as <span className='yellow_cr'>Customer</span> </a>

              </div>
            </div>
          </div>
        </div>
      </RootLayout>
    </>
  )
}

export default Login_org
