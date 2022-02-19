import React from 'react';

export default function CustomerList({ customers }) {
    function renderCustomers() {
        return customers.map((customer) => <li key={Math.random()}>{customer.name}</li>);
    }
    return (
        <div>
            <ul>{renderCustomers()}</ul>
        </div>
    );
}
