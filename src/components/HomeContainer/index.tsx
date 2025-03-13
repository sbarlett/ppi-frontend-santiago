import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { RatesResponse } from '../../models/rates/ratesTypes';
import { FormValues } from '../../schema';
import ExchangeRateCard from '../ExchangeRateCard';
import { Container, SkeletonCard, Title } from './styles';
import { formatNumber } from '../../utils/formatNumber';

const HomeContainer = ({
  conversionRates,
  coins,
  isLoading,
}: {
  conversionRates: RatesResponse;
  coins: { value: string; name: string }[];
  isLoading: boolean;
}) => {
  const { watch, setValue} = useFormContext();

  const { from, to, amount,date } = watch();

  const rates = conversionRates?.rates || {};

  const selectedFromName = useMemo(
    () => coins?.find((coin) => coin.value === from)?.name ?? '',
    [coins, from]
  );
  const selectedToName = useMemo(
    () => coins?.find((coin) => coin.value === to)?.name ?? '',
    [coins, to]
  );

  const handleExchange = (data: FormValues) => {
    setValue('from', data.to);
    setValue('to', data.from);
  };

  return (
    <Container>
      <Title>{`${formatNumber(amount)} ${from} to ${to} - Convert ${selectedFromName} to ${selectedToName}`}</Title>
      {isLoading ? (
        <SkeletonCard variant="rectangular" animation='wave'  />
      ) : (
        <ExchangeRateCard
          coins={coins}
          rates={rates}
          data={{
            amount,
            from,
            to,
            date
          }}
          largeNames={{
            from: selectedFromName,
            to: selectedToName,
          }}
          onSubmit={handleExchange}
        />
      )}
    </Container>
  );
};

export default HomeContainer;