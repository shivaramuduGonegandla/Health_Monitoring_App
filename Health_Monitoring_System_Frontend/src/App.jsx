import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import UserProfile from "./components/UserProfile .jsx"
import HealthDataForm from './components/HealthDataForm.jsx';
import GoalForm from './components/GoalForm.jsx';
import HealthDataList from './components/HealthDataList.jsx';
import GoalList from './components/GoalList.jsx';

function App() {
	return (
		<Router>
			<div className="container mt-4">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/profile" element={<UserProfile />} />
					<Route path="/add-health-data" element={<HealthDataForm />} />
					<Route path="/set-goal" element={<GoalForm />} />
					<Route path="/health-data-list" element={<HealthDataList />} />
					<Route path="/goal-list" element={<GoalList />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
