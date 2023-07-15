import useRentModel from "@/app/hooks/useRentModel";
import Model from "./Model";

const RentModel = () => {
    const RentModel = useRentModel();
    return ( 
        <Model
        isOpen={rentModel}
        title="Airbnb your home!"
        />
     );
}
 
export default RentModel;