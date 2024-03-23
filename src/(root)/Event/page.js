'use client'
import SubMenus, { Silder_icon } from '../../components/SubMenus/SubMenus'
import React, { useState } from 'react'
import { CiCirclePlus } from 'react-icons/ci'
import { FaChevronDown, FaFacebookF, FaLinkedin, FaRegCalendarAlt, FaRegUser, FaTwitter, } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6';
import { FaGear, FaRegMessage } from 'react-icons/fa6'
import { IoCopyOutline, IoSpeedometerOutline } from 'react-icons/io5'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { SlLocationPin } from 'react-icons/sl'
import './index.css'
import EventsCard from '../../components/EventsCard/EventsCard'
import { EventImg, One_img } from '../../public'
import RootLayout from '../layout';

const Event = () => {
    const [isMainOpen, setIsMainOpen] = useState(false);
    const [isEventOpen, setIsEventOpen] = useState(false);

    const toggleMain = () => {
        setIsMainOpen(!isMainOpen);
    };

    const toggleEvent = () => {
        setIsEventOpen(!isEventOpen);
    };




    const [copied, setCopied] = useState(false);

    const copyTextToClipboard = () => {
        const textToCopy = "https://event-re.vercel.app/Events"; // Text you want to copy
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
            })
            .catch(error => console.error('Unable to copy text: ', error));
    };

    const [openMenuIndex, setOpenMenuIndex] = useState(null);

    const toggleMenu = (index) => {
        setOpenMenuIndex(index === openMenuIndex ? null : index);
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
                                                        <FaChevronDown className="icon_sub_menu " onClick={toggleMain} />

                                                    </div>
                                                </div>
                                                {isMainOpen && (
                                                    <ul className="upper_nav_i panel inner_nav_items2">
                                                        <a href="/archived" className="inner_link_i">Archived</a>
                                                        <a href="/Draft" className='inner_link_i'>Draft</a>
                                                        <a href="/eventdash" className='inner_link_i'>
                                                            <li className=" inner_flex Exinner_flex">
                                                                Event Title
                                                                <FaChevronDown className="low_event" onClick={toggleEvent} />
                                                            </li>

                                                        </a>
                                                        {isEventOpen && (

                                                            <ul className="inner_nav_items panel2">
                                                                <li className="inner_nav_item"><a href="/sellTickets" className="">Sell Tickets</a></li>
                                                                <li className="inner_nav_item"><a href="/managetwo">Hold Seats</a></li>
                                                                <li className="inner_nav_item"><a href="/scanTickets">Scan Tickets</a></li>
                                                                <li className="inner_nav_item"><a href="/attendees">Attendees</a></li>
                                                                <li className="inner_nav_item"><a href="/ManageOrder">Manage Orders</a></li>
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
                                    <div className="events_section " data-aos="fade" data-aos-delay="100">
                                        <div className="events_row_1">
                                            <div className="para">
                                                <p className="para_title">Share a public version of this page. </p>
                                                <p className="para_p">For example, you can add this to your bio link section on your social media, or share on your website to lead customers to your events.</p>
                                                <div className="copy_links">
                                                    <div className='Input_a'>
                                                        <a href='/Events' target="_blank"></a>
                                                        <input type="text" disabled className="cursor_pointer"
                                                            placeholder='https://event-re.vercel.app/EventName' />
                                                    </div>
                                                    <IoCopyOutline
                                                        className="share_link_i"
                                                        onClick={copyTextToClipboard}
                                                        style={{ cursor: "pointer" }}
                                                    />

                                                </div>
                                                {copied && <div className='copy_toast'>Copied to clipboard!</div>}
                                                <div className="icons">
                                                    <a href="https://www.facebook.com/profile.php?id=61554004420226" target="_blank">

                                                        <FaFacebookF className="share_icon_i" />
                                                    </a>
                                                    <a href="https://www.instagram.com/eventvisionary/?igshid=MzMyNGUyNmU2YQ%3D%3D" target="_blank">

                                                        <FaLinkedin className="share_icon_i" />
                                                    </a>
                                                    <a href="https://twitter.com/" target="_blank">
                                                        <FaXTwitter className="share_icon_i" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className='new_event_list_wap'>

                                                <div className="new_event_list">

                                                    <h4>List a New Event</h4>
                                                    <a href="./NewEvent">
                                                        {/* <i className='bx bx-plus-circle'  ></i> */}
                                                        <CiCirclePlus className="new_event_list_i" />

                                                    </a>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="events_row_2">
                                            <div className="event_cards" >
                                                <EventsCard imge={One_img} eventDateTime="Sat, July 15, 2025 • 7:30 PM" TicketType="Sell Tickets" TicketHref='/sellTickets' index={0} isOpen={openMenuIndex === 0} toggleMenu={toggleMenu} />
                                                <EventsCard imge={EventImg} eventDateTime="Sat, July 15, 2025 • 7:30 PM" TicketType="Sell Tickets" TicketHref='/sellTickets' index={1} isOpen={openMenuIndex === 1} toggleMenu={toggleMenu} />
                                                <EventsCard imge={One_img} eventDateTime="Sat, July 15, 2025 • 7:30 PM" TicketType="Sell Tickets" TicketHref='/sellTickets' index={2} isOpen={openMenuIndex === 2} toggleMenu={toggleMenu} />
                                            </div>
                                        </div>
                                    </div>









                                </div>
                            </section>
                        </div>
                    </div>
                    <div id='popup9' className='overlay9'>
                            <div className='over_warp'>
                                    <h3>Are you Sure</h3>
                                    <p className='Red_warn'>This Action Can't not be able to undo</p>
                                    <div className='over_warp_btns'>

                                    <a href='#' >Cancel</a>
                                    <a href='#' >Confirm</a>
                                    </div>
                            </div>
                    </div>
                </div>
            </RootLayout>
        </>
    )
}

export default Event
