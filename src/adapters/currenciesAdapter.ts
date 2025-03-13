import { CurrencyResponse } from '../models/currencies/currenciesTypes';
import { CurrencyDTO } from '../models/currencies/dto';

export const currenciesAdapter = (
  currencies: CurrencyDTO
): CurrencyResponse => {
  return Object.entries(currencies)?.map(([key, { name }]) => ({
    value: key,
    name,
  }));
};
