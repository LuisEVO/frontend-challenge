import { FunctionComponent } from 'react';
import styles from './Summary.module.scss';
import Typography from '../../../common/ui/Typography/Typography';
import Card from '../../../common/ui/Card/Card';
import { useAppSelector } from '../../../core/store/hooks';
import InternalLayout from '../../../core/Layout/InternalLayout/InternalLayout';

const Summary: FunctionComponent = () => {
  const user = useAppSelector((state) => state.login.user!);
  const form = useAppSelector((state) => state.login.form!);
  const planSelected = useAppSelector((state) => state.plans.planSelected!);

  return (
    <InternalLayout backPath='/plans'>
      <div className={styles.layout}>
        <Typography
          tag='h1'
          family='Lato'
          weight='bold'
          size={40}
          line={48}
        >
          Resumen del seguro
        </Typography>
        <Card>
          <Typography
            family='Lato'
            weight='black'
            size={10}
            line={16}
          >
            PRECIOS CALCULADOS PARA:
          </Typography>
          <div className={styles.user}>
            <img
              className={styles.icon}
              src={`/icons/Family.png`}
              alt='Usuario'
            />
            <Typography
              family='Lato'
              weight='bold'
              size={20}
              line={28}
            >
              {user.name} {user.lastName}
            </Typography>
          </div>
          <hr className={styles.divider} />
          <div className={styles.information}>
            <div>
              <Typography
                family='Lato'
                weight='bold'
                size={16}
                line={24}
              >
                Responsable de pago
              </Typography>
              <Typography
                family='Lato'
                weight='regular'
                size={14}
                line={24}
              >
                {form.documentType}: {form.documentNumber}
              </Typography>
              <Typography
                family='Lato'
                weight='regular'
                size={14}
                line={24}
              >
                Celular: {form.phone}
              </Typography>
            </div>
            <div>
              <Typography
                family='Lato'
                weight='bold'
                size={16}
                line={24}
              >
                Plan elegido
              </Typography>
              <Typography
                family='Lato'
                weight='regular'
                size={14}
                line={24}
              >
                {planSelected.name}
              </Typography>
              <Typography
                family='Lato'
                weight='regular'
                size={14}
                line={24}
              >
                Costo del Plan: $
                {planSelected.offerPrice
                  ? planSelected.offerPrice
                  : planSelected.price}{' '}
                al mes
              </Typography>
            </div>
          </div>
        </Card>
      </div>
    </InternalLayout>
  );
};

export default Summary;
