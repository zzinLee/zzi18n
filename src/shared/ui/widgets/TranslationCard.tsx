import { useState } from "react";
import { Icon } from "../components/icon";

interface TranslationCardProps {
  title: string;
  languages: string[];
}

export const TranslationCard = ({ title, languages }: TranslationCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`flex flex-col bg-background rounded-md border-1 cursor-pointer overflow-hidden ${
        isOpen ? "border-primary-base" : "hover:border-secondary-base"
      }`}
    >
      <div
        className="flex items-center gap-12 p-12 min-w-0 flex-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon
          width={14}
          height={14}
          name="arrow"
          className={`transition-transform duration-300 flex-shrink-0 ${
            isOpen ? "rotate-90 text-primary-base" : ""
          }`}
        />
        <div
          className={`font-semibold truncate min-w-0 flex-1 overflow-hidden ${
            isOpen ? "text-primary-base" : ""
          }`}
        >
          {title}
        </div>
      </div>
      {isOpen && <div className="border-t-1 p-12 pl-38"></div>}
    </div>
  );
};
