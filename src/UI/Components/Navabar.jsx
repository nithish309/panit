import './Navbar.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '/images/logo.png';
import { useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";




const Navbar = ({ theme ,toggleTheme,logout,isLoggedIn}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

 
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="lora-regular body">
      <div
        className="navbar bg-base-100"
        style={{
          backgroundColor: theme === 'light' ? 'white' : '#333', 
          color: theme === 'light' ? '#333' : '#fff', 
          paddingBottom: '1.5em',
          paddingTop: '1.5em',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo on the left */}
        <div className="logo-container">
          <Link to="/" style={{ fontWeight: 'bold', fontSize: '1.5em' }}>
            <img height="75px" width="75px" src={logo} alt="Logo" className="rotate-logo"/>
          </Link>
        </div>

        {/* Menu for larger devices */}
        <div className='menu-container ' >
          <ul className="menu menu-horizontal">
          <li>
              <Link to="/" style={{backgroundColor: theme === 'light' ? 'white' : '#333', 
          color: theme === 'light' ? '#ee2d7d' : '#fff'}}>Home</Link>
            </li>
            <li>
              <Link to="/products" style={{backgroundColor: theme === 'light' ? 'white' : '#333', 
          color: theme === 'light' ? '#ee2d7d' : '#fff'}}>Products</Link>
            </li>
            {/* <li>
              <Link to="/about">About</Link>
            </li> */}
             <li>
              <Link to="/cart" style={{backgroundColor: theme === 'light' ? 'white' : '#333', 
          color: theme === 'light' ? '#ee2d7d' : '#fff'}}>Cart</Link>
            </li>
            <li>
              <Link to="/contact" style={{backgroundColor: theme === 'light' ? 'white' : '#333', 
          color: theme === 'light' ? '#ee2d7d' : '#fff'}}>Contact</Link>
            </li> 
          </ul>
        </div>

        {/* Social Icons for larger devices */}
        <div className="social-icons">
          <a href="https://www.facebook.com/" className="social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook rotate-logo" style={{backgroundColor: theme === 'light' ? 'white' : '#333', 
          color: theme === 'light' ? '#ee2d7d' : '#fff'}}></i>
          </a>
          <a href="https://www.instagram.com/?hl=en" className="social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram rotate-logo" style={{backgroundColor: theme === 'light' ? 'white' : '#333', 
          color: theme === 'light' ? '#ee2d7d' : '#fff'}}></i>
          </a>
          <div className="flex justify-end  ml-5">
            <label className="swap swap-rotate">
          
              <input type="checkbox" className="theme-controller" value="synthwave" onClick={toggleTheme}/>

              <svg
                className="swap-off h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                style={{backgroundColor: theme === 'light' ? 'white' : '#333', 
                  color: theme === 'light' ? '#ee2d7d' : '#fff'}}
                
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
             
              <svg
                className="swap-on h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                style={{backgroundColor: theme === 'light' ? 'white' : '#333', 
                  color: theme === 'light' ? '#ee2d7d' : '#fff'}}
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label> 
          </div>
          <Link to="/location" className="social-icon" rel="noopener noreferrer">
            <i className="fa-solid fa-location-dot rotate-logo" style={{backgroundColor: theme === 'light' ? 'white' : '#333', 
          color: theme === 'light' ? '#ee2d7d' : '#fff'}}></i>
          </Link>
          
        {isLoggedIn ?
        (
          <button className="social-icon" onClick={logout} style={{backgroundColor: theme === 'light' ? 'white' : '#333', 
            color: theme === 'light' ? '#ee2d7d' : '#fff'}} ><i className="fa fa-sign-out rotate-logo"style={{fontSize: '1.5em',width: '2em',marginLeft: '0.5em'}}></i>
          </button>
        ) : (
          <button className="social-icon" onClick={() => navigate("/login")} style={{backgroundColor: theme === 'light' ? 'white' : '#333', 
            color: theme === 'light' ? '#ee2d7d' : '#fff'}} ><i className="fa fa-sign-in rotate-logo"style={{fontSize: '1.5em',width: '2em',marginLeft: '0.5em'}}></i>
          </button>
        )
        }
        

        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="flex justify-end  sm:ml-10  lg:hidden md:hidden">
            <label className="swap swap-rotate">
              
              <input type="checkbox" className="theme-controller" value="synthwave" onClick={toggleTheme}/>

              
              <svg
                className="swap-off h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                style={{backgroundColor: theme === 'light' ? 'white' : '#333', 
                  color: theme === 'light' ? '#ee2d7d' : '#fff'}}
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

             
              <svg
                className="swap-on h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                style={{backgroundColor: theme === 'light' ? 'white' : '#333', 
                  color: theme === 'light' ? '#ee2d7d' : '#fff'}}
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
          <Link to="/location" className="social-icon lg:hidden md:hidden sm:ml-10 " rel="noopener noreferrer">
          <i 
            className="fa-solid fa-location-dot rotate-logo" 
            style={{
              backgroundColor: theme === 'light' ? 'white' : '#333',
              color: theme === 'light' ? '#ee2d7d' : '#fff',
              fontSize: '24px'
            }}>
          </i>
        </Link>

        {isLoggedIn ?
        (
          <button className="social-icon md:hidden sm:ml-10 lg:hidden" onClick={logout} style={{backgroundColor: theme === 'light' ? 'white' : '#333', 
            color: theme === 'light' ? '#ee2d7d' : '#fff'}} ><i className="fa fa-sign-out rotate-logo"style={{fontSize: '1.5em',width: '2em'}}></i>
          </button>
        ) : (
          <button className="social-icon md:hidden sm:ml-10 lg:hidden" onClick={() => navigate("/login")} style={{backgroundColor: theme === 'light' ? 'white' : '#333', 
            color: theme === 'light' ? '#ee2d7d' : '#fff'}} ><i className="fa fa-sign-in rotate-logo"style={{fontSize: '1.5em',width: '2em'}}></i>
          </button>
        )
        }

        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="bar" style={{backgroundColor: theme === 'light' ? '#ee2d7d' : '#fff'}} ></span>
          <span className="bar" style={{backgroundColor: theme === 'light' ? '#ee2d7d' : '#fff'}}></span>
          <span className="bar" style={{backgroundColor: theme === 'light' ? '#ee2d7d' : '#fff'}}></span>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'show' : ''}`} onClick={toggleMenu}
       style={{backgroundColor: theme === 'light' ? 'white' : '#333', 
        color: theme === 'light' ? '#ee2d7d' : '#fff' }}>
        <ul>
        <li>
            <Link to="/" style={{backgroundColor: theme === 'light' ? 'white' : '#333', 
          color: theme === 'light' ? '#ee2d7d' : '#fff'}} onClick={toggleMenu} >Home</Link>
          </li>
          <li>
            <Link to="/products" style={{backgroundColor: theme === 'light' ? 'white' : '#333', 
          color: theme === 'light' ? '#ee2d7d' : '#fff'}} onClick={toggleMenu}>Products</Link>
          </li>
          {/* <li>
            <Link to="/deals" onClick={toggleMenu}>Deals</Link>
          </li> */}
          {/* <li>
            <Link to="/about" onClick={toggleMenu}>About</Link>
          </li> */}
          <li>
            <Link to="/cart" style={{backgroundColor: theme === 'light' ? 'white' : '#333', 
          color: theme === 'light' ? '#ee2d7d' : '#fff'}} onClick={toggleMenu}>Cart</Link>
          </li>
          <li>
            <Link to="/contact" style={{backgroundColor: theme === 'light' ? 'white' : '#333', 
          color: theme === 'light' ? '#ee2d7d' : '#fff'}} onClick={toggleMenu}>Contact</Link>
          </li>
           
        </ul>
      </div>

      <hr />
    </div>
  );
};

export default Navbar;
