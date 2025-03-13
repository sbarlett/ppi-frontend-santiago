import { Box, FormControl, SxProps } from '@mui/material';
import { memo, useState } from 'react';
import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';
import { ArrowDownIcon } from '../../assets';
import { MenuProps, MuiLabel, MuiSelect, StyledMenuItem } from './styles';

export const ArrowIcon = ({
  open,
  className,
  ...props
}: {
  open: boolean;
  className?: string;
}) => {
  return (
    <Box {...props} className={className}>
      <ArrowDownIcon />
    </Box>
  );
};

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
    <FormControl fullWidth>
      <MuiLabel>{label}</MuiLabel>
      <MuiSelect
        value={value}
        inputRef={ref}
        onChange={onChange}
        label={label}
        IconComponent={ArrowIcon}
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
