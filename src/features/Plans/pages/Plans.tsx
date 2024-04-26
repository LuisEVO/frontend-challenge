import { FunctionComponent, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Typography from '../../../common/ui/Typography/Typography';
import { useAppDispatch, useAppSelector } from '../../../core/store/hooks';
import PlanCard from '../components/PlanCard/PlanCard';
import TypePlanCard from '../components/TypePlanCard/TypePlanCard';
import { plansActions } from '../store/plans-slice';
import { FormInputs } from '../types/form-inputs.type';
import { Plan } from '../types/plan';
import styles from './Plans.module.scss';
import InternalLayout from '../../../core/Layout/InternalLayout/InternalLayout';

const TYPES = [
  {
    icon: 'ProtectionLight',
    title: 'Para mi',
    description:
      'Cotiza tu seguro de salud y agrega familiares si así lo deseas.',
    value: 'forMe',
  },
  {
    icon: 'AddUserLight',
    title: 'Para alguien más',
    description:
      'Realiza una cotización para uno de tus familiares o cualquier persona.',
    value: 'forAnyone',
  },
];

const Plans: FunctionComponent = () => {
  const { isLoaded, plansFiltered, typePlan } = useAppSelector(
    (state) => state.plans
  );
  const { user } = useAppSelector((state) => state.login);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { register, watch } = useForm<FormInputs>({
    defaultValues: { type: typePlan },
  });
  const type = watch('type');

  const selectPlan = (plan: Plan) => {
    dispatch(plansActions.setPlanSelected(plan));
    dispatch(plansActions.setTypePlan(type));
    navigate('/summary');
  };

  useEffect(() => {
    if (!type || isLoaded) return;
    dispatch(plansActions.getAllPlans());
  }, [type, isLoaded, dispatch]);

  useEffect(() => {
    if (!isLoaded) return;
    dispatch(
      plansActions.setPlansToShow({
        userAge: user!.age,
        addDiscount: type === 'forAnyone',
      })
    );
  }, [type, user, isLoaded, dispatch]);

  return (
    <InternalLayout backPath='/'>
      <div className={styles.layout}>
        <div className={styles.titles}>
          <Typography
            tag='h1'
            family='Lato'
            weight='bold'
            size={40}
            line={48}
          >
            {user!.name} ¿Para quién deseas cotizar?
          </Typography>
          <Typography
            family='Lato'
            weight='regular'
            size={16}
            line={28}
          >
            Selecciona la opción que se ajuste más a tus necesidades.
          </Typography>
        </div>

        <div className={styles.typePlans}>
          {TYPES.map((type) => (
            <TypePlanCard
              key={type.value}
              icon={type.icon}
              title={type.title}
              description={type.description}
              radioProps={{
                value: type.value,
                ...register('type'),
              }}
            />
          ))}
        </div>

        <div className={styles.plans}>
          {plansFiltered.map((plan) => (
            <PlanCard
              key={plan.slug}
              plan={plan}
              onSelect={selectPlan}
            />
          ))}
        </div>
      </div>
    </InternalLayout>
  );
};

export default Plans;
