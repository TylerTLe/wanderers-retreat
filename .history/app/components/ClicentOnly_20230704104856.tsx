'use client';

import { useState } from "react";

const ClientOnly = () => {
    const [hasMounted, sethasMOunted ] = useState(false)
    useEffect(() => {
        sethasMOunted
    }, [])

    return (  );
}
 
export default ClientOnly;