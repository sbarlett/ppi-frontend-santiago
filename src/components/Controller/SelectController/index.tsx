import { FormControl, SxProps } from '@mui/material';
import React, { memo, useState } from 'react';
import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';
import { ArrowDownIcon } from '../../assets';
import {
  MenuProps,
  MuiIcon,
  MuiLabel,
  MuiSelect,
  StyledMenuItem,
} from './styles';

type Option = { value: string; name: string };

interface Props {
  options: Option[];
  placeholder: string;
  sx?: SxProps;
  label: string;
}

export type SelectProps<T extends FieldValues> = Props & UseControllerProps<T>;

function SelectController<T extends FieldValues>({
  control,
  name,
  options,
  label,
  sx,
  ...props
}: SelectProps<T>) {
  const {
    field: { ref, onChange, value, ...field },
  } = useController({
    control,
    name,
  });
  const [open, setOpen] = useState<boolean>(false);
  const handleToggle = () => setOpen((prev) => !prev);

  const menuWidth = typeof sx === 'object' && (sx as { width?: string }).width;

  return (
    <FormControl fullWidth onClick={handleToggle}>
      <MuiLabel>{label}</MuiLabel>
      <MuiSelect
        value={value}
        inputRef={ref}
        onChange={onChange}
        label={label}
        IconComponent={() => (
          <MuiIcon open={open}>
            <ArrowDownIcon />
          </MuiIcon>
        )}
        MenuProps={MenuProps(menuWidth)}
        onOpen={handleToggle}
        onClose={handleToggle}
        fullWidth
        {...props}
        {...field}
      >
        {options?.map((option: Option) => (
          <StyledMenuItem key={option.value} value={option.value}>
            {option.name}
          </StyledMenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
}

export default memo(SelectController);
