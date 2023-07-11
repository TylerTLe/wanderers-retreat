"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useState, useCallback } from "react";
import MenuItem from "./MenuItem";

import useRegisterModel from "@/app/hooks/useRegisterModel";
import useLoginModel from "@/app/hooks/useLoginModel";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";

interface UserMenuProps {
  currentUser?: SafeUser | null
}

const UserMenu: React.FC<UserMenuProps> = ({
  currentUser
}) => {
  const registerModel = useRegisterModel();
  const loginModel = useLoginModel();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  return (
    <div className=" relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser.}/>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className=" absolute rounded-xl shadow-md w-[40vw] md:w-3/4 overflow-hidden right-0 top-12 text-sm ">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
            <>
            <MenuItem 
            onClick={() => {}} 
            label="My trips" 
            />
            <MenuItem 
            onClick={() => {}} 
            label="My favorites"
            />
            <MenuItem 
            onClick={() => {}} 
            label="My reservations"
            />
            <MenuItem 
            onClick={() => {}} 
            label="My properties"
            />
            <MenuItem 
            onClick={() => {}} 
            label="Airbnb my home"
            />
            <hr />
            <MenuItem 
            onClick={() => signOut()} 
            label="Logout"
            />
          </>
            ) : (
            <>
              <MenuItem 
              onClick={loginModel.onOpen} 
              label="Login" 
              />
              <MenuItem 
              onClick={registerModel.onOpen} 
              label="Sign up"
              />
            </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;