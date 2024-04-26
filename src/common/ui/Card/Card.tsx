import { FunctionComponent, PropsWithChildren } from 'react';
import { cardStyles } from './Card.css';

type Props = {
  className?: string;
  active?: boolean;
};

const Card: FunctionComponent<PropsWithChildren<Props>> = ({
  children,
  className,
  active,
}) => (
  <div className={[cardStyles({ active }), className].join(' ')}>
    {children}
  </div>
);

export default Card;
