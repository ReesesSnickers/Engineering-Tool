import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LinksGeneral = () => {
  return (
    <div>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.lastpass.com/features/password-generator"
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Lastpass
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://copilot.microsoft.com/"
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Microsoft
            Copilot
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LinksGeneral;
