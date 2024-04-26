import { Suspense, lazy } from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import Login from '../features/Auth/pages/Login/Login';
import MainLayout from './Layout/MainLayout';
import StateGuard from './guards/StateGuard';
import { RootState } from './store/store';

const getUserState = (state: RootState) => state.login.user;
const getPlanSelectedState = (state: RootState) => state.plans.planSelected;

const Plans = lazy(() => import('../features/Plans/pages/Plans'));
const Summary = lazy(() => import('../features/Summary/pages/Summary'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Login />,
      },
      {
        path: '/plans',
        element: (
          <StateGuard
            selectorFn={getUserState}
            redirectTo='/'
          >
            <Suspense>
              <Plans />
            </Suspense>
          </StateGuard>
        ),
      },
      {
        path: '/summary',
        element: (
          <StateGuard
            selectorFn={getPlanSelectedState}
            redirectTo='/plans'
          >
            <Suspense>
              <Summary />
            </Suspense>
          </StateGuard>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to={'/'} />,
  },
]);

export default router;
