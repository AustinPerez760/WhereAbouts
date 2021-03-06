import React from "react";
import { useState } from "react";
import Signup from "../Signup/";
import LogIn from "../LogIn";

function SignCard(){

    const [state, setState] = useState ({start: false});

    if (state.start === false){
        return (
            <LogIn state={state}/>
        );
    } else {
        return (
            <Signup state={state}/>
        );
    };
};

export default SignCard;