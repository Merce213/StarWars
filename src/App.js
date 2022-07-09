import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import People from "./pages/People";
import PeopleDetails from "./pages/PeopleDetails";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<People />} />
                <Route path="/people/:id" element={<PeopleDetails />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
