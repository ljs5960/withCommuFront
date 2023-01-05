import React from 'react';
import {UseFormRegisterReturn} from "react-hook-form";

type PropsType = {
    register: UseFormRegisterReturn
}

const SignUpPwdInput = (props: PropsType) => {
    return (
        <>
            <div className="col-span-6 sm:col-span-6">
                <label htmlFor="password"
                       className="block text-sm font-medium text-gray-700">
                    password
                </label>
                <input
                    type="text"
                    id="password"
                    autoComplete="off"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    {...props.register}
                />
            </div>
        </>
    );
};

export default SignUpPwdInput;