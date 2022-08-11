import React from "react";
import app from "../App";

function InputUser({username, lastName, onChange, onAdd}){

    return (
        <div>
            <input name={"name"} placeholder={"name"} onChange={onChange} value={username}/>
            <input name={"lastName"} placeholder={"lastName"} onChange={onChange} value={lastName}/>
            <button onClick={onAdd}>추가</button>
        </div>
    );
}

export default InputUser