import { useState } from "react";

interface TextInputProps {
  value: string;
  placeholder?: string;
}

export const TextInput = ({ value, placeholder }: TextInputProps) => {
  const [input, setInput] = useState(value);
  return (
    <input
      onChange={(e) => setInput(e.target.value)}
      value={input}
      type="text"
      placeholder={placeholder}
      className="font-body border-1 w-full rounded-md p-12 focus: outline-primary-base"
    />
  );
};
