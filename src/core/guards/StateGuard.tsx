import { FunctionComponent, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';
import { RootState } from '../store/store';

type Props = {
  selectorFn: (state: RootState) => any;
  redirectTo: string;
};

const StateGuard: FunctionComponent<PropsWithChildren<Props>> = ({
  children,
  selectorFn,
  redirectTo,
}) => {
  const state = useAppSelector(selectorFn);

  if (!state) {
    return <Navigate to={redirectTo} />;
  }

  return <>{children}</>;
};

export default StateGuard;
