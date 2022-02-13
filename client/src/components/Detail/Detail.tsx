import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Loading from '../Loading/Loading';
import './Detail.css';

interface UserInfo {
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

export default function Detail() {
    const [user, setUser] = useState<UserInfo | null>(null);
    const [notFound, setNotFound] = useState<boolean>(false);
    const { id } = useParams();


    useEffect(() => {
        fetch('http://localhost:4000/users/' + id)
        .then(response => {
            if (response.status === 404) {
                setNotFound(true);
            }
            
            return response.json();
        })
        .then(data => {
            setUser(data);
        })
    }, []);
    
    if (user) {
        return (
            <div>
                <h2>Detail Screen</h2>
				<div id="card">
					<div id="header">
						<div id="id">ID : { user.id }</div>
						<div id="name">{ user.first_name } { user.last_name }</div>
					</div>
					<table id="info">
						<tbody>
							<tr>
								<td className="title"><strong>Email:</strong></td>
								<td className="data">{ user.email }</td>
							</tr>
							<tr>
								<td className="title"><strong>Gender:</strong></td>
								<td className="data">{ user.gender }</td>
							</tr>
							<tr>
								<td className="title"><strong>Company:</strong></td>
								<td className="data">{ user.company.name }</td>
							</tr>
							<tr>
								<td className="title"><strong>Department:</strong></td>
								<td className="data">{ user.company.department }</td>
							</tr>
						</tbody>
					</table>
				</div>
            </div>
        );
    } else if (notFound) {
        return (
            <div>
				<h2>Detail Screen</h2>
				<h3>404</h3>
                <h3>User Not Found</h3>
            </div>
        );
    }
    
    return (
        <div>
            <h2>Detail Screen</h2>
            <Loading />
        </div>
    );
}