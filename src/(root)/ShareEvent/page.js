'use client'
import SubMenus, { Silder_icon } from '../../components/SubMenus/SubMenus'
import { Ellis_3, Publish_img } from '../../public'
// import Image from 'next/image'
// import Link from 'next/link'
import React, { useState } from "react";
import { CiCirclePlus } from 'react-icons/ci'
import { FaFacebookF, FaLinkedin, FaRegUser, FaTwitter } from 'react-icons/fa'
import { FaGear, FaRegMessage } from 'react-icons/fa6'
import { IoCopyOutline, IoSpeedometerOutline } from 'react-icons/io5'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { SlLocationPin } from 'react-icons/sl'
import { MdExitToApp } from "react-icons/md";
import RootLayout from '../layout';
import { FaXTwitter } from 'react-icons/fa6';

import "./index.css"

const ShareEvent = () => {

    const [copied, setCopied] = useState(false);

    const copyTextToClipboard = () => {
        const textToCopy = "https://event-re.vercel.app/SingleEvent"; // Text you want to copy
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
            })
            .catch(error => console.error('Unable to copy text: ', error));
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
                                            <span className="link_name">Dashboard</span>
                                        </a>
                                    </li>
                                    <li>
                                        <div className="iocn-link">
                                            <a href="/NewEvent">
                                                <CiCirclePlus className="yellow_m menu_dash_i" />

                                                <span className="link_name yellow_m">CREATE AN EVENT</span>
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




                                    <div className="tabs_container">
                                        <div className="w3-bar w3-black tabs_section">
                                            <a className="   w3-red tab_btn  team-member" href="/NewEvent">1. Enter Event Details</a>
                                            <a className="   tab_btn  team-member"
                                                href='/DefineTicket'>2. Define Ticket Prices
                                            </a>
                                            <a className="   tab_btn  team-member team-member-small"
                                                href="/PublishEvent">3. Publish Event

                                            </a>
                                            <a className="   tab_btn  team-member team-member-small"
                                                href="/ShareEvent">4. share Event
                                                <img src={Ellis_3} alt='' className="team-member-info one_active" />
                                            </a>
                                        </div>
                                        <div id="share" className="w3-container w3-border city" >
                                            <div className="share_event">
                                                <p className="share_event_title">Your event has been published successfully</p>
                                                <div className="share_portion">


                                                    <div className="exit_event">
                                                        <p>You can view your event here</p>
                                                        {/* <img src="../imgs/enter 1.png" alt=""/> */}
                                                        <a href='/SingleEvent' target="_blank">

                                                            <MdExitToApp className="share_link_i" />
                                                        </a>

                                                    </div>
                                                    <h3>Share Options</h3>


                                                    <div className="share_link">
                                                        <p>Shareable Link:</p>
                                                        <div className='Input_a'>


                                                            <a href='/SingleEvent' target='_blank' >
                                                            </a>

                                                                <input
                                                                    type="text"
                                                                    disabled
                                                                    placeholder="https://event-re.vercel.app/SingleEvent"
                                                                />
                                                        </div>
                                                        <IoCopyOutline
                                                            className="share_link_i right_link_copy"
                                                            onClick={copyTextToClipboard}
                                                            style={{ cursor: "pointer" }}
                                                        />
                                                        {copied && <div className='copy_toast'>Copied to clipboard!</div>}
                                                    </div>


                                                    <div className="directly">
                                                        <p>Share Directly:</p>
                                                        <div className="share_icon">
                                                            <a href="https://www.facebook.com/" target="_blank">
                                                                <FaFacebookF className="share_icon_i" />

                                                            </a>
                                                            <a href="https://www.linkedin.com/" target="_blank">
                                                                <FaLinkedin className="share_icon_i" />

                                                            </a>

                                                            <a href="https://twitter.com/home" target="_blank">

                                                                <FaXTwitter className="share_icon_i" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="share_btns">
                                                <a className="w3-bar-item w3-button  w3-red tab_btn new_envet_btn" href="/NewEvent">Create a New Event</a>
                                                <a href="/Event" className="tab_btnn">Done</a>

                                            </div>
                                        </div>





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

export default ShareEvent
