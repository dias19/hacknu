import { useAppSelector } from '~/store/store';

export const useAuth = () => {
  const { isLoggedIn, user } = useAppSelector((state) => state.adminAuthSlice);

  return { isLoggedIn, user };
};
