import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

export default function UserProfile() {

    const [logs, setLogs] = useState([]);


    useEffect(()=>{  
      axiosWithAuth().get("logs/all")
      .then(res => {
        console.log(res.data)
        setLogs(res.data)})
      .catch(err => console.log(err))  
  },[])

    const logArray = ["Log 1", "log 2", "log 3", "log 4", "log 5"];


    const dummyLogs = [
        {
          "id": 0,
          "lakeName": "Herring",
          "fishCount": 6,
          "fishName": "Smallmouth Bass",
          "baitType": "incididunt eiusmod",
          "timeSpent": "1 hours",
          "timeOfDay": "Sat Jan 26 2019 14:26:52 GMT-0600 (Central Standard Time)"
        },
        {
          "id": 1,
          "lakeName": "Bender",
          "fishCount": 4,
          "fishName": "Brown Trout",
          "baitType": "ipsum non",
          "timeSpent": "3 hours",
          "timeOfDay": "Mon May 06 2019 19:51:58 GMT-0500 (Central Daylight Time)"
        },
        {
          "id": 2,
          "lakeName": "Gamble",
          "fishCount": 8,
          "fishName": "Carp",
          "baitType": "dolore officia",
          "timeSpent": "2 hours",
          "timeOfDay": "Sat Jan 19 2019 23:30:34 GMT-0600 (Central Standard Time)"
        },
        {
          "id": 3,
          "lakeName": "Browning",
          "fishCount": 7,
          "fishName": "Spelt",
          "baitType": "ex excepteur",
          "timeSpent": "1 hours",
          "timeOfDay": "Wed Jun 05 2019 11:24:37 GMT-0500 (Central Daylight Time)"
        },
        {
          "id": 4,
          "lakeName": "Evans",
          "fishCount": 7,
          "fishName": "Rainbow Trout",
          "baitType": "excepteur nisi",
          "timeSpent": "3 hours",
          "timeOfDay": "Fri Jan 18 2019 08:32:32 GMT-0600 (Central Standard Time)"
        },
        {
            "id": 5,
            "lakeName": "Herring",
            "fishCount": 4,
            "fishName": "Largemouth Bass",
            "baitType": "incididunt eiusmod",
            "timeSpent": "1 hours",
            "timeOfDay": "Sat Jan 26 2019 14:26:52 GMT-0600 (Central Standard Time)"
        },
        {
            "id": 6,
            "lakeName": "Herring",
            "fishCount": 3,
            "fishName": "Carp",
            "baitType": "incididunt eiusmod",
            "timeSpent": "1 hours",
            "timeOfDay": "Sat Jan 26 2019 14:26:52 GMT-0600 (Central Standard Time)"
        },
        {
            "id": 7,
            "lakeName": "Evans",
            "fishCount": 7,
            "fishName": "Brown Trout",
            "baitType": "excepteur nisi",
            "timeSpent": "3 hours",
            "timeOfDay": "Fri Jan 18 2019 08:32:32 GMT-0600 (Central Standard Time)"
        },
        {
            "id": 8,
            "lakeName": "Evans",
            "fishCount": 7,
            "fishName": "Grey Trout",
            "baitType": "excepteur nisi",
            "timeSpent": "3 hours",
            "timeOfDay": "Fri Jan 18 2019 08:32:32 GMT-0600 (Central Standard Time)"
        }

      ]

    

    return(
        <>
            <h2>Username goes here</h2>
            <h3>Some other info goes here</h3>
            {logs.map(log => {
                return (
                    <div className="log-card">
                        <h3>Location: {log.place}</h3>
                        <h4>Author: {log.author}</h4>
                        <p>Fish caught: {log.fishnum}</p>
                        <p>Type of fish: {log.fishtypes}</p>
                        <p>Bait: {log.baittype}</p>
                        <p>Time spent: {log.timespent}</p>
                    </div>
                )
            })}
        </>
    )

}