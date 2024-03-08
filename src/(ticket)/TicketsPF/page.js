import { TicketPF_Img } from '../../public'
// import Image from 'next/image'
import React from 'react'

const TicketPF = () => {
  return (
    <div className="Tickets_outline">
    <div className="ticket_page">
        <div className="main_ticket_content">

            <p className="res_none"> Print this eTicket and bring it with you to this event</p>
            <div className="ticket_container">
                <div className="logos">
                    <button className="Organizer_logo">Organizer Logo</button>
                    <img src={TicketPF_Img} alt=""/>
                </div>
                <p className="pc_no">eTicket</p>
                <div className="tickets_infos">
                    <div className="ticket_text">
                        <div className="ticket_dates">
                            <h3>Event Title </h3>
                            <p>Sat, October 5, 2023 7:30 PM - </p>
                            <p>Sun, October 6, 2023 2:00 AM</p>
                        </div>
                        <div className="ticket_name">
                            <div className="headers_name">
                                <p>Customer Name</p>
                                <p>$250</p>
                            </div>
                            <div className="sm_div">

                                <p>Ticket Type Name</p>
                                <p>Section: A</p>
                                <p>Table (or Seat): Table 5</p>
                                <p>Note: This is a sample ticket note. It may be left 
                                    empty or not depending on the organizer (step 1)</p>
                                </div>
                        </div>
                    </div>
                    <div className="ticket_qr">
                        [ QR CODE ]
                    </div>
                </div>
            </div>
        </div>
        <div className="ticket_footer">

            <p>Plan your next event with EV.</p>
            <p>www.eventvisionary.com</p>
        </div>
    </div>
    </div>
  )
}

export default TicketPF
