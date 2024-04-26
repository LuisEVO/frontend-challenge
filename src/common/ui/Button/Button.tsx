import {
  ButtonHTMLAttributes,
  ForwardRefExoticComponent,
  forwardRef,
  useState
} from 'react';
import Typography from '../Typography/Typography';
import { buttonStyles } from './Button.css';

const ButtonTypographyMap = new Map<
  string,
  {
    family: 'BRSonoma' | 'Lato';
    size: number;
    line: number;
  }
>([
  [
    'md',
    {
      family: 'BRSonoma',
      size: 20,
      line: 24,
    },
  ],
  [
    'sm',
    {
      family: 'Lato',
      size: 18,
      line: 20,
    },
  ],
]);

export type ButtonProps = {
  size?: 'md' | 'sm';
  color?: 'primary' | 'secondary';
} & ButtonHTMLAttributes<any>;

const Button: ForwardRefExoticComponent<ButtonProps> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ children, size = 'md', color = 'primary', className, ...props }, ref) => {
  const [typography] = useState(ButtonTypographyMap.get(size)!);
  return (
    <button
      {...props}
      ref={ref}
      className={[buttonStyles({ size, color }), className].join(' ')}
    >
      <Typography
        family={typography.family}
        weight='bold'
        size={typography.size}
        line={typography.line}
        color='light'
      >
        {children}
      </Typography>
    </button>
  );
});

export default Button;
