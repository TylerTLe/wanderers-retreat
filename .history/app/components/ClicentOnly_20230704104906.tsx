'use client';

import { useState } from "react";

const ClientOnly = () => {
    const [hasMounted, setHasMounted ] = useState(false)
    useEffect(() => {
        sethasMOunted(true)
    }, [])

    return (  );
}
 
export default ClientOnly;