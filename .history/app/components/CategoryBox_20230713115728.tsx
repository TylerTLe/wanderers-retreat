import { IconType } from "react-icons"

interface CategoryBoxProps {
    icon: IconType;
    label: string;
    selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
    icon,
    label,
    selected
}) => {
    return (
        <div 
            className={`
            flex 
            flex-col 
            items-center 
            justify-center 
            gap-2 
            p-3 
            border-b-2 
            hover:text-neutral-800 
            transition 
            cursor-pointer 
            ${selected ? 'border-b-neutral-800' : 'border-transparent'}
            ${selected ? 'text-neutral-800' : 'text-neu'} 
        `}
        >

        </div>
    );
}
 
export default CategoryBox;