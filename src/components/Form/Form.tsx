import React from "react";
import {useForm, SubmitHandler} from "react-hook-form";
import {useTariff} from "../Pricing/TariffContext";

type Inputs = {
    tariff: string
    exampleRequired: string
};

const Form: React.FC = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm<Inputs>();
    const {selectedTariffId} = useTariff();
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
    console.log(watch("tariff"));

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input {...register("tariff", {required: true})} value={selectedTariffId ?? ""}/>

            {/* include validation with required or other standard HTML validation rules */}
            <input {...register("exampleRequired", {required: true})} />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit"/>
        </form>
    )
}

export default Form;