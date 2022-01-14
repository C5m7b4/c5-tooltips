import React from 'react';

interface InputProps {
  value: string | number;
  onChange: (e: React.ChangeEvent) => void;
}

const Input: React.FC<InputProps> = ({ value, onChange }) => {
  return <input type="text" value={value} onChange={onChange} />;
};

export default Input;
