import {useDispatch, useSelector} from "react-redux";
import {Toast} from "../core2/redux/types/toastType";
import {SetStateAction, useEffect, useRef, useState} from "react";
// import {addToast, deleteToast} from "../core/redux/actions/toastAction";
// import {AppState} from "../core/redux/reducers";
import {addToast, deleteToast, deleteAllToast} from "../core2/redux/reducers/slice"
import {AppStore, RootState} from "../core2/redux/store/store"


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