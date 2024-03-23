import React, { useState } from 'react';
import { FaSearch, FaCheck } from 'react-icons/fa';
import ArchivedBack from '../ArchivedBack/ArchivedBack';


const AttendeesCom = ({ title = "", showBackButton }) => {

    const [isGreenCheckVisible, setIsGreenCheckVisible] = useState({});

    // Function to toggle visibility for a specific body_tr
    const toggleGreenCheck = (index) => {
        setIsGreenCheckVisible(prevState => ({
            ...prevState,
            [index]: !prevState[index] // Toggle visibility for the given index
        }));
    };
    return (
        <div className="manage_order_area">
            {showBackButton && <ArchivedBack />}

            <div className="manage_order_section">
                {title && <h1>{title}</h1>}
                <form action="" className="manage_order_form">
                    <div className="manage_filter_row">
                        <div className="manage_filter_in">
                            <input type="search" placeholder="Search by name, order #, or amount..." />
                            <FaSearch style={{ color: '#000' }} />
                        </div>
                    </div>
                    <button className="manage_filter_btn">Export CSV</button>
                </form>
            </div>

            <div className="manage_filter_table">
                <table className="manage_filter_tables">
                    <div>
                        <div className='manage_filter_tables_head'>

                            <div className='head_it'>Mark Admitted</div>
                            <div className='head_it'>Name</div>
                            <div className='head_it'>Section</div>
                            <div className='head_it'>Seat ID</div>
                            <div className='head_it'>Table ID</div>
                            <div className='head_it'>Order #</div>
                        </div>
                    </div>
                    <div className='filter_tables_body'>
                        {[...Array(5)].map((_, index) => (
                            <div className={'body_tr' + (index === 0 ? ' first_row' : '')} key={index} onClick={() => toggleGreenCheck(index)}>
                                <div className='head_it'>
                                    <div className='green_check'>
                                        <FaCheck style={{ color: "green", display: isGreenCheckVisible[index] ? 'block' : 'none' }} />
                                    </div>
                                </div>
                                <div className='head_it'>Johnny Cash</div>
                                <div className='head_it'>A</div>
                                <div className='head_it'>39</div>
                                <div className='head_it'>6</div>
                                <div className='head_it'>A-00011123323</div>
                            </div>
                        ))}
                    </div>
                </table>
            </div>
        </div>
    );
};

export default AttendeesCom;
