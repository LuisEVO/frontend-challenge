import { FunctionComponent, useRef } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import Card from '../../../../common/ui/Card/Card';
import Radio, { RadioProps } from '../../../../common/ui/Radio/Radio';
import Typography from '../../../../common/ui/Typography/Typography';
import styles from './TypePlanCard.module.scss';

type Props = {
  className?: string;
  icon: string;
  title: string;
  description: string;
  radioProps: RadioProps & UseFormRegisterReturn;
};

const TypePlanCard: FunctionComponent<Props> = ({
  className,
  icon,
  title,
  description,
  radioProps,
}: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <Card
      className={[styles.container, className].join(' ')}
      active={inputRef.current?.checked}
    >
      <div className={styles.radio}>
        <Radio
          {...radioProps}
          ref={(e) => {
            radioProps.ref(e);
            inputRef.current = e;
          }}
        />
      </div>
      <img
        className={styles.icon}
        src={`/icons/${icon}.png`}
        alt={title}
      />
      <Typography
        className={styles.title}
        family='Lato'
        weight='black'
        size={20}
        line={28}
      >
        {title}
      </Typography>
      <Typography
        className={styles.description}
        family='Lato'
        weight='regular'
        size={12}
        line={20}
      >
        {description}
      </Typography>
    </Card>
  );
};

export default TypePlanCard;
