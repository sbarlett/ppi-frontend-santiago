import { Box, styled, Typography } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '20px 0px 20px 54px',
  backgroundColor: '#0E1342',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    padding: '20px 16px',
  },
}));

export const Paragraph = styled(Typography)({
  fontSize: 22,
  fontWeight: 600,
  lineHeight: '20px',
  color: '#FFFFFF',
});
