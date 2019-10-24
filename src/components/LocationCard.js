import React, {useState, useEffect} from "react";
import axiosWithAuth from '../utils/axiosWithAuth';
import styled from "styled-components";

const Card = styled.div`
    width: 300px;
    background-color: #333;
    margin: 10px auto;
    box-shadow: 5px 5px 5px #000;
    color: white;
`


export default function LocationCard(props) {
    const name = props.match.params.name;
    const [logs, setLogs] = useState([]);
    const [matched, setMatched] = useState([]);

    useEffect(() => {
        axiosWithAuth().get("http://fishfriends.herokuapp.com/logs/all").then((response) => {
            const resp = response.data;
            const results = resp.filter(loca => loca.place.includes(name));
            setMatched(results);
            console.log(matched);
        }).catch((error) => {
            console.log(error);
        })
    }, [])
    return (
        <div>
            <h1>{name}</h1>
            {matched.map((el) => {
                return <Card>
                    <h2>Author: {el.author}</h2>
                    <p>Bait: {el.baittype}</p>
                    <p>Fish: {el.fishtypes}</p>
                    <p>Caught: {el.fishnum}</p>
                    <p>Time Spent: {el.timespent}</p>
                </Card>
            })}
        </div>
    )
}
