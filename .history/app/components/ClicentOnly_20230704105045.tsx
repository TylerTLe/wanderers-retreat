'use client';

import { Children, useState } from "react";

interface ClientOnlyProps {
    children:
}

const ClientOnly = ({
    children
}) => {
    const [hasMounted, setHasMounted ] = useState(false)
    useEffect(() => {
        setHasMounted(true)
    }, [])

    if (!hasMounted) {
        return null;
    }

    return (  
        <>
            {children}
        </>
    );
}
 
export default ClientOnly;