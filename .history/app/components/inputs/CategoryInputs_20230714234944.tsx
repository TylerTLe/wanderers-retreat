"use client";

import { IconType } from "react-icons";

interface CategoryInputProps {
    icon: IconType
    label: string;
    selected?: boolean;
    onClick: (value: string) => void;
}

const CategoryInput: React.FC<CategoryInputProps> = ({
    icon: Icon,
    label,
    selected,
    onClick
}) => {
    return ( 
        <div onClick={() => onClick(label)} className={`rounded-xl border-2 p-4 flex flex-col gap-3 hover:boredr-black transition cursor-pointer ${}`}>
            
        </div>
     );
}
 
export default CategoryInput;