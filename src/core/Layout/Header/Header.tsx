import { FunctionComponent } from 'react';
import Typography from '../../../common/ui/Typography/Typography';
import styles from './Header.module.scss';

const Header: FunctionComponent = () => (
  <header className={styles.header}>
    <img
      className={styles.header__logo}
      src='/images/logo.png'
      alt='Rimac Logo'
    />
    <div className={styles.header__right}>
      <Typography
        className={styles.header__alert}
        family='BRSonoma'
        weight='semibold'
        size={12}
        line={16}
      >
        ¡Compra por este medio!
      </Typography>

      <Typography
        className={styles.header__number}
        family='BRSonoma'
        weight='bold'
        size={18}
        line={20}
      >
        <img
          src='/images/phone.png'
          alt='Rimac Logo'
        />
        <span>(01) 411 6001</span>
      </Typography>
    </div>
  </header>
);

export default Header;
