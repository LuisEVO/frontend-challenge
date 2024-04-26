import { FunctionComponent, PropsWithChildren } from 'react';
import styles from './InternalLayout.module.scss';
import Link from '../../../common/ui/Link/Link';

type Props = {
  backPath: string;
};

const InternalLayout: FunctionComponent<PropsWithChildren<Props>> = ({
  children,
  backPath,
}) => {
  return (
    <div className={styles.layout}>
      <div className={styles.navbar}>
        <Link
          to={backPath}
          iconLeft={
            <img
              src='/icons/ArrowLeftLight.png'
              alt='Volver'
            />
          }
        ></Link>
      </div>
      <div className={styles.link}>
        <Link
          to={backPath}
          iconLeft={
            <img
              src='/icons/ArrowLeft.png'
              alt='Volver'
            />
          }
        >
          Volver
        </Link>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default InternalLayout;
