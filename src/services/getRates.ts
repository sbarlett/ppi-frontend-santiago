import { ratesAdapter } from '../adapters/ratesAdapter';
import { RatesResponse } from '../models/rates/ratesTypes';
import axiosInstance from '../utils/axiosIntance';

export const getRates = async (): Promise<RatesResponse> => {
  const response = await axiosInstance.get('/rates');
  return ratesAdapter(response?.data);
};
