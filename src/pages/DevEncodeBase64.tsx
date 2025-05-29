import { useState, ChangeEvent, FormEvent } from 'react';
import { encodeBase64 } from '../utils/encryptionUtil';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextInput from '../components/form/TextInput';

const DevEncodeBase64 = () => {
  const [encodeBase64FieldValue, setEncodeBase64FieldValue] = useState('');
  const [encodeBase64ResultsValue, SetEncodeBase64ResultsValue] = useState('');
  const [copied, setCopied] = useState(false);

  const handleEncodeBase64Submit = (event: FormEvent) => {
    event.preventDefault();
    try {
      const encodedValue = encodeBase64(encodeBase64FieldValue);
      SetEncodeBase64ResultsValue(encodedValue);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEncodeBase64FieldOnChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    // Reset the results value only if there is a value and a change occurs
    if (encodeBase64ResultsValue) SetEncodeBase64ResultsValue('');
    // Reset the results of copied if there is a value and a change occurs
    if (copied) setCopied(false);

    setEncodeBase64FieldValue(event.target.value);
  };

  const handleCopyButtonOnClick = () => {
    navigator.clipboard.writeText(encodeBase64ResultsValue);
    setCopied(true);
  };

  const copyButtonText = copied ? 'Copied' : 'Copy';

  return (
    <form onSubmit={handleEncodeBase64Submit}>
      <TextInput
        required
        value={encodeBase64FieldValue}
        onChange={handleEncodeBase64FieldOnChange}
        name="decoded-value"
        label="Enter value to be encoded:"
      />
      <button type="submit" className="submit-button">
        Encode
      </button>
      <textarea
        readOnly
        value={encodeBase64ResultsValue}
        style={{ marginTop: '15px' }}
      />
      <button
        disabled={!encodeBase64ResultsValue}
        onClick={handleCopyButtonOnClick}
        className="copy-button"
      >
        <FontAwesomeIcon icon={faCopy} /> {copyButtonText}
      </button>
    </form>
  );
};

export default DevEncodeBase64;
