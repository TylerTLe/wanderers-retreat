"use client";

import useRentModel from "@/app/hooks/useRentModel";
import Model from "./Model";
import { useMemo, useState } from "react";
import Heading from "../Heading";
import { categories } from "../navbar/Categories";
import CategoryInput from "../inputs/CategoryInputs";
import { FieldValues, useForm } from "react-hook-form";
import Category from '../../../.history/app/components/inputs/CategoryInputs_20230714234600';

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

    const [step, setStep] = useState(STEPS.CATEGORY);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: {
            errors,
        },
        reset
    } = useForm<FieldValues>({
        defaultValues: {
            category
        }
    });

    const onBack = () => {
        setStep((value) => value - 1);
    }

    const onNext = () => {
        setStep((value) => value + 1);
    }

    const actionLabel = useMemo(() => {
        if (step === STEPS.PRICE) {
            return 'Create'
        }
        return 'Next';
    }, [step])

    const secondaryActionLabel = useMemo(() => {
        if (step === STEPS.CATEGORY){
        return undefined
        }
        return "Back"
    }, [step])

    let bodyContent = (
        <div className="flex flex-col gap-8">
            <Heading 
                title="Which of these best describes your place?"
                subtitle="Pick a category"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto">

                {categories.map((item) => (
                    <div key={item.label} className="col-span-1">
                        <CategoryInput 
                        onClick={() => {}}
                        selected={false}
                        label={item.label}
                        icon={item.icon}
                        />
                    </div>
                ))}
            </div>
        </div>
    )

    return ( 
        <Model
        isOpen={rentModel.isOpen}
        onClose={rentModel.onClose}
        onSubmit={rentModel.onClose}
        actionLabel={actionLabel}
        secondaryActionLabel={secondaryActionLabel}
        secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
        title="Airbnb your home!"
        body={bodyContent}
        />
     );
}
 
export default RentModel;