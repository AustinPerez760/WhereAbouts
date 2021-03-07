import React from "react";
import { useState } from "react";
import Signup from "../Signup/";
import LogIn from "../LogIn";

function SignCard(){
    const [signUpLoad, setState] = useState (false);

    if (signUpLoad === false){
        return (
            <LogIn signInScreen={setState}/>
        );
    } else {
        return (
            <Signup signInScreen={setState}/>
        );
    };
};

export default SignCard;