import React from 'react';
import Catagory from '../Catagory/Catagory';
import Caurosel from '../Caurosel/Caurosel';
import Dashbord from '../Dashbord/Dashbord';
import Dropdown from '../Dropdown/Dropdown';
import Footer from '../Footer/Footer';
import Inventory from '../Inventory/Inventory';
import Specialties from '../Specialties/Specialties';
import ToolBox from '../ToolBox/ToolBox';

const Home = () => {

    return (
        <div>
            <ToolBox></ToolBox>
            <Dropdown></Dropdown>
            <Caurosel></Caurosel>
            <Inventory></Inventory>
            <Catagory></Catagory>
            <Dashbord></Dashbord>
            <Specialties></Specialties>
            <Footer></Footer>
        </div>
    );

};

export default Home;