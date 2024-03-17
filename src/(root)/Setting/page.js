import { Silder_icon } from '../../components/SubMenus/SubMenus'
// import Link from 'next/link'
import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { GoGear } from 'react-icons/go'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import "../CustomerAccount/index.css"
import RootLayout from '../layout';
import { RiCloseFill } from "react-icons/ri";

const Setting = () => {
    return (
        <>
            <RootLayout>
                <div className='main_container'>
                    <div className="dashboard_main">
                        <div className="dashboard_section">
                            <div className="sidebar ">
                                <ul className="nav-links">
                                    <Silder_icon />
                                    <li>
                                        <a href="/CustomerAccount">

                                            <AiOutlineUser className=" menu_dash_i " />
                                            <span className="link_name ">My Account</span>
                                        </a>
                                    </li>
                                    <li>
                                        <div className="iocn-link">
                                            <a href="/MyPurchases ">
                                                <RiMoneyDollarCircleLine className=" menu_dash_i" />

                                                <span className="link_name ">My Purchases</span>
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="/Setting">
                                            <GoGear className=" menu_dash_i yellow_m" />
                                            <span className="link_name yellow_crr">Setting    </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <section className="home-section">
                                <div className="home-content">
                                    <div className="my_acc_section">
                                        <h1>Settings</h1>
                                        <div className="upcoming_box">

                                            <div className="upcoming_warp">
                                                <div className="upcoming_cust">
                                                    <h3>Account Holder Information</h3>
                                                    <div className="upcoming_cust_box">
                                                        <form action="" className='setting_box_form'>
                                                            <div className="setting_box_inp">
                                                                <div className='setting_box_warp'>

                                                                    <label htmlFor="">First Name</label>
                                                                    <input type="text" name="" id="" />
                                                                </div>
                                                                <div className='setting_box_warp'>

                                                                    <label htmlFor="">Email</label>
                                                                    <input type="email" name="" id="" />
                                                                </div>
                                                            </div>
                                                            <div className="setting_box_inp">
                                                                <div className='setting_box_warp'>

                                                                    <label htmlFor="">Last Name</label>
                                                                    <input type="text" name="" id="" />
                                                                </div>
                                                                <div className='setting_box_warp'>

                                                                    <label htmlFor="">Username</label>
                                                                    <input type="text" name="" id="" />
                                                                </div>
                                                            </div>
                                                            <div className="setting_box_inp" style={{ marginTop: "30px", }}>
                                                                <div className='setting_box_warp'>

                                                                    <label htmlFor="">Phone</label>
                                                                    <input type="number" name="" id="" />
                                                                </div>
                                                            </div>
                                                        </form>

                                                    </div>
                                                </div>
                                                <div className="upcoming_action">
                                                    <h3>Quick Actions</h3>
                                                    <a href="">Add Payment Method</a>
                                                    <a href="/EventsPage">Browse Events</a>
                                                    <a href="">View Past Purchases</a>
                                                </div>

                                            </div>
                                            <div className="manage_box_warp">
                                                <h3>Manage Payment Methods</h3>
                                                <div className="manage_box">
                                                    <div className="manage_list">
                                                        <p>Credit Card Ending in - 4242</p>
                                                        <p className='yellow_cr'>Default</p>
                                                        <a href="#popup39">Edit</a>
                                                        <a href="">Remove</a>
                                                    </div>
                                                    <div className="manage_list">
                                                        <p>Credit Card Ending in - 4242</p>
                                                        <p>Make Default</p>
                                                        <a href="">Edit</a>
                                                        <a href="">Remove</a>
                                                    </div>
                                                </div>
                                                <div className='Add_pay_box'>

                                                    <button>Add Payment Method</button>
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                </div>

                            </section>
                        </div>
                    </div>
                </div>
                <div id="popup39" className="overlay">
                    <div className='setting_pop_warp'>
                        <div className='setting_pop_con'>
                        <a className="jclose" href="#">
                                            <RiCloseFill color="#FAE100" className="Xmarks" />
                                        </a>
                        <h4>Edit payment details</h4>
                        <form>
                            <div className='setting_pop_input_row'>
                                <label> name of card holder</label>
                                <input type='text'/>
                                <label> card number</label>
                                <input type='number'/>
                                <label>Card exp date</label>
                                <input type='number'/>
                                <label>Zip Code</label>
                                <input type='number'/>
                                <label>Card CVV</label>
                                <input type='number'/>
                                <label>billing address</label>
                                <input type='number'/>
                            </div>
                            <button type="submit" className='btn btn_setting'>Save</button>
                        </form>
                        </div>


                    </div>
                </div>
            </RootLayout>
        </>
    )
}

export default Setting
