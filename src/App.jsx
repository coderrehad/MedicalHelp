import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import HealthAdvicePage from "./pages/HealthAdvicePage.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";
import PharmacyLocatorPage from "./pages/PharmacyLocatorPage.jsx";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/product' element={<ProductsPage/>}/>
                    <Route path='/health' element={<HealthAdvicePage/>}/>
                    <Route path='/about' element={<AboutUsPage/>}/>
                    <Route path='/location' element={<PharmacyLocatorPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;