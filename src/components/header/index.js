import React, { useEffect, useState } from "react";
import './header.css'
import Mobile from './mobile';
import Web from './web';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='header'>
            <div className='logo'><span className="logo-1">Port</span><span className="logo-2">folio</span></div>
            <div className='menu'>
                <div className='web-menu'>
                    <Web/>
                </div>
                <div className='mobile-menu'>
                    <div onClick={()=>setIsOpen(!isOpen)}>
                        <i class="fas fa-bars menu-icon"></i>
                    </div>
                    {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen}/>}
                </div>
            </div>
        </div>
    )
}

export default Header;
