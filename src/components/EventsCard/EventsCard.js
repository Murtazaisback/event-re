// EventsCard component
import React, { useRef, useEffect } from 'react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import "./index.css";

const EventsCard = ({ showMenuButton = true, eventDateTime="", TicketType="", TicketHref="", imge, index, isOpen, toggleMenu }) => {
    const menuRef = useRef(null);

    const toggleMenuIcon = (event) => {
        event.stopPropagation(); // Prevent the click event from bubbling up to the document
        toggleMenu(index);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                toggleMenu(null); // Close the menu when clicking outside
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [toggleMenu]);

    return (
        <div className="event_card">
            <img src={imge} alt='' className='event_card_img' width={270} height={270}/>
            <div className="card_info">
                <p>Event Title</p>
                <p>{eventDateTime}</p>
                <p>Venue Name</p>
                <div className='card_menu' ref={menuRef}>
                    <a href={TicketHref} className="btn sm">{TicketType}</a>
                    {showMenuButton && (
                        <div className="menu_container">
                            <HiOutlineDotsHorizontal className="card_btn" onClick={toggleMenuIcon} />
                            {isOpen && (
                                <div className="sub_card_menu">
                                    {/* Add your menu items here */}
                                    <a href="#popup9">Pause Ticket Sales</a>
                                    <a href="#popup9">End Ticket Sales</a>
                                    <a href="#popup9">Cancel Event</a>
                                    <a href="#popup9">Un-publish Event</a>
                                    <a href="#popup9">Archive Event</a>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EventsCard;
