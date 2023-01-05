import React from 'react';
import { FormProvider, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import {SignUpRegisterSchema, SignUpRegisterSchemaType} from "@schema/signUp";
import {yupResolver} from "@hookform/resolvers/yup";
import {toastActions} from "@redux/reducers/toast";
import {useDispatch} from "react-redux";
import SignUpEmailInput from "@component/modul/signUp/SignUpEmailInput";
import SignUpPwdInput from "@component/modul/signUp/SignUpPwdInput";
import SignUpPwdCheckInput from "@component/modul/signUp/SignUpPwdCheckInput";
import SignUpNameInput from "@component/modul/signUp/SignUpNameInput";
import SignUpPhoneInput from "@component/modul/signUp/SignUpPhoneInput";
import SignUpNickInput from "@component/modul/signUp/SignUpNickInput";


const SignUp = () => {
    const dispatch = useDispatch();

    const methods = useForm<SignUpRegisterSchemaType>({
        resolver: yupResolver(SignUpRegisterSchema),
        mode: 'onSubmit',
        reValidateMode: 'onSubmit',
    })

    const emailRegister = methods.register('userEmail')
    const pwdRegister = methods.register('userPwd')
    const pwdCheckRegister = methods.register('userPwdCheck')
    const nameRegister = methods.register('userName')
    const phoneRegister = methods.register('userPhone')
    const nickRegister = methods.register('userNick')

    const submitHandler: SubmitHandler<SignUpRegisterSchemaType> = (data) => {
        console.log("submitData : ", data);
    }
    const submitErrorHandler: SubmitErrorHandler<SignUpRegisterSchemaType> = (data) => {
        let value = Object.values(data)[0]
        console.log("submitData : ", data);

        dispatch(
            toastActions.addToast({msg: value.message})
        )
    }

    return (
        <>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div className={"mx-auto max-w-7xl py-6 sm:px-6 lg:px-8"}>
                        <div className="mt-10 sm:mt-0">
                            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                                SingUp
                            </h2>
                            <div className="md:grid md:grid-cols-3 md:gap-6">
                                <div className="mt-5 md:col-span-3 md:mt-0">
                                    <FormProvider {...methods}>
                                        <div className="overflow-hidden shadow sm:rounded-md">
                                            <div className="bg-white px-4 py-5 sm:p-6">
                                                <div className="grid grid-cols-6 gap-6">
                                                    <SignUpEmailInput register={emailRegister}></SignUpEmailInput>
                                                    <SignUpPwdInput register={pwdRegister}></SignUpPwdInput>
                                                    <SignUpPwdCheckInput register={pwdCheckRegister}></SignUpPwdCheckInput>
                                                    <SignUpNameInput register={nameRegister}></SignUpNameInput>
                                                    <SignUpPhoneInput register={phoneRegister}></SignUpPhoneInput>
                                                    <SignUpNickInput register={nickRegister}></SignUpNickInput>
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                                <button
                                                    type="button"
                                                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                    onClick={() => {
                                                        methods.handleSubmit(submitHandler, submitErrorHandler)()
                                                    }}
                                                >
                                                    SignUp!
                                                </button>
                                            </div>
                                        </div>
                                    </FormProvider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;