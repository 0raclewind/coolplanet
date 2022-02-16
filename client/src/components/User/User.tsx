import React from 'react';
import { Link } from 'react-router-dom';
import './User.css';

interface UserProps {
    id: number;
    first_name: string;
    last_name: string;
}

export default function User({id, first_name, last_name}: UserProps) {
    return (
        <Link  to={"/users/" + id} className="user">{first_name} {last_name}</Link>
    );
}
