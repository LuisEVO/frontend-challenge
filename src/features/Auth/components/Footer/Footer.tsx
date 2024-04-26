import { FunctionComponent } from 'react';
import Typography from '../../../../common/ui/Typography/Typography';
import styles from './Footer.module.scss';

const Footer: FunctionComponent = () => (
  <footer className={styles.container}>
    <div className={styles.content}>
      <img
        src='/images/logo-light.png'
        alt='Rimac Logo'
      />
      <hr className={styles.divider} />
      <Typography
        color='light'
        family='BRSonoma'
        weight='regular'
        size={12}
        line={16}
      >
        © 2023 RIMAC Seguros y Reaseguros.
      </Typography>
    </div>
  </footer>
);

export default Footer;
