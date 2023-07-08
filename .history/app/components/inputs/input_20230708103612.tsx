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
        size={24}
        className="text-neutral-700 absolute top-5 left-2"
        />
    )}
    <input 
    id={id}
    disabled={disabled}
    {...register(id, {required})}
    placeholder=" "
    type={type}
    className={`
    peer
    w-full
    p-4
    pt-6
    font-light
    bg-white
    border-2
    rounded-md
    outline-none
    transition
    disabled:opacity-70
    disabled:cursor-not-allowed
    ${formartPrice ? 'pl-9' : 'pl-4'}
    ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}
    ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black'}
    `}
    />
    <label className="absolute
    text-md
    duration-150
    transform
    -translate-y-3
    top-5
    z-10
    ori
    ">
        {label}
    </label>
  </div>
  );
}

export default Input;
