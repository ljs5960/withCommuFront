import * as yup from 'yup'

export const SignUpRegisterSchema = yup.object({
	userEmail: yup.string()
		.required('이메일을 입력하세요')
		.email('이메일 형식이 바르지 않습니다.'),
	userPwd: yup.string()
		.required('패스워드를 입력해주세요')
		.min(8, '8자리 이상 입력하세요'),
	userPwdCheck: yup.string()
		.required('패스워드를 확인해주세요')
		.min(8, '8자리 이상 입력하세요')
		.oneOf([yup.ref('userPwd'), null], '비밀번호가 일치하지 않습니다.'),
	userName: yup.string()
		.required('이름을 입력하세요'),
	userPhone: yup.string()
		.required('핸드폰 번호를 입력하세요'),
	userNick: yup.string()
		.required('닉네임을 입력하세요'),

})
export type SignUpRegisterSchemaType = yup.InferType<typeof SignUpRegisterSchema>

