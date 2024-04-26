import { FunctionComponent } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../core/store/hooks';
import Footer from '../../components/Footer/Footer';
import Form from '../../components/Form/Form';
import UsersHttp from '../../http/users-http';
import { loginActions } from '../../store/login-slice';
import { FormInputs } from '../../types/form-inputs.type';
import styles from './Login.module.scss';
import Typography from '../../../../common/ui/Typography/Typography';
import Badge from '../../../../common/ui/Badge/Badge';

const Login: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    dispatch(loginActions.setFormInputs(data));
    UsersHttp.getOne().then((res) => {
      dispatch(loginActions.setUser(res));
      navigate('/plans');
    });
  };

  return (
    <section className={styles.layout}>
      <main className={styles.layout__main}>
        <img
          className={styles.cover}
          src='/images/flexible-health-insurance.png'
          alt='Imagen Seguro Salud Flexible'
        />

        <div className={styles.title}>
          <Badge>Seguro Salud Flexible</Badge>
          <Typography
            tag='h1'
            family='BRSonoma'
            weight='bold'
            size={32}
            line={40}
          >
            Creado para ti y tu familia
          </Typography>
        </div>

        <hr className={styles.divider} />

        <Form
          className={styles.form}
          onSubmit={onSubmit}
        />
      </main>
      <Footer />
    </section>
  );
};

export default Login;
