import { ArrowIcon } from "./arrow";

type IconName = "arrow";

interface IconProps {
  name: IconName;
  color?: string;
  width?: number;
  height?: number;
  className?: string;
  onClick?: () => void;
}

const iconComponents: Record<IconName, React.ComponentType<any>> = {
  arrow: ArrowIcon,
};

export const Icon = ({
  name,
  color,
  width,
  height,
  className,
  onClick,
}: IconProps) => {
  const IconComponent = iconComponents[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <IconComponent
      color={color}
      width={width}
      height={height}
      className={className}
      onClick={onClick}
    />
  );
};
