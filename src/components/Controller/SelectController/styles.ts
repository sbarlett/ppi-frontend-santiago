import {
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  styled,
} from '@mui/material';

export const MenuProps = (menuWidth: string | number) => ({
  PaperProps: {
    sx: {
      maxHeight: '200px !important',
      width: menuWidth,
      marginTop: '3px',
      borderRadius: '4px',
      backgroundColor: '#FFFFFF',
      border: '1px solid #CCCCCC',

      boxShadow:
        '0px 1px 2px 0px rgba(30, 30, 30, 0.10), 0px 2px 6px 0px rgba(30, 30, 30, 0.10)',
      '&::-webkit-scrollbar': {
        width: '14px',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#79747E',
        borderRadius: '999px',
        border: '4px solid transparent',
        backgroundClip: 'content-box',
      },
      '&::-webkit-scrollbar-track': {
        backgroundColor: 'transparent',
        margin: '6px 0px',
      },
    },
  },
});

export const StyledMenuItem = styled(MenuItem)({
  color: '#000000',
  fontSize: 16,
  fontWeight: 600,
  lineHeight: '20px',
  padding: '12px',
  '&.Mui-selected': {
    backgroundColor: '#FFF !important',
  },
});

export const MuiLabel = styled(InputLabel)({
  color: '#000000',
  fontSize: 16,
  fontWeight: 600,
  lineHeight: '20px',
  position: 'unset',
  transform: 'unset',
  marginBottom: '16px',
  '&.Mui-focused, &.MuiInputLabel-shrink': {
    color: '#000000',
  },
});

export const MuiSelect = styled(Select)({
  width: '100%',
  maxHeight: '40px',
  border: '1px solid #CCCCCC',
  borderRadius: '4px',
  backgroundColor: '#FFFFFF',
  '& .MuiOutlinedInput-notchedOutline': {
    borderRadius: '4px',
    position: 'unset',
    display: 'none',
  },
  '& .MuiSelect-select': {
    padding: '8.5px 0px 8.5px 14px',
  },
  '& .MuiOutlinedInput-notchedOutline legend': {
    display: 'none',
    height: '0px',
  },
  '& .MuiOutlinedInput-input': {
    color: '#000000',
    fontSize: 16,
    fontWeight: 600,
  },
});

export const MuiIcon = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ open }: { open: boolean }) => ({
  padding: '12px',
  color: '#323232',
  marginRight: '4px',
  ':hover, :active': {
    backgroundColor: 'transparent',
  },
  transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
}));
