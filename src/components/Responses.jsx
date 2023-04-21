import React, { useState,useEffect } from "react";
import "./response.css"
import Card from "./Card";
const Response =()=>{
    const [username,setUsername]=useState("")
    const [data,setData]=useState({
        name:"",
        age:0,
        datae:"",
        programming:""
    });
    const handleChange_name = event => {
        setUsername(event.target.value);
      };
    const handle_Click=()=>{
        console.log(data)
    }
    useEffect(() => {
        fetch("/data").then((res) =>
            res.json().then((data) => {
                // Setting a data from api
                setData({
                    name: data.Name,
                    age: data.Age,
                    date: data.Date,
                    programming: data.programming,
                });
            })
        );
    }, []);
    return (
        <div>
            <div className="Response">
            <h1>Let's take a look at the responses of the patients:</h1>
            <h4>Enter the Username of the patient</h4>
            <input type="text" placeholder="Username" value={username} onChange={handleChange_name}></input>
            <button className="username_response" onClick={handle_Click}>GO</button>
            </div>
            <Card question="Question" answer="Answer"/>
        </div>
    )
}
export default Response;