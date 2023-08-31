import React from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';
import SiteIndex from "./views/SiteIndex";
import RemindersIndex from "./views/RemindersIndex";
import Navbar from "./components/Navbar";


function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<SiteIndex />} />
                <Route path="/reminders" element={<RemindersIndex />} />
            </Routes>
        </>
    )
}

export default App;
