import { useState, useEffect } from "react";
import nookies from "nookies";

export function useBalance() {
  const [balance, setBalance] = useState(0);
  const [currentSeriesIndex, setCurrentSeriesIndex] = useState(0);

  useEffect(() => {

    const cookies = nookies.get(null);
    if (cookies.balance) {
      setBalance(parseFloat(cookies.balance));
    }
    if (cookies.currentSeriesIndex) {
      setCurrentSeriesIndex(parseInt(cookies.currentSeriesIndex, 10));
    }
  }, []);

  const updateBalance = (amount: any) => {
    const newBalance = balance + amount;
    setBalance(newBalance);
    nookies.set(null, 'balance', newBalance.toFixed(2), { path: '/' });
  };

  const updateSeriesIndex = (index: any) => {
    setCurrentSeriesIndex(index);
    nookies.set(null, 'currentSeriesIndex', index.toString(), { path: '/' });
  };

  const currencyBalance = new Intl.NumberFormat('pt-BR', {
    style: "currency",
    currency: "BRL"
  }) 

  return {
    balance: currencyBalance.format(balance),
    currentSeriesIndex,
    updateBalance,
    updateSeriesIndex,
  };
}
