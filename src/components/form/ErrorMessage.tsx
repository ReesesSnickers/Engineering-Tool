import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  error: string;
}

const ErrorMessage = (props: Props) => {
  const errorMessage = `Error: ${props.error}`;
  return (
    <span className="error-message">
      <FontAwesomeIcon icon={faTriangleExclamation} /> {errorMessage}
    </span>
  );
};

export default ErrorMessage;
