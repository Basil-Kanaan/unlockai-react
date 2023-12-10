import './App.css';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound"; // Import NotFound component
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/signin" element={<Home/>}/>
                    <Route path="/signup" element={<Home/>}/>
                    {/* Add the NotFound route */}
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
