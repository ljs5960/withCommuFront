import {useDispatch, useSelector} from "react-redux";
import {Toast} from "../redux/types/toastType";
import {SetStateAction, useEffect, useRef, useState} from "react";
import {AppStore, RootState} from "../redux/store/store"
import {toastActions} from "@redux/reducers/toast";
import ToastPop from "@component/modul/toast/toastPop";


const ToastUtils = () => {
    let dispatch = useDispatch();
    const toast:Toast[] = useSelector((state: RootState) => state.toast);

    const fire = useRef<SetStateAction<any>>();

    const timeOut = () => {
        fire.current = setTimeout(() => {
            dispatch(toastActions.deleteToast());
        }, 1500)
    }

    useEffect(() => {
        if (toast.length > 0) {
            timeOut();
        }
        return ()=>{
            clearTimeout(fire.current);
        }
    }, [toast]);

    return (
        <>
            { toast.length > 0 && <ToastPop msg={toast[0].msg}></ToastPop> }
            <ToastPop msg={"123"}></ToastPop>
        </>
    )
}

export default ToastUtils;