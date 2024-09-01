import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; // Import your CSS for styling

const Home = () => {
	return (
		<div className="home-container">
			<h1>Health Monitoring System</h1>
			<div className="btn-group">
				<Link to="/profile" className="btn btn-primary">
					View Profile
				</Link>
				<Link to="/add-health-data" className="btn btn-secondary">
					Add Health Data
				</Link>
				<Link to="/set-goal" className="btn btn-success">
					Set Health Goal
				</Link>
				<Link to="/health-data-list" className="btn btn-info">
					View Health Data List
				</Link>
				<Link to="/goal-list" className="btn btn-warning">
					View Goals List
				</Link>
			</div>
		</div>
	);
};

export default Home;
