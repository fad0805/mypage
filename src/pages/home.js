import React from 'react';
import { Link } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';

import Profile from './profile';
import './home.css';

const Home = () => {
    const Routes = useRoutes([
        { path: 'profile', element: <Profile /> }
    ]);

    return (
        <div className="home">
            <h1>Missing Island</h1>
            <ul>
                <li>
                    <Link to="profile">프로필</Link>
                </li>
                <li>작품</li>
            </ul>
        </div>
    );
}

export default Home;
