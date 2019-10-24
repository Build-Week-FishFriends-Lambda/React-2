import React from 'react';
import { Marker } from 'react-map-gl';
import { Link } from 'react-router-dom';

import pin from './pin.png';


const Markers = ({ zoom, lakes }) => {
  console.log(lakes);
  return (
        <div>
        {lakes.map(lake => {

            return (
                <Marker key={lake.id} latitude={Math.floor(Math.random()*(46-44+1)+44)} longitude={Math.floor(Math.random()*(-95+93-1)-94)}>
                        <Link className='map-marker' to={`/locations/${lake.locationname}`}>
                            <img src={pin} />
                        </Link>
                    
                
                </Marker>
                );
        })}
    </div>
  );
};
export default Markers;
