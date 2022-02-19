import axios from 'axios';
import React, { useState } from 'react';

export default function CustomerForm({ getCustomers }) {
    const [customerName, setCustomerName] = useState('');

    async function handleClick(e) {
        e.preventDefault();
        const registerData = {
            name: customerName,
        };
        try {
            await axios.post('https://mernnauthh.herokuapp.com/customer/', registerData);
            getCustomers();
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder="Customer Name"
                    onChange={(e) => setCustomerName(e.target.value)}
                />
                <button type="button" onClick={(e) => handleClick(e)}>
                    Save a new Customer
                </button>
            </form>
        </div>
    );
}
