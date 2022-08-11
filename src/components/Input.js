import React, {useEffect, useRef, useState} from "react";

function Input(){

    const [input, setInput] = useState({
        name : '',
        lastName : ''
    });
    const inputRef = useRef();

    const {name, lastName} = input;

    const onReset = (e) => {
        setInput({
            name : ''
        });

        inputRef.current.focus();
    }

    const onChange = (e) => {
        //이벤트 타겟 비구조화 할당.
        const {name, value} = e.target;

        setInput({
            ...input,
            [name] : value
        });

    }

    return(
        <div>
            <input
                name="name"
                placeholder="name"
                onChange={onChange}
                value = {name}
                ref = {inputRef}
            />
            <input
                name="lastName"
                placeholder="lastName"
                onChange={onChange}
                value = {lastName}
            />
            <button onClick={onReset}>Reset</button>
            <div>
                <b>NAME: </b>
                {name}
                <b>-----------LASTNAME: </b>
                {lastName}
            </div>
        </div>
    );
}

export default Input