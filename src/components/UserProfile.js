import React, { useState } from 'react';

export default function UserProfile() {

    const logArray = ["Log 1", "log 2", "log 3", "log 4", "log 5"];

    return(
        <>
            <h2>Username goes here</h2>
            <h3>Some other info goes here</h3>
            {logArray.map(log =>
                <p>{log}</p>)}
        </>
    )

}