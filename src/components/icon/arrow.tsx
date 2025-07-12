interface ArrowIconProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
  onClick?: () => void;
}

export const ArrowIcon = ({
  width = 13,
  height = 20,
  color = "currentColor",
  className,
  onClick,
}: ArrowIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 7 12"
      fill={color}
      className={className}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.310017 0.710007C-0.0799829 1.10001 -0.0799829 1.73001 0.310017 2.12001L4.19002 6.00001L0.310017 9.88001C-0.0799829 10.27 -0.0799829 10.9 0.310017 11.29C0.700017 11.68 1.33002 11.68 1.72002 11.29L6.31002 6.70001C6.70002 6.31001 6.70002 5.68001 6.31002 5.29001L1.72002 0.700007C1.34002 0.320007 0.700017 0.320007 0.310017 0.710007Z"
        fill="currentColor"
      />
    </svg>
  );
};
