import React, {useEffect} from 'react';
import {useRouter} from "next/router";

const Index = () => {
    let router = useRouter();
    useEffect(()=>{
        router.push('/signup')
    }, [])
    return (
        <div>

        </div>
    );
};

export default Index;