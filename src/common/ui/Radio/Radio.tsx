import {
  ForwardRefExoticComponent,
  InputHTMLAttributes,
  forwardRef,
} from 'react';
import style from './Radio.module.scss';

export type RadioProps = InputHTMLAttributes<any>;

const Radio: ForwardRefExoticComponent<
  RadioProps & React.RefAttributes<HTMLInputElement>
> = forwardRef<HTMLInputElement, RadioProps>(({ className, ...props }, ref) => (
  <label className={style.container}>
    <input
      {...props}
      type='radio'
      ref={ref}
      className={style.input}
    />
    <span className={style.checkmark}></span>
  </label>
));

export default Radio;
