import React, {useState, useEffect} from 'react' 
import {Link} from 'react-router-dom' 
import { Button } from './Button';
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false); 
    const [button, setButton] = useState(false);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(true);

    const showButton = () => {
        if (window.innerwidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    };

    useEffect( () => {
        showButton();
    }, []);


    window.addEventListener('resize', showButton);

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link 
                    to="/" 
                    className="navbar-logo"
                    onClick={closeMobileMenu}>
                        Zaini <i className="fab fa-typo3" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fa fa-times' : 'fa fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link 
                            to="/" 
                            className="nav-links" 
                            onClick={closeMobileMenu}
                            >
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link 
                            to="/service"
                             className="nav-links" 
                             onClick={closeMobileMenu}
                             >
                                Service
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link 
                            to="/product" 
                            className="nav-links"
                            onClick={closeMobileMenu}
                            >
                                Product
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link 
                            to="/sign-up" 
                            className="nav-links-mobile" 
                            onClick={closeMobileMenu}
                            >
                                Sign-Up
                            </Link>
                        </li>

                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </div>
    )
}

export default Navbar
