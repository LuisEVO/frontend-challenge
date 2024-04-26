import {
  ForwardRefExoticComponent,
  InputHTMLAttributes,
  forwardRef,
} from 'react';
import style from './TextField.module.scss';

export type TextFieldProps = {
  containerClassName?: string;
  label: string;
} & InputHTMLAttributes<any>;

const TextField: ForwardRefExoticComponent<TextFieldProps> = forwardRef<
  HTMLInputElement,
  TextFieldProps
>(({ label, containerClassName, className, ...props }, ref) => (
  <div className={[style.container, containerClassName].join(' ')}>
    <label className={style.label}>{label}</label>
    <input
      {...props}
      ref={ref}
      className={[style.input, className].join(' ')}
      placeholder=' '
    />
  </div>
));

export default TextField;
