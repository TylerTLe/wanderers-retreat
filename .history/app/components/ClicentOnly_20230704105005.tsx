'use client';

import { Children, useState } from "react";

const ClientOnly = () => {
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