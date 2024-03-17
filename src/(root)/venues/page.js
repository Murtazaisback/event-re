import SubMenus, { Silder_icon } from '../../components/SubMenus/SubMenus'
// import Link from 'next/link'
import React from 'react'
import { CiCirclePlus } from 'react-icons/ci'
import { FaRegCalendarAlt, FaChevronDown, FaRegUser, FaSearch } from 'react-icons/fa'
import { FaGear, FaRegMessage } from 'react-icons/fa6'
import { IoSpeedometerOutline } from 'react-icons/io5'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { SlLocationPin } from 'react-icons/sl'
import RootLayout from '../layout';

const Venues = () => {
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
                                            <SlLocationPin className="yellow_m menu_dash_i" />
                                            <span className="link_name yellow_m">VENUES</span>
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
                                            <span className="link_name">SETTINGS</span>
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
                                                <FaRegUser className=" menu_dash_i" />
                                                <span className="link_name">MY ACCOUNT</span>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <section className="home-section">
                                <div className="home-content">
                                    <div className="manage_order_area">

                                        <div className="manage_order_section">
                                            <h1>Venues</h1>
                                            <form action="" className="manage_order_form">

                                                <div className="manage_filter_row">
                                                    <div className="manage_filter_in">
                                                        <input type="search" placeholder="Search by name" />
                                                        {/* <i className='bx bx-search'></i> */}
                                                        <FaSearch style={{ color: '#000' }} />

                                                    </div>
                                                </div>

                                            </form>

                                        </div>
                                        <div className="manage_filter_table">
                                            <table className="manage_filter_tables">
                                                <div className="table_bar"></div>
                                                <thead>
                                                    <tr>
                                                        <th>Venue Name</th>
                                                        <th>Date Created</th>
                                                        <th>Alias</th>
                                                        <th>Active Events</th>
                                                        <th></th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="flex_data">
                                                            <p>Venue 1 name</p>
                                                            <p className="c_grey">123 Test Address, <br />Test city, State 90001</p>
                                                        </td>
                                                        <td>11/20/2026</td>
                                                        <td>House of Blues 1</td>
                                                        <td>1</td>
                                                        <td><a href=" #popup22">Edit Details</a></td>
                                                        <td>
                                                            <a className="table_e" href="/settingChart">Edit Seating</a>
                                                            {/* <div id="popup22" className="overlay">
                                                        <div className="main_edit">

                                                            <div className="add_venue">
                                                                <a className="jclose" href="#">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25"
                                                                        height="25" viewBox="0 0 25 25" fill="none">
                                                                        <g clip-path="url(#clip0_517_27)">
                                                                            <path
                                                                                d="M12.5 0.703125C5.97656 0.703125 0.703125 5.97656 0.703125 12.5C0.703125 19.0234 5.97656 24.3359 12.5 24.3359C19.0234 24.3359 24.3359 19.0234 24.3359 12.5C24.3359 5.97656 19.0234 0.703125 12.5 0.703125ZM12.5 22.5781C6.95313 22.5781 2.46094 18.0469 2.46094 12.5C2.46094 6.95313 6.95313 2.46094 12.5 2.46094C18.0469 2.46094 22.5781 6.99219 22.5781 12.5391C22.5781 18.0469 18.0469 22.5781 12.5 22.5781Z"
                                                                                fill="#FAE100" />
                                                                            <path
                                                                                d="M16.0937 8.86719C15.7422 8.51562 15.1953 8.51562 14.8438 8.86719L12.5 11.25L10.1172 8.86719C9.76562 8.51562 9.21875 8.51562 8.86719 8.86719C8.51562 9.21875 8.51562 9.76562 8.86719 10.1172L11.25 12.5L8.86719 14.8828C8.51562 15.2344 8.51562 15.7812 8.86719 16.1328C9.02344 16.2891 9.25781 16.4062 9.49219 16.4062C9.72656 16.4062 9.96094 16.3281 10.1172 16.1328L12.5 13.75L14.8828 16.1328C15.0391 16.2891 15.2734 16.4062 15.5078 16.4062C15.7422 16.4062 15.9766 16.3281 16.1328 16.1328C16.4844 15.7812 16.4844 15.2344 16.1328 14.8828L13.75 12.5L16.1328 10.1172C16.4453 9.76562 16.4453 9.21875 16.0937 8.86719Z"
                                                                                fill="#FAE100" />
                                                                        </g>
                                                                        <defs>
                                                                            <clipPath id="clip0_517_27">
                                                                                <rect width="25" height="25" fill="white" />
                                                                            </clipPath>
                                                                        </defs>
                                                                    </svg>
                                                                </a>
                                                                <h2>Edit Venue Details</h2>
                                                                <form action="" className="edit_ve">
                                                                    <label htmlFor="">Venue Name</label>
                                                                    <input type="text" />
                                                                    <label htmlFor="">Venue Alias</label>
                                                                    <input type="text" />
                                                                    <h3>Venue Location</h3>
                                                                    <label htmlFor="">Address</label>
                                                                    <input type="text" />
                                                                    <div className="sub_venue">
                                                                        <div className="sub_vi">

                                                                            <label htmlFor="">City</label>
                                                                            <input type="text" />
                                                                        </div>
                                                                        <div className="sub_vi">

                                                                            <label htmlFor="">State</label>
                                                                            <input type="text" />
                                                                        </div>

                                                                    </div>
                                                                    <div className="sub_venue">
                                                                        <div className="sub_vi">

                                                                            <label htmlFor="">Postal Code</label>
                                                                            <input type="text" />
                                                                        </div>
                                                                        <div className="sub_vi">

                                                                            <label htmlFor="">Country</label>
                                                                            <input type="text" />
                                                                        </div>

                                                                    </div>
                                                                    <button type="submit" className="btn">Save Changes</button>
                                                                </form>

                                                            </div>
                                                        </div>
                                                    </div> */}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="flex_data">
                                                            <p>Venue 1 name</p>
                                                            <p className="c_grey">123 Test Address, <br />Test city, State 90001</p>
                                                        </td>
                                                        <td>11/20/2026</td>
                                                        <td>House of Blues 1</td>
                                                        <td>1</td>
                                                        <td><a href=" #popup22">Edit Details</a></td>
                                                        <td>
                                                            <a className="table_e" href="/settingChart">Edit Seating</a>
                                                            <div id="popup23" className="overlay">
                                                                <div className="main_edit">

                                                                    <div className="add_venue">
                                                                        <a className="jclose" href="#">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                                                                <g clip-path="url(#clip0_762_261)">
                                                                                    <path d="M12.5 0.703125C5.97656 0.703125 0.703125 5.97656 0.703125 12.5C0.703125 19.0234 5.97656 24.3359 12.5 24.3359C19.0234 24.3359 24.3359 19.0234 24.3359 12.5C24.3359 5.97656 19.0234 0.703125 12.5 0.703125ZM12.5 22.5781C6.95313 22.5781 2.46094 18.0469 2.46094 12.5C2.46094 6.95313 6.95313 2.46094 12.5 2.46094C18.0469 2.46094 22.5781 6.99219 22.5781 12.5391C22.5781 18.0469 18.0469 22.5781 12.5 22.5781Z" fill="#FAE100" />
                                                                                    <path d="M16.0937 8.86719C15.7422 8.51562 15.1953 8.51562 14.8438 8.86719L12.5 11.25L10.1172 8.86719C9.76562 8.51562 9.21875 8.51562 8.86719 8.86719C8.51562 9.21875 8.51562 9.76562 8.86719 10.1172L11.25 12.5L8.86719 14.8828C8.51562 15.2344 8.51562 15.7812 8.86719 16.1328C9.02344 16.2891 9.25781 16.4062 9.49219 16.4062C9.72656 16.4062 9.96094 16.3281 10.1172 16.1328L12.5 13.75L14.8828 16.1328C15.0391 16.2891 15.2734 16.4062 15.5078 16.4062C15.7422 16.4062 15.9766 16.3281 16.1328 16.1328C16.4844 15.7812 16.4844 15.2344 16.1328 14.8828L13.75 12.5L16.1328 10.1172C16.4453 9.76562 16.4453 9.21875 16.0937 8.86719Z" fill="#FAE100" />
                                                                                </g>
                                                                                <defs>
                                                                                    <clipPath id="clip0_762_261">
                                                                                        <rect width="25" height="25" fill="white" />
                                                                                    </clipPath>
                                                                                </defs>
                                                                            </svg>
                                                                        </a>
                                                                        <h2>Edit Venue Details</h2>
                                                                        <form action="" className="edit_ve">
                                                                            <label htmlFor="">Venue Name</label>
                                                                            <input type="text" />
                                                                            <label htmlFor="">Venue Alias</label>
                                                                            <input type="text" />
                                                                            <h3>Venue Location</h3>
                                                                            <label htmlFor="">Address</label>
                                                                            <input type="text" />
                                                                            <div className="sub_venue">
                                                                                <div className="sub_vi">

                                                                                    <label htmlFor="">City</label>
                                                                                    <input type="text" />
                                                                                </div>
                                                                                <div className="sub_vi">

                                                                                    <label htmlFor="">State</label>
                                                                                    <input type="text" />
                                                                                </div>

                                                                            </div>
                                                                            <div className="sub_venue">
                                                                                <div className="sub_vi">

                                                                                    <label htmlFor="">Postal Code</label>
                                                                                    <input type="text" />
                                                                                </div>
                                                                                <div className="sub_vi">

                                                                                    <label htmlFor="">Country</label>
                                                                                    <input type="text" />
                                                                                </div>

                                                                            </div>
                                                                            <button type="submit" className="btn">Save Changes</button>
                                                                        </form>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>









                                </div>
                            </section>
                        </div>
                    </div>
                    <div id="popup22" className="overlay">
                        <div className="main_edit">

                            <div className="add_venue">
                                <a className="jclose" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25"
                                        height="25" viewBox="0 0 25 25" fill="none">
                                        <g clip-path="url(#clip0_517_27)">
                                            <path
                                                d="M12.5 0.703125C5.97656 0.703125 0.703125 5.97656 0.703125 12.5C0.703125 19.0234 5.97656 24.3359 12.5 24.3359C19.0234 24.3359 24.3359 19.0234 24.3359 12.5C24.3359 5.97656 19.0234 0.703125 12.5 0.703125ZM12.5 22.5781C6.95313 22.5781 2.46094 18.0469 2.46094 12.5C2.46094 6.95313 6.95313 2.46094 12.5 2.46094C18.0469 2.46094 22.5781 6.99219 22.5781 12.5391C22.5781 18.0469 18.0469 22.5781 12.5 22.5781Z"
                                                fill="#FAE100" />
                                            <path
                                                d="M16.0937 8.86719C15.7422 8.51562 15.1953 8.51562 14.8438 8.86719L12.5 11.25L10.1172 8.86719C9.76562 8.51562 9.21875 8.51562 8.86719 8.86719C8.51562 9.21875 8.51562 9.76562 8.86719 10.1172L11.25 12.5L8.86719 14.8828C8.51562 15.2344 8.51562 15.7812 8.86719 16.1328C9.02344 16.2891 9.25781 16.4062 9.49219 16.4062C9.72656 16.4062 9.96094 16.3281 10.1172 16.1328L12.5 13.75L14.8828 16.1328C15.0391 16.2891 15.2734 16.4062 15.5078 16.4062C15.7422 16.4062 15.9766 16.3281 16.1328 16.1328C16.4844 15.7812 16.4844 15.2344 16.1328 14.8828L13.75 12.5L16.1328 10.1172C16.4453 9.76562 16.4453 9.21875 16.0937 8.86719Z"
                                                fill="#FAE100" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_517_27">
                                                <rect width="25" height="25" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                                <h2>Edit Venue Details</h2>
                                <form action="" className="edit_ve">
                                    <label htmlFor="">Venue Name</label>
                                    <input type="text" />
                                    <label htmlFor="">Venue Alias</label>
                                    <input type="text" />
                                    <h3>Venue Location</h3>
                                    <label htmlFor="">Address</label>
                                    <input type="text" />
                                    <div className="sub_venue">
                                        <div className="sub_vi">

                                            <label htmlFor="">City</label>
                                            <input type="text" />
                                        </div>
                                        <div className="sub_vi">

                                            <label htmlFor="">State</label>
                                            <input type="text" />
                                        </div>

                                    </div>
                                    <div className="sub_venue">
                                        <div className="sub_vi">

                                            <label htmlFor="">Postal Code</label>
                                            <input type="text" />
                                        </div>
                                        <div className="sub_vi">

                                            <label htmlFor="">Country</label>
                                            <input type="text" />
                                        </div>

                                    </div>
                                    <button type="submit" className="btn">Save Changes</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </RootLayout>
        </>
    )
}

export default Venues
