import React from 'react'
import {useRef, useEffect} from 'react'
import { Wrapper, Status } from '@googlemaps/react-wrapper'




function ShopLocation() {
    return (
        <div className="w-full h-[500px]">
            <div className="container">
                <Wrapper apiKey="AIzaSyCmC6Q5HtsFhrYG_mqU4DgKKgsreN52Upc">
                    <Map center={ {lat: -34.397, lng: 150.644 }} zoom={4} />
                </Wrapper>
            </div>
        </div>
    )
}

function Map({
    center ,
    zoom,
  }
  ) {
    const ref = useRef();
  
    useEffect(() => {
      new window.google.maps.Map(ref.current, {
        center,
        zoom,
      });
    });
  
    return <div ref={ref} className="h-full" />;
  }

export default ShopLocation;
