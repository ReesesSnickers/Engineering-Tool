import { useState, ChangeEvent, FormEvent } from 'react';
import { decodeBase64 } from '../utils/encryptionUtil';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextInput from '../components/form/TextInput';

const DevDecodeBase64 = () => {
  const [decodeBase64FieldValue, setDecodeBase64FieldValue] = useState('');
  const [decodeBase64ResultsValue, SetDecodeBase64ResultsValue] = useState('');
  const [copied, setCopied] = useState(false);
  const [decodeError, setDecodeError] = useState('');

  const handleDecodeBase64Submit = (event: FormEvent) => {
    event.preventDefault();
    try {
      const decodedValue = decodeBase64(decodeBase64FieldValue);
      SetDecodeBase64ResultsValue(decodedValue);
    } catch (error) {
      setDecodeError('Only encoded values can be decoded.');
      console.log(error);
    }
  };

  const handleDecodeBase64FieldOnChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    // Reset the results value only if there is a value and a change occurs
    if (decodeBase64ResultsValue) SetDecodeBase64ResultsValue('');
    // Reset the results of copied if there is a value and a change occurs
    if (copied) setCopied(false);
    // Reset error only if there is a error  and a change occurs
    if (decodeError) setDecodeError('');

    setDecodeBase64FieldValue(event.target.value);
  };

  const handleCopyButtonOnClick = () => {
    navigator.clipboard.writeText(decodeBase64ResultsValue);
    setCopied(true);
  };

  const copyButtonText = copied ? 'Copied' : 'Copy';

  return (
    <form onSubmit={handleDecodeBase64Submit}>
      <TextInput
        error={decodeError}
        required
        value={decodeBase64FieldValue}
        onChange={handleDecodeBase64FieldOnChange}
        name="encoded-value"
        label="Enter encode value that needs decoded:"
      />
      <button type="submit" className="submit-button">
        Decode
      </button>
      <textarea
        readOnly
        value={decodeBase64ResultsValue}
        style={{ marginTop: '15px' }}
      />
      <button
        disabled={!decodeBase64ResultsValue}
        onClick={handleCopyButtonOnClick}
        className="copy-button"
      >
        <FontAwesomeIcon icon={faCopy} /> {copyButtonText}
      </button>
    </form>
  );
};

export default DevDecodeBase64;
