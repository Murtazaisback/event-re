'use client'
import MainMenusEx from '../../components/MainMenusEx/MainMenusEx'
import { Silder_icon } from '../../components/SubMenus/SubMenus';
import React, { useState } from 'react'
import { CiCirclePlus } from 'react-icons/ci';
import { FaRegCalendarAlt, FaChevronDown, FaSearch } from 'react-icons/fa';
import { FaChevronLeft } from 'react-icons/fa6';
import { IoSpeedometerOutline } from 'react-icons/io5';
import ManageOrdersCom from '../../components/ManageOrdersCom/ManageOrdersCom';
import RootLayout from '../layout';
import { RiCloseFill } from "react-icons/ri";


const ManageOrder = () => {
    const [isMainOpen, setIsMainOpen] = useState(true);
    const [isEventOpen, setIsEventOpen] = useState(true);

    const toggleMain = () => {
        setIsMainOpen(!isMainOpen);
    };

    const toggleEvent = () => {
        setIsEventOpen(!isEventOpen);
    };
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

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
                                        <div className="iocn-link">
                                            <div className="inner_nav_links " id="">
                                                <div className="flex_option_row accordion">

                                                    <FaRegCalendarAlt className="menu_dash_i yellow_m" />
                                                    <div className="Event_Title  ">
                                                        <div className=" inner_flex">
                                                            <a href="/Event" className='yellow_m'>

                                                                EVENTS
                                                            </a>
                                                        </div>
                                                        {/* <i className='bx bxs-chevron-down' id="myElement" onClick={toggleAccordion}></i> */}
                                                        <FaChevronDown className="icon_sub_menu" onClick={toggleMain} />

                                                    </div>
                                                </div>
                                                {isMainOpen && (
                                                    <ul className="upper_nav_i panel inner_nav_items2">
                                                        <a href="/archived" className="inner_link_i ">Archived</a>
                                                        <a href="/Draft" className='inner_link_i'>Draft</a>
                                                        <div className='Exinner_flex '>

                                                            <a href="/eventdash" className='inner_link_i'>
                                                                <li className=" inner_flex Exinner_flex yellow_m">
                                                                    Event Title
                                                                </li>

                                                            </a>
                                                            <FaChevronDown className="low_event" onClick={toggleEvent} />
                                                        </div>
                                                        {isEventOpen && (

                                                            <ul className="inner_nav_items panel2">
                                                                <li className="inner_nav_item "><a href="/sellTickets" >Sell Tickets</a></li>
                                                                <li className="inner_nav_item"><a href="/managetwo">Hold Seats</a></li>
                                                                <li className="inner_nav_item"><a href="/scanTickets">Scan Tickets</a></li>
                                                                <li className="inner_nav_item"><a href="/attendees">Attendees</a></li>
                                                                <li className="inner_nav_item"><a href="/ManageOrder" className='yellow_m'>Manage Orders</a></li>
                                                                <li className="inner_nav_item"><a href="/eventdetails" >Event Details</a></li>
                                                                <li className="inner_nav_item"><a href="/ticketprices">Ticket Prices</a></li>
                                                                <li className="inner_nav_item"><a href="/settingChart">Seating Chart</a></li>
                                                            </ul>
                                                        )}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>
                                    </li>
                                    <MainMenusEx />

                                </ul>
                            </div>
                            <section className="home-section">
                                <div className="home-content">
                                    <ManageOrdersCom title='Event Title: Manage Orders' />

                                </div>
                            </section>
                        </div>
                    </div>
                    <div id="popup" className="overlay9">


                        <div className="order_deatils">
                            <a className="jclose" href="#">
                                <RiCloseFill color="#FAE100" className="Xmarks" />
                            </a>
                            <div className="order_dinfo">

                                <div className="order_t">
                                    <div className="order_infog">
                                        <p>ORDER#</p>
                                        <p>Purchase Date/Time </p>
                                    </div>

                                    <div className="dropdown1" style={{ float: "left" }}>
                                        <button className="dropbtn1">More <i className='bx bx-chevron-down' ></i></button>
                                        <div className="dropdown-content1" style={{ left: "0" }}>
                                            <div className="box ">
                                                <a className="" href="/TicketPF" target="_blank">View eTickets</a>
                                            </div>
                                            <div className="box ">
                                                <a className="" href="#popup8">Full Refund</a>
                                            </div>
                                            <div className="box ">
                                                <a className="" href="#popup9">Partial Refund</a>
                                            </div>
                                            <div className="box ">
                                                <a className="" href="#popup27">Send eTickets</a>
                                            </div>
                                            <div className="box ">
                                                <a className="" href="#popup28">Add Ticket(s)</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="order_user">
                                    <p>Customer Name</p>
                                    <p>Number of Tickets Purchased:</p>
                                    <p>Order Total: $Total Paid</p>
                                    <p>Event Title: <br />
                                        Event start date/start time   - Event end date/end time</p>
                                </div>
                                <div className="order_typed">
                                    <table>

                                        <thead>
                                            <tr>
                                                <th>Ticket Type</th>
                                                <th>QTY</th>
                                                <th>Price</th>
                                                <th>Service Fees</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>[ user defined ticket type]</td>
                                                <td>1</td>
                                                <td>$100</td>
                                                <td>$ 9.99</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="order_payd">

                                    <div className="order_paydo">
                                        <p>Payment Method</p>
                                        <p>Last 4 Digits: <br />
                                            ####-1234</p>
                                    </div>
                                    <div className="order_paydt">
                                        <div className="pay_row">
                                            <p>Subtotal</p>
                                            <p>$100</p>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                    <div id="popup8" className="overlay9 ">
                <div className="main_popupre">
                    <p>Notice</p>
                    <p>Confirm: You are about to send this customer a refund of. </p>
                    <div className="main_popupre_btns">
                        <a href="" className="tran">Cancel</a>
                        <div className="box ">
                            <a className="btn" href="#popup10">Confirm</a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="popup10" className="overlay9 ">
                <div className="main_popupre">
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
                    <p>Refund Successfully Initiated</p>
                    <p>Your customer should receive their refund within 3-5 business days </p>
                </div>
            </div>
            <div id="popup9" className="overlay9 ">
                <div className="main_popupre">
                    <a className="mclose" href="#">
                        <i className="bx x"></i>
                    </a>
                    <div className="popup_center">

                        <h3>Enter Partial Refund Amount</h3>
                        <p className="sm">Order Total: $200.59</p>
                        <div className="inputs_pup">
                            <label htmlFor="">Partial Refund Amount:</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="main_popupre_btns">
                        <a href="" className="tran">Cancel</a>
                        <div className="box ">
                            <a className="btn" href="#">Refund</a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="popup27" className="overlay9 ">
                <div className="main_popupre">
                    <a className="mclose" href="#">
                        <i className="bx x"></i>
                    </a>
                    <div className="popup_center">

                        <h3>Send e-Tickets</h3>
                        <div className="inputs_pup lg">
                            <label htmlFor="">Email:</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="main_popupre_btns">
                        <a href="" className="tran">Cancel</a>
                        <div className="box ">
                            <a className="btn" href="#">Send e-Tickets</a>
                        </div>
                    </div>
                </div>
            </div>

                </div>
            </RootLayout>
        </>
    )
}

export default ManageOrder
