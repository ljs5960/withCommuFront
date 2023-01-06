import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

type PropsType = {
	register: UseFormRegisterReturn
}

const SignUpPwdCheckInput = (props: PropsType) => {
	return (
		<>
			<div className="col-span-6 sm:col-span-6">
				<label htmlFor="passwordCheck" className="block text-sm font-medium text-gray-700">
					passwordCheck
				</label>
				<input
					type="text"
					id="passwordCheck"
					autoComplete="off"
					className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
					{...props.register}
				/>
			</div>
		</>
	)
}

export default SignUpPwdCheckInput
