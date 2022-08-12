import './App.css';
import {useEffect, useRef, useState} from "react";
import axios from "axios";

import Input from "./components/Input";
import InputUser from "./components/InputUser";
import ListUser from "./components/ListUser";
import data from "./database/data.json";
import Storage from "./components/storage";
import {axiosData, fetchData} from "./components/GetUsers";
import UpdateUser from "./components/UpdateUser"

function App() {

    //data initialize
    useEffect(() => {
        // fetchData
        // 비동기 데이터 처리 문제
        // const data = fetchData();
        // data
        //     .then(response => response.json())
        //     .then(data => setUsers(data))

        // axiosData
        // const data = axiosData();
        // data
        //   .then(response => setUsers(response.data))
    }, []);


    //fetch test
    // let data;
    // const fetchData
    //     = async () => {
    //     try {
    //         const response = await fetch("https://ehdgns07.github.io/data/data.json")
    //         data = response.json();
    //     } catch (e) {
    //     }
    // }

    //axios
    // axios.get("https://ehdgns07.github.io/data/data.json")
    //     // .then(response => console.log(response.data))
    //     .then(response => response.data)


    // const [users, setUsers] = useState([]);
    const [users, setUsers] = useState(data);

    const [inputs, setInputs] = useState({
        id: 0,
        name: '',
        lastName: ''
    });

    // const nameInput = useRef();
    //inputs 객체
    const {name, lastName} = inputs;

    //inputs객체들을 관리할 수 있는 배열 객체
    // const data  = [
    // {
    //   id : 0,
    //   name: 'it',
    //   lastName: 'it'
    // },
    //   {
    //     id : 1,
    //     name: 'dev',
    //     lastName: 'dev'
    // }
    // ]


    // const nextId = data[ users.length - 1 ].id+1;
    const [nextId, setNextId] = useState(3);

    const onChange = (e) => {
        const {name, value} = e.target;

        setInputs({
            ...inputs,
            [name]: value
        });
    }

    const onAdd = () => {
        const newUser = {
            id: nextId,
            name: name,
            lastName: lastName
        }

        setUsers([...users, newUser]);

        setNextId(nextId + 1);

        setInputs({
            name: '',
            lastName: ''
        });
    }


    const delName = (id) => {
        let newUsers = users;
        newUsers = newUsers.filter((user) => user.id !== id)
        setUsers(newUsers);

        // users.find((user) => {
        //   if(user.id === id){
        //     const index = users.indexOf(user);
        //     console.log("test : " + index);
        //     let newUsers = users;
        //     return setUsers(newUsers.splice(index+1,1));
        //   }
        // })
    }

    //수정 ver1
    const onModify = (id) => {
        for (const element of users) {
            if (element.id === id) {
                element.name = inputs.name;
                element.lastName = inputs.lastName;
                break;
            }
        }
        setUsers([...users]);

        console.log("users:",users);
    }
    //수정 ver2
    const [updateToggle, setUpdateToggle] = useState(false);
    //modify 버튼클릭시 UpdateUser에 클릭한 user 정보를 관리하는 state
    const [selectedUser,setSelectedUser] = useState('');
    const onUpdateToggle = ()=>{
        setUpdateToggle(!updateToggle);
    }

    //선택한 user의 상태를 변경하는 함수
    const onSelectUser = (user)=>{
        console.log(user);
        setSelectedUser(user);
    }

    const onUpdate = (value)=>{
        // for (let user of users) {
        //     if(user.id === selectedUser.id){
        //         user.name = value;
        //         break;
        //     }
        // }
        // setUsers([...users]);
        // setUpdateToggle(false);

        //////////////////////////////////

        users.map((user) =>
            ((user.id === selectedUser.id ? user.name=value : user.name))
        )

        setUsers([...users]);
        setUpdateToggle(false);
    }

    return (
        <div>
            {/*<Input/>*/}
            <InputUser
                username={name}
                lastName={lastName}
                onChange={onChange}
                onAdd={onAdd}/>
            <ListUser data={users}
                      delName={delName}
                      modify={onModify}
                      onUpdateToggle={onUpdateToggle}
                      onSelectUser={onSelectUser}
            />

            {updateToggle && <UpdateUser selectedUser={selectedUser} onUpdate={onUpdate}/>}
              {/*<Storage></Storage>*/}

        </div>
    );
}

export default App;
