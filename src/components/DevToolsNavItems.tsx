import { NavLink, useLocation } from 'react-router-dom';
import ROUTES from '../consts/routes';

const DevToolsNavItems = () => {
  const location = useLocation();
  const isEncodeBase64Selected = location.pathname.includes(
    ROUTES.DEV_ENCODE_BASE64,
  );
  const encodeBase64ClassName = isEncodeBase64Selected ? 'nav-selected' : '';
  const isDecodeBase64Selected = location.pathname.includes(
    ROUTES.DEV_DECODE_BASE64,
  );
  const decodeBase64ClassName = isDecodeBase64Selected ? 'nav-selected' : '';
  const isTimestampConverterSelected = location.pathname.includes(
    ROUTES.DEV_TIMESTAMP_CONVERTER,
  );
  const timestampConverterClassName = isTimestampConverterSelected
    ? 'nav-selected'
    : '';

  return (
    <>
      <NavLink to={ROUTES.DEV_ENCODE_BASE64} className={encodeBase64ClassName}>
        Encode Base64
      </NavLink>
      <NavLink to={ROUTES.DEV_DECODE_BASE64} className={decodeBase64ClassName}>
        Decode Base64
      </NavLink>
      <NavLink
        to={ROUTES.DEV_TIMESTAMP_CONVERTER}
        className={timestampConverterClassName}
      >
        Timestamp Converter
      </NavLink>
    </>
  );
};

export default DevToolsNavItems;
