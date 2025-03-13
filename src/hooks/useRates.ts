import { useQuery } from '@tanstack/react-query';
import { getRates } from '../services/getRates';

export const useRates = () => {
  return useQuery({
    queryKey: ['rates'],
    queryFn: getRates,
  });
};
