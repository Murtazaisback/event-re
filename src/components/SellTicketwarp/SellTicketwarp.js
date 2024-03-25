import React, { useState } from 'react';
import TicketCounter from '../TicketCounter/TicketCounter';

const SellTicketwarp = () => {
    const handlePaymentChange = (event) => {
        setPaymentOption(event.target.value);
    };

    const [paymentOption, setPaymentOption] = useState('Card'); // 'Card' or 'Cash'
    const [count, setCount] = useState(0);

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div className="sell_tickets_warp">
            <div className='sell_box_warp'>

            <TicketCounter Addclass='sell_tickets_box' />
            <TicketCounter Addclass='sell_tickets_box' />
            <b className='Tiket_p'>Ticket Type Name (Multi-Level)</b>
            </div>
            <div className='sell_box_warp'>

            <TicketCounter Addclass='sell_tickets_box_in' />
            <TicketCounter Addclass='sell_tickets_box_in' />
            </div>
        </div>
    );
};

export default SellTicketwarp;
