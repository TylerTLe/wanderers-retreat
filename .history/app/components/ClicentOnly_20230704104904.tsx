'use client';

import { useState } from "react";

const ClientOnly = () => {
    const [hasMounted, setHasMOunted ] = useState(false)
    useEffect(() => {
        sethasMOunted(true)
    }, [])

    return (  );
}
 
export default ClientOnly;