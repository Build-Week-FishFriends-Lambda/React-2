import React, { useState } from 'react';

export default function UserProfile() {

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
        }
      ]

    return(
        <>
            <h2>Username goes here</h2>
            <h3>Some other info goes here</h3>
            {dummyLogs.map(log => {
                return (
                    <>
                        <h3>Lake {log.lakeName}</h3>
                        <p>Fish caught: {log.fishCount}</p>
                        <p>Type of fish: {log.fishName}</p>
                        <p>Bait: {log.baitType}</p>
                        <p>Time spent: {log.timeSpent}</p>
                        <p>{log.timeOfDay}</p>
                    </>
                )
            })}
        </>
    )

}