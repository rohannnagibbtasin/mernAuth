import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CustomerForm from './CustomerForm';
import CustomerList from './CustomerList';

export default function Customer() {
    const [customers, setCustomers] = useState([]);
    async function getCustomers() {
        const res = await axios.get('https://mernnauthh.herokuapp.com/customer/');
        setCustomers(res.data);
    }
    useEffect(() => {
        getCustomers();
    }, []);
    return (
        <div>
            <CustomerForm getCustomers={getCustomers} />
            <CustomerList customers={customers} />
        </div>
    );
}
