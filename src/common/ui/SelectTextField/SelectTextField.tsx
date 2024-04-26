import { FunctionComponent, PropsWithChildren } from 'react';
import Select, { SelectProps } from '../Select/Select';
import TextField, { TextFieldProps } from '../TextField/TextField';
import style from './SelectTextField.module.scss';

type Props = {
  selectProps: Omit<SelectProps, 'children'>;
  textFieldProps: TextFieldProps;
};

const SelectTextField: FunctionComponent<PropsWithChildren<Props>> = ({
  children,
  selectProps,
  textFieldProps,
}) => (
  <div className={style.container}>
    <Select
      {...selectProps}
      containerClassName={style.select}
    >
      {children}
    </Select>
    <TextField
      {...textFieldProps}
      containerClassName={style.textfieldContainer}
      className={style.textfield}
    />
  </div>
);

export default SelectTextField;
