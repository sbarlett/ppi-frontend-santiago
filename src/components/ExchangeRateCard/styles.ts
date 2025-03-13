import { Box, IconButton, Link, styled, Typography } from '@mui/material';

export const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

export const Card = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '70px',
  padding: '33px 42px 0px 42px',
  borderRadius: '8px',
  backgroundColor: '#FFFFFF',
  boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.25)',
  [theme.breakpoints.down('sm')]: {
    padding: '24px 16px 13px 16px',
    gap: '16px',
  },
}));

export const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-end',
  gap: '20px',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '16px',
  },
}));

export const Content = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  gap: '20px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
}));

export const BoxResult = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '50%',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '10px',
  [theme.breakpoints.down('sm')]: {
    gap: '0px',
  },
}));

export const ParagraphLarge = styled(Typography)(({ theme }) => ({
  color: '#000000',
  fontSize: 32,
  fontWeight: 600,
  lineHeight: '36px',
  [theme.breakpoints.down('sm')]: {
    whiteSpace: 'nowrap',
    fontSize: 26,
  },
  [theme.breakpoints.only('xs')]: {
    fontSize: 24,
  },
}));

export const ParagraphSmall = styled(Typography)({
  color: '#757575',
  fontSize: 16,
  fontWeight: 400,
  lineHeight: '36px',
  whiteSpace: 'nowrap',
});

export const MuiIconButton = styled(IconButton)({
  border: '1px solid #177FE5',
  height: '42px',
  width: '42px',
});

export const BoxTooltip = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '50%',
  alignItems: 'flex-end',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  gap: '13px',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const TooltipInformative = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '19px 17px 14px 31px',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: '#E8F3FF',
  borderRadius: '8px',
  marginTop: '66px',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const TooltipText = styled(Typography)({
  color: '#000000',
  fontSize: 14,
  fontWeight: 400,
  lineHeight: '36px',
});

export const TooltipSmallTextDesktop = styled(Typography)(({ theme }) => ({
  color: '#000000',
  fontSize: 12,
  fontWeight: 300,
  lineHeight: '36px',
  paddingRight: '12px',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const TextMobile = styled(Typography)(({ theme }) => ({
  color: '#000000',
  fontSize: 12,
  fontWeight: 300,
  lineHeight: '23px',
  display: 'none',
  paddingBottom: '10px',
  [theme.breakpoints.down('sm')]: {
    display: 'block',
  },
}));

export const MuiLink = styled(Link)({
  color: '#000000',
  textDecorationColor: '#000000',
});
