"use client";

import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModel from "@/app/hooks/useRegisterModel";
import Model from './Model'

const RegisterModel = () => {
  const registerModel = useRegisterModel();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, }
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios.post("/api/register", data);
      .then(() => {
        registerModel.onClose();
      })
      .catch((error) => {
        console.log(error);    
      })
      .finally(() => {
        setIsLoading(false);
      })
  };
  return (
    <Model 
    disabled={isLoading}
    isOpen={RegisterModel}
    />
  )
};

export default RegisterModel;
