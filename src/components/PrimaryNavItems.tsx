import { NavLink, useLocation } from 'react-router-dom';
import ROUTES from '../consts/routes';

const PrimaryNavItems = () => {
  const location = useLocation();
  const isJiraToolsSelected = location.pathname.includes(ROUTES.JIRA_TOOLS);
  const jiraToolsSelectedClassName = isJiraToolsSelected ? 'nav-selected' : '';
  const isDeveloperToolsSelected = location.pathname.includes(
    ROUTES.DEVELOPER_TOOLS,
  );
  const DeveloperToolsSelectedClassName = isDeveloperToolsSelected
    ? 'nav-selected'
    : '';
  const isHelpfulLinksSelected = location.pathname.includes(
    ROUTES.HELPFUL_LINKS,
  );
  const helpfulLinksSelectedClassName = isHelpfulLinksSelected
    ? 'nav-selected'
    : '';
  return (
    <>
      <NavLink
        to={ROUTES.JIRA_BOILERPLATES}
        className={jiraToolsSelectedClassName}
      >
        Jira Tools
      </NavLink>
      <NavLink
        to={ROUTES.DEV_ENCODE_BASE64}
        className={DeveloperToolsSelectedClassName}
      >
        Developer Tools
      </NavLink>
      <NavLink
        to={ROUTES.HELPFUL_LINKS_ACCESSIBILITY}
        className={helpfulLinksSelectedClassName}
      >
        Helpful Links
      </NavLink>
    </>
  );
};

export default PrimaryNavItems;
