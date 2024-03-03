import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/home.js';
import Profile from './pages/profile.js';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                ⋰ ⋱⋰ ⋱⋰ ⋱⋰ ⋱⋰ ⋱⋰ ⋱⋰ ⋱⋰ ⋱⋰ ⋱⋰ ⋱⋰ ⋱
            </header>
            <main className="App-main">
                <div className="App-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" element={<Profile />} />
                    </Routes>
                </div>
            </main>
            <footer className="App-footer">
                ⋱⋰ ⋱⋰ ⋱⋰ ⋱⋰ ⋱⋰ ⋱⋰ ⋱⋰ ⋱⋰ ⋱⋰ ⋱⋰ ⋱⋰
            </footer>
        </div>

    );
}

export default App;
