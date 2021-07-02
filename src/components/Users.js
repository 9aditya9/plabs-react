import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Users = () => {
	const [allUsers, SetAllUsers] = useState([])
	useEffect(() => {
		axios.get("https://plabs-react.herokuapp.com/users")
			.then(res => SetAllUsers(res.data))
			.catch(error => alert('error', error))
	}, [])
	return (
		<table>
			<tbody>
				<tr>
					<th>Name</th>
					<th>Email</th>
					<th>Phone Number</th>
					<th>Date of Birth</th>
				</tr>
				{

					allUsers.map((val, index) => (
						<tr key={index}>
						<td>{val.name}</td>
						<td>{val.email}</td>
						<td>{val.phoneNumber}</td>
						<td>{val.dob}</td>
						</tr>
				))
				}
			</tbody>
		</table>
	);
}

export default Users;