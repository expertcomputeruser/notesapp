import React from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';
import SiteIndex from "./views/SiteIndex";
import NotesIndex from "./views/NotesIndex";
import Navbar from "./components/Navbar";


function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<SiteIndex />} />
                <Route path="/notes" element={<NotesIndex />} />
            </Routes>
        </>
    )
}

export default App;
