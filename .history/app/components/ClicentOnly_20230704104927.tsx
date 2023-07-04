'use client';

import { useState } from "react";

const ClientOnly = () => {
    const [hasMounted, setHasMounted ] = useState(false)
    useEffect(() => {
        setHasMounted(true)
    }, [])

    if (!hasMounted)

    return (  );
}
 
export default ClientOnly;