import { useRef, useState } from 'react';

export const useIncomeInput = () => {
  const [incomeValue, setIncomeValue] = useState('');
  const incomeInput = useRef();
  const handleIncomeInput = (ev) => {
    if (ev.target.value.length <= 13) setIncomeValue(incomeInput.current.value);
  };
  return {
    incomeValue,
    incomeInput,
    handleIncomeInput,
  };
};
