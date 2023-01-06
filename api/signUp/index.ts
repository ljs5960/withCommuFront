import axios from "@api/index";
import {SignUpRegisterSchemaType} from "@schema/signUp";

export const insSignUp = async (data:insSignUpType) => {
    return await axios.post('/api/signUp/ins', data)
}

export type insSignUpType = SignUpRegisterSchemaType;