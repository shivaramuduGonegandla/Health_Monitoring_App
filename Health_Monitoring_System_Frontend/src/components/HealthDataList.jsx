import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HealthDataList = () => {
    const [healthData, setHealthData] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8080/healthdata/all')
            .then(response => {
                setHealthData(response.data);
                setError('');
            })
            .catch(err => {
                setError('Error fetching health data');
                setHealthData([]);
            });
    }, []);

    return (
        <div>
            <h1>Health Data List</h1>
            {error && <p>{error}</p>}
            {healthData.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Calories</th>
                            <th>Height</th>
                            <th>Weight</th>
                        </tr>
                    </thead>
                    <tbody>
                        {healthData.map(data => (
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.calories}</td>
                                <td>{data.height}</td>
                                <td>{data.weight}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No health data available</p>
            )}
        </div>
    );
};

export default HealthDataList;
