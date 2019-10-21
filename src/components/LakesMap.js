import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import styled from "styled-components";

const MapWrapper = styled.div`
  width:100vw;
  height:100vh;
`;

export default function LakesMap() {
    const [viewport, setViewport] = useState({
      width: '100%',
      height: '100%',
      latitude: 45,
      longitude: -95,
      zoom: 5,
    });

    const _onViewportChange = viewport => {
        setViewport({ ...viewport });
      };

      return (
          <MapWrapper>
            <ReactMapGL
                mapStyle='mapbox://styles/mapbox/dark-v9'
                {...viewport}
                mapboxApiAccessToken={
                'pk.eyJ1IjoiYnJ1bmNodGltZSIsImEiOiJjazIwdG80MGkxN3lmM25vaWZ5cThkZDU1In0.uYqrXjiEyUL1mTEO_N5-0w'
                }
                onViewportChange={_onViewportChange}>
            </ReactMapGL>
        </MapWrapper>
      );
    }