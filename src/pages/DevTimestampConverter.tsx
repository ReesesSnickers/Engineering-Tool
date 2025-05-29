import { useState, ChangeEvent, FormEvent } from 'react';
import ErrorMessage from '../components/form/ErrorMessage';
import NumberInput from '../components/form/NumberInput';
import Radio from '../components/form/Radio';

const initializedConvertedValues = {
  utc: '',
  iso8601: '',
  local: '',
};

const timestamp_types = {
  UNIX: 'unix',
  EPOCH: 'epoch',
};

const DevTimestampConverter = () => {
  const [timestampValue, setTimestampValue] = useState('');
  const [convertedValues, setConvertedValues] = useState(
    initializedConvertedValues,
  );
  const [error, setError] = useState('');
  const [timestampType, setTimestampType] = useState(timestamp_types.UNIX);

  const handleOnSubmit = (event: FormEvent) => {
    event.preventDefault();
    try {
      let timestamp = new Date();

      if (timestampType === timestamp_types.UNIX) {
        timestamp = new Date(Number(timestampValue) * 1000);
      }
      // else {
      // in progress. will need to figure out the issues
      // let winTicks = 10000000;
      // let uEpoch = 11644473600;
      // let unixTime = Number(timestampValue) / winTicks - uEpoch;
      // timestamp = new Date(unixTime * 1000);
      // }

      const convertedUtc = timestamp.toUTCString();
      const convertedIso8601 = timestamp.toISOString();
      const convertedLocal = timestamp.toLocaleString();

      setConvertedValues({
        utc: convertedUtc,
        iso8601: convertedIso8601,
        local: convertedLocal,
      });
    } catch (error) {
      setError('Ensure to use appropriate unix timestamp.');
      console.log(error);
    }
  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Reset the results of convertedValues if there is a value and a change occurs
    if (convertedValues) setConvertedValues(initializedConvertedValues);
    // Reset the results of error if there is a value and a change occurs
    if (error) setError('');
    setTimestampValue(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <NumberInput
          error={error}
          required
          value={timestampValue}
          onChange={handleOnChange}
          name="timestamp-value"
          label="Enter timestamp value:"
        />
        <fieldset>
          <Radio
            id="timestamp-unix"
            name="timestamp-unix"
            value={timestamp_types.UNIX}
            label="Unix"
            checked={timestampType === timestamp_types.UNIX}
            onChange={() => {
              setTimestampType(timestamp_types.UNIX);
            }}
          />
          <Radio
            id="timestamp-epoch"
            name="timestamp-epoch"
            value={timestamp_types.EPOCH}
            label="Epoch"
            checked={timestampType === timestamp_types.EPOCH}
            onChange={() => {
              setTimestampType(timestamp_types.EPOCH);
            }}
          />
        </fieldset>
        <button type="submit" className="submit-button">
          Generate
        </button>
      </form>
      <div style={{ display: 'flex', flexDirection: 'row', marginTop: '30px' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            paddingRight: '15px',
            borderRight: '2px solid white',
          }}
        >
          <span>UTC:</span>
          <span style={{ marginTop: '10px', marginBottom: '10px' }}>
            ISO 8601:
          </span>
          <span>Local:</span>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '15px',
          }}
        >
          <span>{convertedValues.utc}</span>
          <span style={{ marginTop: '10px', marginBottom: '10px' }}>
            {convertedValues.iso8601}
          </span>
          <span>{convertedValues.local}</span>
        </div>
      </div>
    </>
  );
};

export default DevTimestampConverter;
