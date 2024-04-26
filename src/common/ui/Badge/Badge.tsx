import {
  FunctionComponent,
  PropsWithChildren,
  useState
} from 'react';
import Typography from '../Typography/Typography';
import { badgeStyles } from './Badge.css';

const BadgeTypographyMap = new Map<
  string,
  {
    family: 'BRSonoma' | 'Lato';
    size: number;
  }
>([
  [
    'md',
    {
      family: 'BRSonoma',
      size: 14,
    },
  ],
  [
    'sm',
    {
      family: 'Lato',
      size: 12,
    },
  ],
]);

type Props = {
  className?: string;
  color?: 'primary';
  size?: 'md' | 'sm';
};

const Badge: FunctionComponent<PropsWithChildren<Props>> = ({
  children,
  className,
  color = 'primary',
  size = 'md',
}) => {
  const [typography] = useState(BadgeTypographyMap.get(size)!);

  return (
    <Typography
      tag='div'
      family={typography.family}
      weight='bold'
      size={typography.size}
      line={16}
      className={[badgeStyles({ color }), className].join(' ')}
    >
      {children}
    </Typography>
  );
};

export default Badge;
