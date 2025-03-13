import { Box, styled } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import HomeContainer from '../components/HomeContainer';
import TopBar from '../components/TopBar';
import { useCurrencies } from '../hooks/useCurrencies';
import { useRates } from '../hooks/useRates';
import { defaultValues, FormValues } from '../schema';

const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100vh',
});

export const Home = () => {
  const { data: coinsOptions, isLoading: loaingCoins
  } = useCurrencies();
  const { data: ratesData, isLoading: loadingRates } = useRates();

  const methods = useForm<FormValues>({
    defaultValues,
  });

  return (
    <FormProvider {...methods}>
      <Container>
        <TopBar />
        <HomeContainer conversionRates={ratesData} coins={coinsOptions} isLoading={loadingRates || loaingCoins} />
      </Container>
    </FormProvider>
  );
};
