import { Box, Skeleton, styled, Typography } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100vh',
  display: 'flex',
  gap: '35px',
  flexDirection: 'column',
  background: 'linear-gradient(to bottom, #1A8DFF 295px, #FFFFFF 0%)',
  padding: '30px',
  [theme.breakpoints.up('md')]: {
    padding: '63px 77px',
    gap: '72px',
  },
}));

export const Title = styled(Typography)({
  color: '#FFFFFF',
  fontSize: 32,
  lineHeight: '32px',
  fontWeight: 600,
  textAlign: 'center',
});

export const ExchangeRateCardWrapper = styled(Box)({
  position: 'absolute',
  top: '72px',
  left: '295px',
});

export const SkeletonCard = styled(Skeleton)(({ theme }) => ({
  width: '100%',
  maxHeight: '479px',
  height: '100%',
  backgroundColor: '#F9F9F9',
  borderRadius: '8px',
  boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.25)',
  [theme.breakpoints.up('md')]: {
    maxHeight: '400px',
  },
}));
