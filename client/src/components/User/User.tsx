import React from 'react';
import './User.css';

interface UserProps {
    id: number;
    first_name: string;
    last_name: string;
}

export default function User({id, first_name, last_name}: UserProps) {
    return (
        <a href={'/users/' + id} className="user">{first_name} {last_name}</a>
    );
}
