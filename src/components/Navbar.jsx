import { useState, useEffect } from 'react';
// used to navigate to other parts of page
import { Link } from 'react-router-dom'; 
// importing styles, navigation links, logo, menu, and close tab.
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';


const Navbar = () => {
  const [active, setActive] = useState('');

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* The link to / points to the top of the page. Set active keeps track of where user is currently on the page. The window scroll is to scroll to the top of the page.*/}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar