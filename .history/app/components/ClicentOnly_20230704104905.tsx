'use client';

import { useState } from "react";

const ClientOnly = () => {
    const [hasMounted, setHasMunted ] = useState(false)
    useEffect(() => {
        sethasMOunted(true)
    }, [])

    return (  );
}
 
export default ClientOnly;