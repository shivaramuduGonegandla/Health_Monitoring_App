import React, { useState } from 'react';
import axios from 'axios';

const GoalForm = () => {
	const [goalType, setGoalType] = useState('');
	const [goalValue, setGoalValue] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post('http://localhost:8080/api/goals/add', {
				goalType,
				goalValue,
			})
			.then((response) => {
				console.log('Goal set:', response.data);
				setGoalType('');
				setGoalValue('');
			})
			.catch((error) => console.error('Error setting goal:', error));
	};

	return (
		<div>
			<h1>Set Health Goal</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label>Goal Type</label>
					<input
						type="text"
						className="form-control"
						value={goalType}
						onChange={(e) => setGoalType(e.target.value)}
						required
					/>
				</div>
				<div className="form-group">
					<label>Goal Value</label>
					<input
						type="number"
						className="form-control"
						value={goalValue}
						onChange={(e) => setGoalValue(e.target.value)}
						required
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
};

export default GoalForm;
