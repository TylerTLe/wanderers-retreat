"use client";

import useRentModel from "@/app/hooks/useRentModel";
import Model from "./Model";

enum STEPS {
    CATEGORY = 0,
    LOCATION = 1,
    INFO = 2,
    IMAGES = 3,
    DESCRIPTION = 4,
    PRICE = 5
}

const RentModel = () => {
    const rentModel = useRentModel();

    const [st]
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