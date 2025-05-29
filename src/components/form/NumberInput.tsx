import { InputHTMLAttributes } from 'react';
import ErrorMessage from './ErrorMessage';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  name: string;
  label: string;
}

const NumberInput = (props: Props) => {
  return (
    <>
      <label
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
        className={props.error ? 'label-error' : ''}
        htmlFor={props.name}
      >
        <span>{props.label}</span>
        <input
          {...props}
          type="number"
          className={props.error ? 'input-error' : ''}
          id={props.name}
          style={{ marginTop: '5px' }}
        />
        {props.error && <ErrorMessage error={props.error} />}
      </label>
    </>
  );
};

export default NumberInput;
