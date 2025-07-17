import { MemoryRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "@/app/pages/HomePage";
import { SettingsPage } from "@/app/pages/SettingsPage";
import { ROUTES } from "@/app/router/routes";

export const App = () => {
  return (
    <MemoryRouter initialEntries={[ROUTES.HOME]} initialIndex={0}>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.SETTINGS} element={<SettingsPage />} />
      </Routes>
    </MemoryRouter>
  );
};
