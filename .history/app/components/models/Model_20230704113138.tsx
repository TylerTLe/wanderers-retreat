interface ModelProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    disabled?: boolean;
    secondaryAction?: () => void;
    secondaryLabel?: string;
}

const Model: React.FC<ModelProps> ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabelm
    
}) => {
  return <div></div>;
};

export default Model;
