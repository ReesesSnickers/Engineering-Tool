import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Radio = (props: Props) => {
  const { id, label } = props;
  return (
    <div>
      <input type="radio" {...props} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Radio;
