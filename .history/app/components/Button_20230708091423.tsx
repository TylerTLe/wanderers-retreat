interface ButtonProps {
    label: String;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    icon?: IconType;
}

const Button: = () => {
    return (  
        <button></button>
    );
}
 
export default Button;