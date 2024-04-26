import {
  ForwardRefExoticComponent,
  InputHTMLAttributes,
  forwardRef,
} from 'react';
import style from './Checkbox.module.scss';
import Typography from '../Typography/Typography';

export type CheckboxProps = {
  label: string;
} & InputHTMLAttributes<any>;

const Checkbox: ForwardRefExoticComponent<CheckboxProps> = forwardRef<
  HTMLInputElement,
  CheckboxProps
>(({ label, className, ...props }, ref) => (
  <Typography tag='label' className={style.container} family='BRSonoma' weight='regular' size={12} line={20}>
    {label}
    <input
      {...props}
      type='checkbox'
      ref={ref}
      className={style.input}
    />
    <span className={style.checkmark}></span>
  </Typography>
));

export default Checkbox;
