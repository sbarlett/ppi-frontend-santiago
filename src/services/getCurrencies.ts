import { currenciesAdapter } from '../adapters/currenciesAdapter';
import { CurrencyResponse } from '../models/currencies/currenciesTypes';
import axiosInstance from '../utils/axiosIntance';

export const getCurrencies = async (): Promise<CurrencyResponse> => {
  const response = await axiosInstance.get('/currencies');
  return currenciesAdapter(response?.data);
};
