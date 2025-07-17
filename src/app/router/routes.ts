export const ROUTES = {
  HOME: "/",
  SETTINGS: "/settings",
} as const;

export const ROUTE_NAMES = {
  "/": "Home",
  "/settings": "Settings",
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RoutePath = (typeof ROUTES)[RouteKey];
export type RouteName = (typeof ROUTE_NAMES)[RoutePath];
