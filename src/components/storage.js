import React, {useEffect, useState} from "react";
import {type} from "@testing-library/user-event/dist/type";

function Storage() {
    //api-test
    fetch("https://ehdgns07.github.io/data/data.json")
        .then((response) => {
            response.json();
        })
        .then((data) => {
            console.log(data);
        })


    const [name, setName] = useState('');
    const [result, setResult] = useState([]);

    const saveName = () => {
        const user = {"name": name}
        localStorage.setItem(name, JSON.stringify(user));
    }
    const loadName = () => {

        for (let i = 0; i < localStorage.length; i++) {
            if (name === localStorage.key(i)) {

                let key = localStorage.key(i);
                let value = localStorage.getItem(key);

                setResult([{key, "name": value}]);
            }
        }
    }
    // console.log(typeof result);
    const onChange = (e) => {

        setName(e.target.value)
    }

    // useEffect()
    useEffect(() => {
        loadName();
    }, [name])

    return (
        <div>
            <div>
                <input
                    name="userName"
                    placeholder="이름을 입력하세요!"
                    onChange={onChange}
                />

                <button onClick={saveName}>저장하기</button>
                <button onClick={loadName}> 불러오기</button>
            </div>
            <div>
                {result.map((data) => {
                    return <p key={data.name}>{data.key}&nbsp;&nbsp;&nbsp;&nbsp;{data.name}</p>
                })}
            </div>
        </div>
    )
}

export default Storage