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
        <div className="flex flex-col items-center justify-center">

        </div>
    );
}
 
export default CategoryBox;