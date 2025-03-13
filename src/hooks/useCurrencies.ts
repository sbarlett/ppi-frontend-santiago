import { useQuery } from '@tanstack/react-query';
import { getCurrencies } from '../services/getCurrencies';

export const useCurrencies = () => {
  return useQuery({
    queryKey: ['currencies'],
    queryFn: getCurrencies,
  });
};
