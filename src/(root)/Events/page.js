import React from 'react'
import './index.css'
// import Image from 'next/image'
import { Rectangle } from '../../public'
// import Link from 'next/link'
import RootLayout from '../layout';
import EventsCard from '../../components/EventsCard/EventsCard.js';
import { EventImg, One_img,  } from '../../public';

const Events = () => {
  return (
    <>
        <RootLayout>
    <div className='main_container'>
      <div className="event_container">
                <div className="orgainer_card">
                    <div className="orgainer_card_info">
                        <p>ORGANIZER NAME</p>
                        <p>(###) ### - ####</p>
                        <p>email@email.com</p>
                    </div>
                    <div className="organiner_img"></div>

                </div>
                <h2>Upcoming Events</h2>
                <div className="main_events">

                    <div className="events_row_2">
                        <div className="event_cards" >
                        <EventsCard imge={EventImg} showMenuButton={false} eventDateTime="Sat, July 15, 2025 • 7:30 PM" TicketType="Get Tickets" TicketHref="/SingleEvent" />
                        <EventsCard imge={One_img} showMenuButton={false} eventDateTime="Sat, July 15, 2025 • 7:30 PM" TicketType="Get Tickets" TicketHref="/SingleEvent" />
                        <EventsCard imge={EventImg} showMenuButton={false} eventDateTime="Sat, July 15, 2025 • 7:30 PM" TicketType="Get Tickets" TicketHref="/SingleEvent" />
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </RootLayout>
    </>
  )
}

export default Events
