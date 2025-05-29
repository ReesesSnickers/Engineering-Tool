import {
  MemoryRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import './App.css';
import JiraBoilerplates from '../pages/JiraBoilerplates';
import ROUTES from '../consts/routes';
import PageWrapper from '../pages/PageWrapper';
import DevEncodeBase64 from '../pages/DevEncodeBase64';
import DevDecodeBase64 from '../pages/DevDecodeBase64';
import DevTimestampConverter from '../pages/DevTimestampConverter';
import LinksAccessibility from '../pages/LinksAccessibility';
import LinksGeneral from '../pages/LinksGeneral';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path={ROUTES.ROOT}
          element={<Navigate to={ROUTES.JIRA_BOILERPLATES} replace />}
        />

        <Route
          path={ROUTES.JIRA_BOILERPLATES}
          element={
            <PageWrapper>
              <JiraBoilerplates />
            </PageWrapper>
          }
        />
        <Route
          path={ROUTES.DEV_ENCODE_BASE64}
          element={
            <PageWrapper>
              <DevEncodeBase64 />
            </PageWrapper>
          }
        />
        <Route
          path={ROUTES.DEV_DECODE_BASE64}
          element={
            <PageWrapper>
              <DevDecodeBase64 />
            </PageWrapper>
          }
        />
        <Route
          path={ROUTES.DEV_TIMESTAMP_CONVERTER}
          element={
            <PageWrapper>
              <DevTimestampConverter />
            </PageWrapper>
          }
        />
        <Route
          path={ROUTES.HELPFUL_LINKS_ACCESSIBILITY}
          element={
            <PageWrapper>
              <LinksAccessibility />
            </PageWrapper>
          }
        />
        <Route
          path={ROUTES.HELPFUL_LINKS_GENERAL}
          element={
            <PageWrapper>
              <LinksGeneral />
            </PageWrapper>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
