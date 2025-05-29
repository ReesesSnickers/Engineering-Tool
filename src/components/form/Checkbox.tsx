import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Checkbox = (props: Props) => {
  const { id, label } = props;
  return (
    <div>
      <input type="checkbox" {...props} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Checkbox;
