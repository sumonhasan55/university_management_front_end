"use client";

import { Select } from "antd";
import { useFormContext, Controller } from "react-hook-form";


type SelectOptions = {
    label: string;
    value: string
}

type SelectFieldProps = {
    options: SelectOptions[];
    name: string;
    size?: "large" | "small";
    value?: string | string[] | undefined;
    placeholder?: string;
    label?: string;
    defaultValue?:SelectOptions;
}

const FormSelect = ({
    name,
    options,
    size,
    value,
    placeholder,
    defaultValue,
    label,
}: SelectFieldProps) => {
    const { control } = useFormContext();

    return (
        <>
            {label ? label : null}
            <Controller
                control={control}
                name={name}
                render={({ field:{value,onChange} }) =>
                    <Select
                        size={size}
                        onChange={onChange}
                        options={options}
                        value={value}
                        style={{width:"100%"}}
                    />
                }
            />
        </>
    );
};

export default FormSelect;
