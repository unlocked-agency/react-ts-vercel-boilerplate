import { NavLink } from 'react-router-dom';

import './header-section.scss';
export const HeaderSection = () => {


  return (
    <div>
      <h1>Header Section</h1>

      <div id={'header-menu'}>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/does-not-exist'}>Error</NavLink>
      </div>

    </div>
  );
}

