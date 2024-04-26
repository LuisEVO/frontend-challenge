import { FunctionComponent, PropsWithChildren } from 'react';
import { typographyStyles } from './Typography.css';

type Props = {
  tag?: keyof JSX.IntrinsicElements;
  className?: string;
  family: 'BRSonoma' | 'Lato';
  weight: 'regular' | 'semibold' | 'bold' | 'black';
  size: number;
  line: number;
  color?:
    | 'dark'
    | 'light'
    | 'error'
    | 'gray'
    | 'gray-light'
    | 'gray-neutral'
    | 'purple'
    | 'purple-dark';
};

const Typography: FunctionComponent<PropsWithChildren<Props>> = ({
  children,
  className,
  tag: Wrapper = 'p',
  family = 'BRSonoma',
  weight = 'regular',
  size = 14,
  line = 16,
  color = 'dark',
}) => {
  return (
    <Wrapper
      style={{
        fontSize: `${size}px`,
        lineHeight: `${line}px`,
        color: `var(--color-${color})`,
      }}
      className={[
        typographyStyles({
          family,
          weight,
        }),
        className,
      ].join(' ')}
    >
      {children}
    </Wrapper>
  );
};

export default Typography;
