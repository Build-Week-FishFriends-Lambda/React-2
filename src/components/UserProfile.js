import React, { useContext, useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import AddLog from "./AddLog";
import { LoginContext } from '../contexts/LoginContext';

export default function UserProfile() {

    const [logs, setLogs] = useState([]);
    const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext)

    useEffect(()=>{  
      axiosWithAuth().get("logs/all")
      .then(res => {
        console.log(res.data)
        setLogs(res.data)})
      .catch(err => console.log(err))  
  },[])

    useEffect(()=>{  
        setIsLoggedIn(true);
    },[])

    return(
        <div className="user-profile">
            <h2>{localStorage.getItem('user') ? `${localStorage.getItem('user')}'s Stories:` : "Please Log In"}</h2>
            <h3>Add a new Log:</h3>
            <AddLog />
            <h3>Your logs:</h3>
            {logs.filter(log => log.author === localStorage.getItem('user')).map(log => {
                return (                 
                    <div className="log-card">
                        <h3>Location: {log.place}</h3>
                        <p>Fish caught: {log.fishnum}</p>
                        <p>Type of fish: {log.fishtypes}</p>
                        <p>Bait: {log.baittype}</p>
                        <p>Time spent: {log.timespent}</p>
                    </div>
                )
            })}
        </div>
    )

}