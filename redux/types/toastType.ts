import {ReactDOM, ReactElement, ReactHTML} from "react";

export type Toast = {
	msg : ReactDOM | ReactHTML | ReactElement<any> | string;
	uuid ?: string;
	option ?:ToastOptionType;
    state ?: string;
}

export type ToastOptionType = {
  toastType ?: 'default' | string
  position : 'center' | 'bot';
  duration : number;
  callback ?: Function | null;
  containerStyle ?: {
    classNames ?: Array<string>;
    inlineStyle ?: {};
  }
}
