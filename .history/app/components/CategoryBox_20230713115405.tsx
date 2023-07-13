import { IconType } from "react-icons"

interface CategoryBoxProps {
    icon: IconType;
    label: string;
    selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
    icon,
    label,
}) => {
    return (
        <div className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer ${selected}`}>

        </div>
    );
}
 
export default CategoryBox;