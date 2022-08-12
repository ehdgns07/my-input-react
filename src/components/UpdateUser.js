import React, {useEffect, useState} from "react";

function UpdateUser({selectedUser, onUpdate}) {

    const [value, setValue] = useState('');

    const onChange = (e)=>{
        console.log(e.target.value)
        setValue(e.target.value);
    }

    const onSubmit = (e)=>{
        console.log("onSubmit test");
        // onUpdate(value); onClick과 결과 동일
        e.preventDefault();
    }

    //초기에 modify버튼을 눌렀을 시 해당하는 name을 출력해야한다
    useEffect(()=>{
        setValue(selectedUser.name);
    },[])

    return (
        <div>
            <h1>이름 정보 수정</h1>
            <form onSubmit={onSubmit}>
                <input type={"text"} onChange={onChange} value={value}/>
                <button type={"submit"} onClick={()=>{
                    onUpdate(value);
                }}>modify</button>
            </form>
        </div>
    );
}

export default UpdateUser