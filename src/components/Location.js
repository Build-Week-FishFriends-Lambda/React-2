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
    const [area, setArea] = useState([]);

    useEffect(() => {
        axiosWithAuth().get("http://fishfriends.herokuapp.com/locations/all").then((response) => {
            setLocation(response.data)
            console.log("Location Response" , response)

        }).catch((error) => {
            console.log(error);
        })


        axiosWithAuth().get("http://fishfriends.herokuapp.com/logs/all").then((response) => {
            setLogs(response.data)
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })

        setLocation([{
            "locationname": "Connecticut River",
            "locationpicurl": "http://tinyimg.io/i/pabHplC.jpg",
            "locationdesc": "A placid body of water known for its plentiful carp."
    },{
            "locationname": "Grand View Lake",
            "locationpicurl": "http://tinyimg.io/i/pabHplC.jpg",
            "locationdesc": "A torrid body of water known for its sizeable Trout."
    },{
            "locationname": "Clear Lake",
            "locationpicurl": "http://tinyimg.io/i/pabHplC.jpg",
            "locationdesc": "A small body of water known for its moody bass"
    }])

    console.log(location);

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