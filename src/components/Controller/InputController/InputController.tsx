import React, { useCallback } from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';
import { Symbol } from './styles';

interface Props {
  includeSymbol: boolean;
  label: string;
}

type FormTextFieldProps<T extends FieldValues> = Props &
  TextFieldProps &
  UseControllerProps<T>;

function InputController<T extends FieldValues>({
  control,
  name,
  label,
  includeSymbol,
  ...props
}: FormTextFieldProps<T>) {
  const {
    field: { ref, value, onChange, ...fieldProps },
  } = useController({
    name,
    control,
  });

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      const regex = /^\d*$/;
      if (regex.test(newValue) || newValue === '') {
        onChange(event);
      }
    },
    [onChange]
  );

  return (
    <TextField
      {...props}
      {...fieldProps}
      inputRef={ref}
      label={label}
      value={value}
      onChange={handleChange}
      type="number"
      aria-label={label}
      InputProps={{
        sx: {
          maxHeight: '40px',
          border: '1px solid #CCCCCC',
          '&.MuiOutlinedInput-root': {
            borderRadius: '4px',
            backgroundColor: '#FFFFFF',
          },
          '& .MuiOutlinedInput-input': {
            padding: '8.5px 0px 8.5px 4px',
            fontSize: 16,
            fontWeight: 600,
          },
          '& input[type=number]': {
            '-moz-appearance': 'textfield',
          },
          '& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button':
            {
              '-webkit-appearance': 'none',
            },
        },
        startAdornment: includeSymbol && <Symbol>$</Symbol>,
      }}
      InputLabelProps={{
        shrink: true,
        sx: {
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
        },
      }}
      onKeyDown={(event) => {
        if (
          !/[0-9]/.test(event.key) &&
          event.key !== 'Backspace' &&
          event.key !== 'Delete'
        ) {
          event.preventDefault();
        }
      }}
      sx={{
        '& .MuiOutlinedInput-notchedOutline': {
          position: 'unset',
          display: 'none',
        },
      }}
      fullWidth
    />
  );
}

export default InputController;
