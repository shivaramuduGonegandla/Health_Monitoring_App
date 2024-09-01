import React, { useState } from 'react';
import axios from 'axios';

const HealthDataForm = () => {
	const [weight, setWeight] = useState('');
	const [height, setHeight] = useState('');
	const [calories, setCalories] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post('http://localhost:8080/api/healthdata/add', {
				weight,
				height,
				calories,
			})
			.then((response) => {
				console.log('Health data added:', response.data);
				setWeight('');
				setHeight('');
				setCalories('');
			})
			.catch((error) => console.error('Error adding health data:', error));
	};

	return (
		<div>
			<h1>Add Health Data</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label>Weight (kg)</label>
					<input
						type="number"
						className="form-control"
						value={weight}
						onChange={(e) => setWeight(e.target.value)}
						required
					/>
				</div>
				<div className="form-group">
					<label>Height (cm)</label>
					<input
						type="number"
						className="form-control"
						value={height}
						onChange={(e) => setHeight(e.target.value)}
						required
					/>
				</div>
				<div className="form-group">
					<label>Calories</label>
					<input
						type="number"
						className="form-control"
						value={calories}
						onChange={(e) => setCalories(e.target.value)}
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

export default HealthDataForm;
