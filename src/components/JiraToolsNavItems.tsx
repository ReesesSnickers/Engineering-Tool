import { NavLink } from 'react-router-dom';
import ROUTES from '../consts/routes';

const JiraToolsNavItems = () => {
  return (
    <>
      <NavLink to={ROUTES.JIRA_BOILERPLATES} className="nav-selected">
        Boilerplates
      </NavLink>
    </>
  );
};

export default JiraToolsNavItems;
