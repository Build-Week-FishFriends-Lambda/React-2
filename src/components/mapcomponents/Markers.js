import React, {useState, useEffect} from 'react';
import { Marker } from 'react-map-gl';
import { Link } from 'react-router-dom';

import pin from './pin.png';


const Markers = ({ zoom, lakes }) => {
  console.log(lakes);
  return (
        <div>
        {lakes.map(lake => {

            return (
                <Marker latitude={Math.random()*(48-42+1)+42} longitude={Math.random()*(-97+91-1)-91}>
                        <Link className='map-marker' to={`/location/${lake.locationname}`}>
                            <img src={pin} />
                        </Link>
                    
                
                </Marker>
                );
        })}
    </div>
  );
};
export default Markers;
