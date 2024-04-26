import { FunctionComponent, useRef } from 'react';
import Badge from '../../../../common/ui/Badge/Badge';
import Button from '../../../../common/ui/Button/Button';
import Card from '../../../../common/ui/Card/Card';
import Typography from '../../../../common/ui/Typography/Typography';
import { Plan } from '../../types/plan';
import styles from './PlanCard.module.scss';

type Props = {
  className?: string;
  plan: Plan;
  onSelect: (plan: Plan) => void; 
};

const PlanCard: FunctionComponent<Props> = ({ className, plan, onSelect }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    name,
    price,
    description,
    recommended,
    offerPrice,
    icon,
  } = plan;

  return (
    <Card
      className={[styles.container, className].join(' ')}
      active={inputRef?.current?.checked}
    >
      <div className={styles.header}>
        {recommended && (
          <Badge
            size='sm'
            className={styles.badge}
          >
            Plan recomendado
          </Badge>
        )}
        <div className={styles.title}>
          <Typography
            family='Lato'
            weight='black'
            size={24}
            line={32}
          >
            {name}
          </Typography>
          <img
            className={styles.icon}
            src={`/icons/${icon}.png`}
            alt={name}
          />
        </div>

        <Typography
          family='Lato'
          weight='black'
          size={12}
          line={16}
          color='gray-neutral'
        >
          COSTO DEL PLAN
        </Typography>
        {offerPrice && (
          <Typography
            className={styles.originalPrice}
            family='Lato'
            weight='regular'
            size={14}
            line={20}
            color='gray-neutral'
          >
            ${price} antes
          </Typography>
        )}
        <Typography
          family='Lato'
          weight='black'
          size={20}
          line={28}
        >
          ${offerPrice ? offerPrice : price} al mes
        </Typography>

        <hr className={styles.divider} />
      </div>

      <ul className={styles.body}>
        {description.map((text, index) => (
          <Typography
            key={index}
            tag='li'
            family='Lato'
            weight='regular'
            size={16}
            line={28}
          >
            {text}
          </Typography>
        ))}
      </ul>

      <Button
        onClick={() => onSelect(plan)}
        className={styles.action}
        size='sm'
        color='secondary'
      >
        Seleccionar Plan
      </Button>
    </Card>
  );
};

export default PlanCard;
