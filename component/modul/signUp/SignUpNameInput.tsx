import React from 'react';
import {UseFormRegisterReturn} from "react-hook-form";

type PropsType = {
    register: UseFormRegisterReturn
}

const SignUpNameInput = (props: PropsType) => {
    return (
        <>
            <div className="col-span-2 sm:col-span-2">
                <label htmlFor="name"
                       className="block text-sm font-medium text-gray-700">
                    name
                </label>
                <input
                    type="text"
                    id="name"
                    autoComplete="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    {...props.register}
                />
            </div>
        </>
    );
};

export default SignUpNameInput;