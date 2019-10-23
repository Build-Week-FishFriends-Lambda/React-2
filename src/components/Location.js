import React, {useState, useEffect} from "react";
import styled from "styled-components"
import {Link} from "react-router-dom";
import LocationCard from "./LocationCard";

import axiosWithAuth from '../utils/axiosWithAuth';

const LocationCards = styled.div`
    width: 80%;
    background-color: #333;
    margin: 10px auto;
    padding: 10px;
    color: white;
    border-radius: 3px;
    box-shadow: 5px 5px 5px #000;

        img {
            max-width: 50%;
            border-radius: 3px;
        }

`

const Card = styled.div`

`

export default function Location() {

    const [location, setLocation] = useState([]);
    const [logs, setLogs] = useState([]);
    const [area, setArea] = useState([]);

    useEffect(() => {
        axiosWithAuth().get("http://fishfriends.herokuapp.com/locations/all").then((response) => {
            setLocation(response.data)
        }).catch((error) => {
            console.log(error);
        })

        axiosWithAuth().get("http://fishfriends.herokuapp.com/logs/all").then((response) => {
            setLogs(response.data)
        }).catch((error) => {
            console.log(error);
        })
    }, [])
    
    
    return (
       <>
        {location.map((el, index) => {
          return  (
              <Link to={`location/${el.locationname}`}>
          <LocationCards key={index}>
              <img src={el.locationpicurl}/>
              <h2>{el.locationname}</h2>
              <p>{el.locationdesc}</p>
          </LocationCards>
          </Link>
        )})}
       </>
    )
}