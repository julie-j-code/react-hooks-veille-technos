import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <div className='menu'>
            <ul>
                {/* un avantage de react-router-dom est qu'il peut nous indiquer si un lien est actif --- proprieté isActive */}
                <li><NavLink to="/" className={({isActive})=>isActive?"activelink": undefined}>Home</NavLink></li>
                <li><NavLink to="/add" className={({isActive})=>isActive?"activelink": undefined}>AddTechno</NavLink></li>
                <li><NavLink to="/list" className={({isActive})=>isActive?"activelink": undefined}>All Technos</NavLink></li>
            </ul>

        </div>
    );
}

export default Menu;
