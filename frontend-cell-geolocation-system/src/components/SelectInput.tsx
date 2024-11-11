import Select, { StylesConfig } from 'react-select';

interface Option {
  value: string;
  label: string;
}

interface SelectInputProps {
  name: string;
  className: string;
  options: Option[];
  value: Option | null;
  onChange: (option: any) => void;
  placeholder?: string;
  isClearable?: boolean;
}

const customStyles: StylesConfig<Option> = {
  singleValue: (base) => ({
    ...base,
    color: '#333333',
  }),
  option: (base, { isFocused, isSelected }) => ({
    ...base,
    backgroundColor: isSelected ? '#0C6DC7' : isFocused ? '#E6F0FA' : '#FFFFFF',
    color: isSelected ? '#FFFFFF' : '#333333',
    cursor: 'pointer',
  }),
  control: (base) => ({
    ...base,
    borderColor: '#d3e2e5',
    '&:hover': { borderColor: '#0C6DC7' },
    boxShadow: 'none',
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: '#FFFFFF',
  }),
};

export const SelectInput: React.FC<SelectInputProps> = ({
  name,
  options,
  value,
  onChange,
  placeholder = 'Selecione...',
  isClearable = true,
}) => {
  return (
    <Select
      className={name}
      classNamePrefix={name}
      name={name}
      options={options}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      isClearable={isClearable}
      styles={customStyles}
    />
  );
};