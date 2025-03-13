import { RatesDTO } from '../models/rates/dto';
import { RatesResponse } from '../models/rates/ratesTypes';

export const ratesAdapter = (data: RatesDTO): RatesResponse => {
  return {
    rates: data.rates,
  };
};
