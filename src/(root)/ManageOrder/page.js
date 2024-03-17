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
                                                <a className="" href="#popup7">View eTickets</a>
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
                </div>
            </RootLayout>
        </>
    )
}

export default ManageOrder
