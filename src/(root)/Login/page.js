'use client'
import React, { useState } from 'react';
import './index.css'
import RootLayout from '../layout';
// import Link from 'next/link';

const Login = () => {

  const [showSignUp1, setShowSignUp1] = useState(false);

  // State for the second sign-up form
  const [showSignUp2, setShowSignUp2] = useState(false);

  // Toggle function for the first sign-up form
  const toggleSignUp1 = () => {
    setShowSignUp1(!showSignUp1);
  };

  // Toggle function for the second sign-up form
  const toggleSignUp2 = () => {
    setShowSignUp2(!showSignUp2);
  };
  return (
    <>
      <RootLayout>
    <div className='main_container'>
    <div className='BreadC'>
            <a className='BreadC_past' href='/'>Home</a>
            <p className='BreadC_div'>/</p>
            <a className='BreadC_Active' href='/Login'>Login</a>
        </div>
      <div className="login_container">
                <div className="login_section">
                    <div className="coustomer_form">
                        <h2>CUSTOMERS</h2>
                            <form action="" className="login_cous">
                              
                                    <p>Already have an account?</p>
                                    <h2>Login</h2>
                                    <label htmlFor="">Email:</label>
                                    <input type="email" required/>

                                    <label htmlFor="">Password:</label>
                                    <input type="password" required/>
                                <a href="/CustomerAccount" className='cursor_pointer submit_btn'>Login</a>

                            </form>
                            <div className="sign_btnss">
                                <p >Don’t have an account?</p>
                                <a href="/Sign_Up" className="cursor_pointer">Sign Up</a>

                            </div>
                            <div className="sign_btnss">
                                <p >Forget You Psssword?</p>
                                <a href="/forgot" className="cursor_pointer">Reset Psssword</a>

                            </div>
                            <a href="/Login_org">Or login as <span className='yellow_cr'>Organizer</span> </a>

                        </div>
                </div>
            </div>
    </div>
    </RootLayout>
    </>
  )
}

export default Login
