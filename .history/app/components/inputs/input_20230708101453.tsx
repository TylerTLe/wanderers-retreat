"use client";

import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    formartPrice?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>
}

const Input = () => {
  return (
  <div>

  </div>
  );
}

export default Input;