import React from 'react';
import { useLocation } from 'react-router-dom';
import ROUTES from '../consts/routes';
import PrimaryNavItems from '../components/PrimaryNavItems';
import DevToolsNavItems from '../components/DevToolsNavItems';
import JiraToolsNavItems from '../components/JiraToolsNavItems';
import LinksNavItems from '../components/LinksNavItems';

interface LayoutProps {
  children: React.ReactNode;
}

const PageWrapper = (props: LayoutProps) => {
  const location = useLocation();

  const secondaryNavItems = () => {
    if (location.pathname.includes(ROUTES.JIRA_TOOLS)) {
      return <JiraToolsNavItems />;
    } else if (location.pathname.includes(ROUTES.DEVELOPER_TOOLS)) {
      return <DevToolsNavItems />;
    } else if (location.pathname.includes(ROUTES.HELPFUL_LINKS)) {
      return <LinksNavItems />;
    }
  };

  return (
    <>
      <nav className="primary-nav">
        <PrimaryNavItems />
      </nav>
      <nav className="secondary-nav">{secondaryNavItems()}</nav>
      <div className="page-wrapper">{props.children}</div>
    </>
  );
};

export default PageWrapper;
