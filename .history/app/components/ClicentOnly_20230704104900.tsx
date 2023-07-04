'use client';

import { useState } from "react";

const ClientOnly = () => {
    const [hasMounted, sethasMOunted ] = useState(false)
    useEffect(() => {
        sethasMOunted(true)
    }, [])

    return (  );
}
 
export default ClientOnly;