interface ButtonProps {
    label: String;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    icon?: IconTy;
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    disabled,
    outline,
    small,
    icon
}) => {
    return (  
        <button></button>
    );
}
 
export default Button;