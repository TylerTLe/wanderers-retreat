"use client";

import { format } from "path";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface InputProps {
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    formartPrice?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors
}

const Input: React.FC<InputProps> = ({
    id,
    label,
    type = "text",
    disabled,
    formartPrice,
    required,
    register,
    errors
}) => {
  return (
  <div className="w-full relative">
    {formartPrice && (
        <BiDollar
    )}
  </div>
  );
}

export default Input;
