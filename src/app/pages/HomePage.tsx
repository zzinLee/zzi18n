import { Button } from "@/shared/ui/components/Button";
import { useSafeNavigate } from "@/app/router/hooks";
import { ROUTES } from "@/app/router/routes";

export const HomePage = () => {
  const { navigateTo } = useSafeNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="p-12 space-y-12">
        <h1 className="text-xl font-bold text-center">Welcome!</h1>
        <p className="text-center">Let's start with zzi18n.</p>
        <div className="flex justify-center">
          <Button
            variant="primary"
            label="Get Started"
            onClick={() => {
              navigateTo(ROUTES.SETTINGS);
            }}
          />
        </div>
      </div>
    </div>
  );
};
