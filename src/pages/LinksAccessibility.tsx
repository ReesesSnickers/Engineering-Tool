import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LinksAccessibility = () => {
  return (
    <div>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.w3.org/WAI/standards-guidelines/wcag/"
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> WCAG Docs
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://webaim.org/resources/contrastchecker/"
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Contrast Checker
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LinksAccessibility;
