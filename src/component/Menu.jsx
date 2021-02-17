import React, { useState } from 'react';

import { NavLink as Link } from 'react-router-dom';

import imgLogo from '../img/idfk_logo.png';

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const Menu = () => {

    /*   *   *   *   *   *   *   *   *   *   */

    const [ isExtended, setIsExtended ] = useState(false);
    const toggleMenu = () => setIsExtended(prev => !prev);

    const classBtn = isExtended ? 'active' : '';

    /*   *   *   *   *   *   *   *   *   *   */
    
    return(
    <header className='menu'>

        <div className='elem __logo'>
            <img src={imgLogo} alt='logo'/>
        </div>

        <div className='elem __info'>
            <button className={classBtn} onClick={() => toggleMenu()}></button>
        </div>

    </header>
)};

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export default Menu;