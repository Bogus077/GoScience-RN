import { Navigate, Outlet } from 'react-router-native';
import { useTypedSelector } from '../../redux';
import { isAuthorized } from '../../redux/authSlice';
import { ROUTES } from './router';

export const ProtectedRoutes = () => {
  const isUserAuthorized = useTypedSelector(isAuthorized);

  return isUserAuthorized ? <Outlet /> : <Navigate to={ROUTES.onboard} />;
};
