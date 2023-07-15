"use client";

import useRentModel from "@/app/hooks/useRentModel";
import Model from "./Model";

enum STEPS {
    CATEGORY = 
}

const RentModel = () => {
    const rentModel = useRentModel();

    return ( 
        <Model
        isOpen={rentModel.isOpen}
        onClose={rentModel.onClose}
        onSubmit={rentModel.onClose}
        actionLabel="submit"
        title="Airbnb your home!"
        />
     );
}
 
export default RentModel;