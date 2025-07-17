import { Icon } from "@/shared/ui/components/icon";
import { useSafeNavigate, useRoute } from "@/app/router/hooks";

export const Header = () => {
  const { currentPathName } = useRoute();
  const { goBack } = useSafeNavigate();

  return (
    <div className="bg-neutral-background border-b-1 border-neutral-border px-4 py-8">
      <Icon
        name="arrow"
        className="text-black rotate-180 w-24 h-24 p-4 cursor-pointer hover:text-primary-base absolute left-4"
        onClick={goBack}
      />
      <p className="text-center text-md font-bold">{currentPathName}</p>
    </div>
  );
};
