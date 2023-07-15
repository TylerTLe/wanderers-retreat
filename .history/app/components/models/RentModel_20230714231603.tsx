import useRentModel from "@/app/hooks/useRentModel";
import Model from "./Model";

const RentModel = () => {
    const rentModel = useRentModel();

    return ( 
        <Model
        isOpen={rentModel.isOpen}
        onClose={rentModel.onClose}
        onSubmit={}
        title="Airbnb your home!"
        />
     );
}
 
export default RentModel;