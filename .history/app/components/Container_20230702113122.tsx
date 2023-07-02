interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps>  ({
    children
}) => {
    return (
        <div>CONTAINER</div>
    );
}

export default Container