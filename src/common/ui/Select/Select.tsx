import {
  ForwardRefExoticComponent,
  SelectHTMLAttributes,
  forwardRef
} from 'react';
import style from './Select.module.scss';

export type SelectProps = {
  containerClassName?: string;
} & SelectHTMLAttributes<any>;

const Select: ForwardRefExoticComponent<SelectProps> = forwardRef<
  HTMLSelectElement,
  SelectProps
>(({ children, containerClassName, ...props }, ref) => (
  <div className={[style.container, containerClassName].join(' ')}>
    <select
      {...props}
      ref={ref}
      className={style.select}
    >
      {children}
    </select>
  </div>
));

export default Select;
