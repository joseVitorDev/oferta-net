import { useState, useEffect, ChangeEvent } from "react";

interface UseCpfValidationReturn {
  cpf: string;
  isValidCpf: boolean;
  handleCpfChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function useCpfValidation(): UseCpfValidationReturn {
  const [cpf, setCpf] = useState<string>('');
  const [isValidCpf, setIsValidCpf] = useState<boolean>(false);

  useEffect(() => {
    validateCpf(cpf);
  }, [cpf]);

  const handleCpfChange = (event: ChangeEvent<HTMLInputElement>) => {
    let cpfValue = event.target.value.replace(/\D/g, ''); 
    cpfValue = applyCpfMask(cpfValue);
    setCpf(cpfValue);
  };

  const applyCpfMask = (cpfValue: string): string => {
    return cpfValue
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  };

  const validateCpf = (cpfValue: string) => {
    const cleanCpf = cpfValue.replace(/\D/g, '');
    let sum = 0;
    let remainder;

    if (cleanCpf.length !== 11) {
      setIsValidCpf(false);
      return;
    }

    for (let i = 1; i <= 9; i++) sum += parseInt(cleanCpf.substring(i - 1, i)) * (11 - i);
    remainder = (sum * 10) % 11;

    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cleanCpf.substring(9, 10))) {
      setIsValidCpf(false);
      return;
    }

    sum = 0;
    for (let i = 1; i <= 10; i++) sum += parseInt(cleanCpf.substring(i - 1, i)) * (12 - i);
    remainder = (sum * 10) % 11;

    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cleanCpf.substring(10, 11))) {
      setIsValidCpf(false);
      return;
    }

    setIsValidCpf(true);
  };

  return {
    cpf,
    isValidCpf,
    handleCpfChange,
  };
}
