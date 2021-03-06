import React, { useState, useEffect } from 'react';
import User from '../User/User';
import './Users.css';
import Loading from '../Loading/Loading';

export interface UserInfo {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    company: {
        name: string;
        department: string;
    }
}

export default function Users() {
    const [users, setUsers] = useState<UserInfo[] | null>(null)

    useEffect(() => {
        fetch('http://localhost:4000/users')
        .then(response => {
            return response.json();
        })
        .then(data => {
            setUsers(data);
        })
        
        document.title = "List Screen"
    }, []);

    if (users) {
        return (
            <div className="users">
                <h2>List Screen</h2>
                {users.map(user => {
                    return <User key={user.id} id={user.id} first_name={user.first_name} last_name={user.last_name} />
                })}
            </div>
        );
    }

    return (
        <div className="users">
            <h2>List Screen</h2>
            <Loading />
        </div>
    );
}
