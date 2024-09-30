import React, {useEffect} from "react";
import {useForm, SubmitHandler} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "./Input";
import {useTariff} from "../../context/TariffContext";
import {IFormValues} from "../../types/formTypes";

const phoneSchema = yup.object().shape({
    surname: yup.string().required("Surname is required"),
    firstName: yup.string().required("First name is required"),
    patronymic: yup.string().required("Patronymic is required"),
    phoneNumber: yup
        .string()
        .required("Phone number is required")
        .matches(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, "Invalid phone number format"),
    email: yup.string().required("Email is required").email("Invalid email address"),
    tariff: yup.string().required("Tariff is required"),
});

const Form: React.FC = () => {
    const {register, handleSubmit, setValue, formState: {errors}} = useForm<IFormValues>({
        resolver: yupResolver(phoneSchema),
    });

    // Используем контекст для получения выбранного тарифа
    const {selectedTariffId} = useTariff();

    // Используем useEffect для обновления значения поля tariff
    useEffect(() => {
        if (selectedTariffId) {
            // Устанавливаем значение в tariff
            setValue("tariff", selectedTariffId);
        }
    }, [selectedTariffId, setValue]); // Зависимость от selectedTariffId

    const onSubmit: SubmitHandler<IFormValues> = (data) => {
        alert(JSON.stringify(data));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                label="surname"
                register={register}
                required={true}
                errorMessage={errors.surname ? errors.surname.message : ""}
            />
            <Input
                label="firstName"
                register={register}
                required={true}
                errorMessage={errors.firstName ? errors.firstName.message : ""}
            />
            <Input
                label="patronymic"
                register={register}
                required={true}
                errorMessage={errors.patronymic ? errors.patronymic.message : ""}
            />
            <Input
                label="phoneNumber"
                register={register}
                required={true}
                errorMessage={errors.phoneNumber ? errors.phoneNumber.message : ""}
                mask="+7 (999) 999-99-99"
            />
            <Input
                label="email"
                register={register}
                required={true}
                errorMessage={errors.email ? errors.email.message : ""}
            />

            <Input
                label="tariff"
                register={register}
                required={true}
                errorMessage={errors.tariff ? errors.tariff.message : ""}
                // Передаем выбранный тариф в качестве строки
                value={selectedTariffId || ""}
                type="hidden"
            />

            <input type="submit"/>
        </form>
    );
};

export default Form;
