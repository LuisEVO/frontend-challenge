import {
  AnchorHTMLAttributes,
  ForwardRefExoticComponent,
  ReactNode,
  forwardRef,
} from 'react';
import Typography from '../Typography/Typography';
import { linkStyles } from './Link.css';
import { Link as RouterLink } from 'react-router-dom';

export type LinkProps = {
  iconLeft?: ReactNode;
  to: string;
} & AnchorHTMLAttributes<any>;

const Link: ForwardRefExoticComponent<LinkProps> = forwardRef<
  HTMLAnchorElement,
  LinkProps
>(({ children, to, className, iconLeft, ...props }, ref) => {
  return (
    <RouterLink
      {...props}
      to={to}
      ref={ref}
      className={[linkStyles(), className].join(' ')}
    >
      {iconLeft}
      <Typography
        family='Lato'
        weight='bold'
        size={18}
        line={20}
        color='purple-dark'
      >
        {children}
      </Typography>
    </RouterLink>
  );
});

export default Link;
