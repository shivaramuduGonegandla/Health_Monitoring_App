import React, { useState } from 'react';
import axios from 'axios';

const UserProfile = () => {
	const [username, setUsername] = useState('');
	const [user, setUser] = useState(null);
	const [error, setError] = useState('');

	const fetchUser = () => {
		axios
			.get(`http://localhost:8080/users/shiva`)
			.then((response) => {
				setUser(response.data);
				setError(''); // Clear any previous errors
			})
			.catch((err) => {
				setError('User not found');
				setUser(null); // Clear user data if there's an error
			});
	};

	return (
		<div>
			<h1>User Profile</h1>
			<input
				type="text"
				placeholder="Enter username"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<button onClick={fetchUser}>Fetch User</button>
			{error && <p>{error}</p>}
			{user && (
				<div>
					<h2>ID: {user.id}</h2>
					<p>Username: {user.userName}</p>
					<p>Email: {user.email}</p>
				</div>
			)}
		</div>
	);
};

export default UserProfile;
