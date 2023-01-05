import {useDispatch, useSelector} from "react-redux";
import {Toast} from "../redux/types/toastType";
import {SetStateAction, useEffect, useRef, useState} from "react";
import {addToast, deleteToast, deleteAllToast} from "../redux/reducers/toast"
import {AppStore, RootState} from "../redux/store/store"


const ToastUtils = () => {
    let dispatch = useDispatch();
    const toast:Toast[] = useSelector((state: RootState) => state.toast);

    const fire = useRef<SetStateAction<any>>();

    const timeOut = () => {
        fire.current = setTimeout(() => {
            dispatch(deleteToast());
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
            { toast.length > 0 && <div className="toast show">
                <h4>테스트</h4>
                <>{toast[0].msg}</>
            </div> }
        </>
    )

    if (toast.length > 0) {
        return (
            <>
                <div className="toast show">
                    <h4>테스트</h4>
                    <>
                    {toast[0].msg}
                    </>
                </div>
            </>
        );
    } else {
        return (
            <>
            </>
        );
    }
}

export default ToastUtils;