import { useNavigate, useLocation } from "react-router-dom";
import { ROUTES, ROUTE_NAMES, type RoutePath, type RouteName } from "./routes";

export const useSafeNavigate = () => {
  const navigate = useNavigate();

  return {
    // 특정 경로로 이동
    navigateTo: (path: RoutePath) => {
      navigate(path);
    },

    // 뒤로가기 기능들
    goBack: () => {
      navigate(-1);
    },

    goBackTo: (path: RoutePath) => {
      navigate(path);
    },

    goBackHome: () => {
      navigate(ROUTES.HOME);
    },
  };
};

export const useRoute = () => {
  const location = useLocation();

  const getCurrentRoute = (): RoutePath => {
    return location.pathname as RoutePath;
  };

  const getCurrentRouteName = (): RouteName => {
    return ROUTE_NAMES[location.pathname as RoutePath];
  };

  const isCurrentRoute = (path: RoutePath): boolean => {
    return location.pathname === path;
  };

  return {
    currentPath: getCurrentRoute(),
    currentPathName: getCurrentRouteName(),
    isCurrentRoute,
  };
};

export const routeHelpers = {
  goHome: () => ROUTES.HOME,
  goSettings: () => ROUTES.SETTINGS,
};
