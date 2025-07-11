type ButtonVariant = "primary" | "secondary" | "danger";
type Disabled = "disabled";

interface ButtonProps {
  variant: ButtonVariant;
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const styles: Record<ButtonVariant | Disabled, string> = {
  primary: "bg-primary-base text-white hover:bg-primary-hover",
  secondary:
    "bg-neutral-background border-1 text-secondary-base hover:text-primary-base hover:border-primary-base",
  danger: "bg-state-error text-white hover:bg-state-error-hover",
  disabled: "border-1 text-secondary-base cursor-not-allowed opacity-50",
};

export const Button = ({ variant, label, onClick, disabled }: ButtonProps) => {
  return (
    <button
      className={`w-auto font-body rounded-md px-12 py-8 ${
        styles[disabled ? "disabled" : variant]
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
