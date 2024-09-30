import React from "react";
import InputMask from 'react-input-mask';
import {Path, UseFormRegister} from "react-hook-form";
import {IFormValues} from "../../types/formTypes";

type InputProps = {
    label: Path<IFormValues>;
    register: UseFormRegister<IFormValues>;
    required: boolean;
    errorMessage?: string;
    mask?: string;
    value?: string | number;
    type?: string;
};

const Input: React.FC<InputProps> = ({label, register, required, errorMessage, mask, value, type}) => {
    return (
        <div>
            {value}
            <label>{label}</label>
            {type === "hidden" ? (
                <input type="hidden" value={value} {...register(label, {required})} />
            ) : mask ? (
                <InputMask mask={mask} value={value} {...register(label, {required})} />
            ) : (
                <input type={type} value={value} {...register(label, {required})} />
            )}
            {errorMessage && <span>{errorMessage}</span>}
        </div>
    );
};

export default Input;
