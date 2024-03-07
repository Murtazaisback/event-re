import SubMenus, { Silder_icon } from '../../components/SubMenus/SubMenus'
// import Link from 'next/link'
import React from 'react'
import { CiCirclePlus } from 'react-icons/ci'
import { FaRegUser } from 'react-icons/fa'
import { FaGear, FaRegMessage } from 'react-icons/fa6'
import { IoSpeedometerOutline } from 'react-icons/io5'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { SlLocationPin } from 'react-icons/sl'
import RootLayout from '../layout';


const Myaccount = () => {
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
                                <a href="/Dashboard">

                                    <IoSpeedometerOutline className=" menu_dash_i" />
                                    <span className="link_name ">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <div className="iocn-link">
                                    <a href="/NewEvent">
                                        <CiCirclePlus className=" menu_dash_i" />

                                        <span className="link_name ">CREATE AN EVENT</span>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <SubMenus />
                            </li>
                            <li>
                                <a href="/venues">
                                    <SlLocationPin className=" menu_dash_i" />
                                    <span className="link_name">VENUES</span>
                                </a>
                            </li>
                            <li>
                                <a href="/reports">
                                    <RiMoneyDollarCircleLine className=" menu_dash_i" />
                                    <span className="link_name">REPORTS</span>
                                </a>
                            </li>
                            <li>
                                <a href="/settingdash">
                                    <FaGear className=" menu_dash_i" />
                                    <span className=" link_name">SETTINGS</span>
                                </a>
                            </li>
                            {/* <li>
                                <div className="iocn-link">
                                    <Link href="/SmsCampaigns">
                                        <FaRegMessage className=" menu_dash_i" />
                                        <span className="link_name">SMS CAMPAIGNS</span>
                                    </Link>
                                </div>
                            </li> */}
                            <li>
                                <div className="iocn-link">
                                    <a href="/myaccount">
                                        <FaRegUser className="yellow_m menu_dash_i" />
                                        <span className="link_name yellow_m">MY ACCOUNT</span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <section className="home-section">
                        <div className="home-content">
                        <div className="my_acc_section">
                        <h1>My Account</h1>
                        <div className="my_acc_row">
                            <div className="my_acc_col">
                                <div className="sell_form_section">
                                    <div className="sell_forma">
                                        <div className="row_form raw_grey">
                                            <label htmlFor="">First Name *</label>
                                            <input type="text"/>
                                        </div>
                                        <div className="row_form raw_grey">
                                            <label htmlFor="">Last Name *</label>
                                            <input type="text"/>
                                        </div>
                                    </div>
                                    <div className="billing_info raw_grey l_binfo">
                                        <label htmlFor="">Business Name</label>
                                        <input type="text" 
                                            className="billing_info"/>

                                    </div>
                                    <div className="billing_info raw_grey l_binfo">
                                        <label htmlFor="">Business Address </label>
                                        <input type="text" 
                                            className="billing_info"/>

                                    </div>
                                    <div className="sell_forma">
                                        <div className="row_form raw_grey">
                                            <label htmlFor="">City</label>
                                            <input type="email"/>
                                        </div>
                                        <div className="row_form raw_grey">
                                            <label htmlFor="">State</label>
                                            <input type="number" />
                                        </div>
                                    </div>
                                    <div className="sell_forma">
                                        <div className="row_form raw_grey">
                                            <label htmlFor="">Postal Code</label>
                                            <input type="text" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="my_acc_col">
                                <form action="" className="reset_pass">
                                    <div className="inputs_sm">
                                        <label htmlFor="">Email</label>
                                        <input type="email"/>
                                    </div>
                                    <div className="inputs_sm">
                                        <label htmlFor="">Phone</label>
                                        <input type="number"/>
                                    </div>
                                    <button type="submit"> Reset Password</button>
                                </form>
                            </div>
                        </div>
                        <button className="my_acc_btn">Save</button>
                      </div>

                        </div>
                    </section>
                </div>
            </div>
        </div>
        </RootLayout>
    </>
  )
}

export default Myaccount
