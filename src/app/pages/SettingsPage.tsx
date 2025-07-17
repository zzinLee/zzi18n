import { Button } from "@/shared/ui/components/Button";
import { Header } from "@/app/components/Header";
import { useRoute, useSafeNavigate } from "@/app/router/hooks";

export const SettingsPage = () => {
  const { goBack, goBackHome } = useSafeNavigate();

  return (
    <>
      <Header />
      <div className="p-12 space-y-12">
        <div></div>
        <div></div>
      </div>
    </>
  );
};
