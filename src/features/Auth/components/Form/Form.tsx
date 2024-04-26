import { yupResolver } from '@hookform/resolvers/yup';
import { FunctionComponent } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../../../../common/ui/Button/Button';
import Checkbox from '../../../../common/ui/Checkbox/Checkbox';
import SelectTextField from '../../../../common/ui/SelectTextField/SelectTextField';
import TextError from '../../../../common/ui/TextError/TextError';
import TextField from '../../../../common/ui/TextField/TextField';
import Typography from '../../../../common/ui/Typography/Typography';
import { FormInputs } from '../../types/form-inputs.type';
import styles from './Form.module.scss';
import { FormSchema } from './Form.schema';

type Props = {
  className: string;
  onSubmit: SubmitHandler<FormInputs>;
};

const Form: FunctionComponent<Props> = ({ className, onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(FormSchema),
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={[styles.form, className].join(' ')}
    >
      <Typography
        tag='h2'
        family='BRSonoma'
        weight='bold'
        size={14}
        line={20}
      >
        Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
        asesoría. 100% online.
      </Typography>
      <div>
        <SelectTextField
          selectProps={{ ...register('documentType') }}
          textFieldProps={{
            label: 'Nro. de documento',
            ...register('documentNumber'),
          }}
        >
          <option value='DNI'>DNI</option>
          <option value='RUC'>RUC</option>
        </SelectTextField>
        <TextError field={errors.documentType || errors.documentNumber} />
      </div>

      <div>
        <TextField
          label='Celular'
          {...register('phone')}
        />
        <TextError field={errors.phone} />
      </div>

      <div>
        <Checkbox
          label='Acepto lo Política de Privacidad'
          {...register('privacyTerms')}
        />
        <TextError field={errors.privacyTerms} />
      </div>

      <div>
        <Checkbox
          label='Acepto la Política Comunicaciones Comerciales'
          {...register('communicationTerms')}
        />
        <TextError field={errors.communicationTerms} />
      </div>

      <Button type='submit'>Cotiza aquí</Button>
    </form>
  );
};

export default Form;
