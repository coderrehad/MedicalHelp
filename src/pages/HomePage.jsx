import React from 'react';
import AppHeader from "../components/AppHeader.jsx";
import AppNavbar from "../components/AppNavbar.jsx";
import AppShort from "../components/AppShort.jsx";
import AppBanner from "../components/AppBanner.jsx";
import AppOptions from "../components/AppOptions.jsx";
import AppFindFlyer from "../components/AppFindFlyer.jsx";

const HomePage = () => {
    return (
        <>
            <AppHeader/>
            <AppNavbar/>
            <AppShort/>
            <AppBanner/>
            <AppOptions/>
            <AppFindFlyer/>
        </>
    );
};

export default HomePage;