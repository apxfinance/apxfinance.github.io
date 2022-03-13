import { useCallback } from 'react';
import useTombFinance from './useTombFinance';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';

const useAllocateSeigniorage = (description?: string) => {
  const tombFinance = useTombFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleAllocateSeigniorage = useCallback(() => {
    const alertDesc = description || 'AllocateSeigniorage from BoardRoom';
    handleTransactionReceipt(tombFinance.allocateSeigniorage(), alertDesc);
  }, [tombFinance, description, handleTransactionReceipt]);
  return { onAllocateSeigniorage: handleAllocateSeigniorage };
};

export default useAllocateSeigniorage;
