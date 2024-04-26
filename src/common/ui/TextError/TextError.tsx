import { FunctionComponent } from 'react';
import { FieldError } from 'react-hook-form';
import Typography from '../Typography/Typography';

type Props = {
  field: FieldError | undefined;
};

const TextError: FunctionComponent<Props> = ({ field }) => (
  <>
    {field && (
      <Typography
        family='BRSonoma'
        weight='regular'
        size={12}
        line={16}
        color='error'
      >
        {field.message}
      </Typography>
    )}
  </>
);

export default TextError;
