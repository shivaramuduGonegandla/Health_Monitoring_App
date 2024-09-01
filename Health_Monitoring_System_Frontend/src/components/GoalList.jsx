import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GoalList = () => {
	const [goals, setGoals] = useState([]);
	const [error, setError] = useState('');

	useEffect(() => {
		axios
			.get('http://localhost:8080/goals/all') // Ensure this endpoint is correct
			.then((response) => {
				setGoals(response.data);
				setError('');
			})
			.catch((err) => {
				setError('Error fetching goals');
				setGoals([]);
			});
	}, []);

	return (
		<div>
			<h1>Goals List</h1>
			{error && <p>{error}</p>}
			{goals.length > 0 ? (
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>Goal Type</th>
							<th>Goal Value</th>
						</tr>
					</thead>
					<tbody>
						{goals.map((goal) => (
							<tr key={goal.id}>
								<td>{goal.id}</td>
								<td>{goal.goalType}</td>
								<td>{goal.goalValue}</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<p>No goals available</p>
			)}
		</div>
	);
};

export default GoalList;
