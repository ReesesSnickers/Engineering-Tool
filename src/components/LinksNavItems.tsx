import { NavLink } from 'react-router-dom';
import ROUTES from '../consts/routes';

const LinksNavItems = () => {
  return (
    <>
      <NavLink to={ROUTES.HELPFUL_LINKS_ACCESSIBILITY} className="nav-selected">
        Accessibility
      </NavLink>
      <NavLink to={ROUTES.HELPFUL_LINKS_GENERAL} className="nav-selected">
        General
      </NavLink>
    </>
  );
};

export default LinksNavItems;
