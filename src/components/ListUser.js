import React from "react";
import axios from "axios";

function ListUser({data, delName, modify, onUpdateToggle, onSelectUser}){


    return (
        <div>
            {data.map((ids)=>{
                return (
                    <div key={ids.id}>
                    <b>name : {ids.name} </b>&nbsp;&nbsp;&nbsp;&nbsp;<b> lastName : {ids.lastName}&nbsp;&nbsp;&nbsp;</b>
                <button onClick={()=>{
                    delName(ids.id)
                }}>del</button>
                    <button onClick={()=>{
                        // modify(ids.id);
                        onUpdateToggle();
                        onSelectUser(ids);
                    }}>modify</button>
                </div>)
            })}

        </div>
    );
}

export default ListUser