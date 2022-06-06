import React from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css'

const Dropdown = () => {
    return (
        <div className='flex justify-evenly'>
            {/* <ul className='ul'>
                <li className='ul-li'>
                    <Link to='/' className='link' href="#">Products &#9662;</Link>
                    <ul className="dropdown p-2">
                        <li><a href="#">Laptops</a></li>
                        <li><a href="#">Monitors</a></li>
                        <li><a href="#">Printers</a></li>
                    </ul>
                </li>
            </ul>
            <ul className='ul'>
                <li className='ul-li'>
                    <Link to='/' className='link' href="#">Products &#9662;</Link>
                    <ul className="dropdown">
                        <li><a href="#">Laptops</a></li>
                        <li><a href="#">Monitors</a></li>
                        <li><a href="#">Printers</a></li>
                    </ul>
                </li>
            </ul>
            <ul className='ul'>
                <li className='ul-li'>
                    <Link to='/' className='link' href="#">Products &#9662;</Link>
                    <ul className="dropdown">
                        <li><a href="#">Laptops</a></li>
                        <li><a href="#">Monitors</a></li>
                        <li><a href="#">Printers</a></li>
                    </ul>
                </li>
            </ul> */}
        </div>
    );
};

export default Dropdown;