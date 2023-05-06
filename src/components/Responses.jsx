import React, { useState,useEffect } from "react";
import "./response.css"
import Footer from "./Footer";
import { ref,onValue,set} from "firebase/database";
import {db_connecting} from './firebaseConfig'
import flying from "../assets/images/flying.gif"
import Card from "./Card";
const Response =()=>{
    const [username,setUsername]=useState("")
    const [quiz,setQuiz]=useState("");
    const [count,setCount]=useState(0);
    const [prediction_ans,setPrediction_ans]=useState("No");
    const [data_,setData]=useState({
        prediction : "No"
    });
    const [map,setMap]=useState({
        0:"No",
        1:"No",
        2:"No",
        3:"No",
        4:"No",
        5:"No",
        6:"No",
        7:"No",
        8:"No",
        9:"No"
    }
    )
    const [que,setQue]=useState({
            0:"Attempted a sucide ?",
            1:"Do you have a feeling of guilt ?",
            2:"Feeling irritable towards baby and partner ?",
            3:"Feeling sad or tearful ?",
            4:"Overeating or loss of apetite ?",
            5:"problems concentrating or in making decisions ?",
            6:"Problems of bonding with the baby ?",
            7:"Trouble sleeping at night ?",
            8:"que",
            9:"que"
        })
    const handleChange_name = event => {
        setUsername(event.target.value);
      };
    console.log(map)
    const handle_Click=async()=>{
        onValue(ref(db_connecting),snapshot=>{
            const data=snapshot.val();
            setCount(0);
            setQuiz(data["Users"][username]["Quiz"])
            if(data["Users"][username]["Quiz"]=="P"){
            if (data["Users"][username]["Answers"][0] == 0)
            {setMap(prev=>({...prev ,
                0:"No"
                }))}
            else if (data["Users"][username]["Answers"][0]==1){
                setMap(prev=>({...prev ,
                0:"Yes"
                }))
            }
            else {
                setMap(prev=>({...prev ,
                    0:"Not interested in telling"
                }))
            }
            if (data["Users"][username]["Answers"][1] == 0)
            {}
            else if (data["Users"][username]["Answers"][1]==1){
                setMap(prev=>({...prev ,
                1:"Yes"
                }))
            }
            else {
                setMap(prev=>({...prev ,
                    1:"Maybe"
                }))
            }
            if (data["Users"][username]["Answers"][2] == 0)
            {}
            else if (data["Users"][username]["Answers"][2]==1){
                setMap(prev=>({...prev ,
                2:"Yes"
                }))
            }
            else {
                setMap(prev=>({...prev ,
                    2:"Sometimes"
                }))
            }
            if (data["Users"][username]["Answers"][3] == 0)
            {}
            else if (data["Users"][username]["Answers"][3]==1){
                setMap(prev=>({...prev ,
                3:"Yes"
                }))
            }
            else {
                setMap(prev=>({...prev ,
                    3:"Sometimes"
                }))
            }
            if (data["Users"][username]["Answers"][4] == 0)
            {}
            else if (data["Users"][username]["Answers"][4]==1){
                setMap(prev=>({...prev ,
                4:"Yes"
                }))
            }
            else {
                setMap(prev=>({...prev ,
                    4:"Not at all"
                }))
            }
            if (data["Users"][username]["Answers"][5] == 0)
            {}
            else if (data["Users"][username]["Answers"][5]==1){
                setMap(prev=>({...prev ,
                5:"Yes"
                }))
            }
            else {
                setMap(prev=>({...prev ,
                    5:"Often"
                }))
            }
            if (data["Users"][username]["Answers"][6] == 0)
            {}
            else if (data["Users"][username]["Answers"][6]==1){
                setMap(prev=>({...prev ,
                6:"Yes"
                }))
            }
            else {
                setMap(prev=>({...prev ,
                    6:"Sometimes"
                }))
            }
            if (data["Users"][username]["Answers"][7] == 0)
            {}
            else if (data["Users"][username]["Answers"][7]==1){
                setMap(prev=>({...prev ,
                7:"Yes"
                }))
            }
            else {
                setMap(prev=>({...prev ,
                    7:"2 or more days a week"
                }))
            }}
            else if(data["Users"][username]["Quiz"]=="A"){
                if (data["Users"][username]["Answers"][0] == 0)
                {setMap(prev=>({...prev ,
                    0:"No"
                    }))}
                else {
                    setMap(prev=>({...prev ,
                    0:"Yes"
                    }))
                    setCount(current=>current+1)
                }
                if (data["Users"][username]["Answers"][1] == 0)
                {}
                else {
                    setMap(prev=>({...prev ,
                    1:"Yes"
                    }))
                    setCount(current=>current+1)
                }
                if (data["Users"][username]["Answers"][2] == 0)
                {}
                else {
                    setMap(prev=>({...prev ,
                    2:"Yes"
                    }))
                    setCount(current=>current+1)
                }
                
                if (data["Users"][username]["Answers"][3] == 0)
                {}
                else {
                    setMap(prev=>({...prev ,
                    3:"Yes"
                    }))
                    setCount(current=>current+1)
                }
                if (data["Users"][username]["Answers"][4] == 0)
                {}
                else{
                    setMap(prev=>({...prev ,
                    4:"Yes"
                    }))
                    setCount(current=>current+1)
                }
                
                if (data["Users"][username]["Answers"][5] == 0)
                {}
                else {
                    setMap(prev=>({...prev ,
                    5:"Yes"
                    }))
                    setCount(current=>current+1)
                }
                
                if (data["Users"][username]["Answers"][6] == 0)
                {}
                else {
                    setMap(prev=>({...prev ,
                    6:"Yes"
                    }))
                    setCount(current=>current+1)
                }
                
                if (data["Users"][username]["Answers"][7] == 0)
                {}
                else {
                    setMap(prev=>({...prev ,
                    7:"Yes"
                    }))
                    setCount(current=>current+1)
                }
                if (data["Users"][username]["Answers"][8] == 0)
                {}
                else {
                    setMap(prev=>({...prev ,
                    8:"Yes"
                    }))
                    setCount(current=>current+1)
                }
                if (data["Users"][username]["Answers"][9] == 0)
                {}
                else {
                    setMap(prev=>({...prev ,
                    9:"Yes"
                    }))
                    setCount(current=>current+1)
                }
                if (count>=6){
                    setPrediction_ans("Yes");
                }
                else setPrediction_ans("No")
                console.log(count)
                }
                else {
                    if (data["Users"][username]["Answers"][0] == 0)
                    {setMap(prev=>({...prev ,
                        0:"No"
                        }))}
                    else {
                        setMap(prev=>({...prev ,
                        0:"Yes"
                        }))
                        setCount(current=>current+1)
                    }
                    if (data["Users"][username]["Answers"][1] == 0)
                    {}
                    else {
                        setMap(prev=>({...prev ,
                        1:"Yes"
                        }))
                        setCount(current=>current+1)
                    }
                    if (data["Users"][username]["Answers"][2] == 0)
                    {}
                    else {
                        setMap(prev=>({...prev ,
                        2:"Yes"
                        }))
                        setCount(current=>current+1)
                    }
                    
                    if (data["Users"][username]["Answers"][3] == 0)
                    {}
                    else {
                        setMap(prev=>({...prev ,
                        3:"Yes"
                        }))
                        setCount(current=>current+1)
                    }
                    if (data["Users"][username]["Answers"][4] == 0)
                    {}
                    else{
                        setMap(prev=>({...prev ,
                        4:"Yes"
                        }))
                        setCount(current=>current+1)
                    }
                    
                    if (data["Users"][username]["Answers"][5] == 0)
                    {}
                    else {
                        setMap(prev=>({...prev ,
                        5:"Yes"
                        }))
                        setCount(current=>current+1)
                    }
                    if (count>=4){
                        setPrediction_ans("Yes");
                    }
                    else if (count==3){
                        setPrediction_ans("Maybe");
                    }
                    else setPrediction_ans("No")
                    console.log(count)
                    }
        })
        set(ref(db_connecting,`/Active`),{
            id: username
          });
        await fetch("/data").then((res) =>
            res.json().then((data) => {
                // Setting a data from api
                setData({
                    prediction: data.prediction,
                });
            })
        );
    }
    const sendAlert=async()=>{
        set(ref(db_connecting,`/Alert`),{
            id: username
        });
        await fetch("/data/alert").then(
            console.log("done")
        );
    }
    return (
        <div>
            <div className="Response">
            <h1>Let's take a look at the responses of the patients:</h1>
            <h4>Enter the UserId of the patient</h4>
            <input  type="text" placeholder="Enter the UserID here" value={username} onChange={handleChange_name}></input>
            <button className="username_response" onClick={handle_Click}>Analyse</button>
            </div>
            {(quiz=="") &&
            <div >
                <img src={flying} className="flying"/>
            </div>
}
            {(quiz=="P")&&<div>
            <Card question={que[0]} answer={map[0]}/>
            <Card question={que[1]} answer={map[1]}/>
            <Card question={que[2]} answer={map[2]}/>
            <Card question={que[3]} answer={map[3]}/>
            <Card question={que[4]} answer={map[4]}/>
            <Card question={que[5]} answer={map[5]}/>
            <Card question={que[6]} answer={map[6]}/>
            <Card question={que[7]} answer={map[7]}/>
            <Card question="Prediction of depression" answer={data_.prediction}/>
            <div className="alert" onClick={sendAlert}>Alert the patient</div>
            </div>}
            {
            (quiz=="A")&&<div>
                <Card question="Do you have trouble starting a new project?" answer={map[0]}/>
                <Card question="Do you have poor attention to detail?" answer={map[1]}/>
                <Card question="Are you easily distracted?" answer={map[2]}/>
                <Card question="When you do focus, are you hyperfocused?" answer={map[3]}/>
                <Card question="Do you have bad time management?" answer={map[4]}/>
                <Card question="Are you disorganised ?" answer={map[5]}/>
                <Card question="Are you over emotional?" answer={map[6]}/>
                <Card question="Are you impulsive" answer={map[7]}/>
                <Card question="Are you forgetfull?" answer={map[8]}/>
                <Card question="Do you have trouble shutting off your brain?" answer={map[9]}/>
                <Card question="Prediction of ADHD" answer={prediction_ans}/>
                <div className="alert" onClick={sendAlert}>Alert the patient</div>
            </div>
        }
        {
            (quiz=="O")&&<div>
                <Card question="Do you prefer things organised over messy?" answer={map[0]}/>
                <Card question="Are you an overthinker?" answer={map[1]}/>
                <Card question="When you are anxious or stressed, do you organise things a lot?" answer={map[2]}/>
                <Card question="Do you worry about harm comming to yourself or your loved ones?" answer={map[3]}/>
                <Card question="Are you worried about losing something valuable?" answer={map[4]}/>
                <Card question="Are you worried about contamination or catching a serious illness" answer={map[5]}/>
                <Card question="Prediction of OCD" answer={prediction_ans}/>
                <div className="alert" onClick={sendAlert}>Alert the patient</div>
            </div>
        }
            <Footer/>
        </div>
    )
}
export default Response;