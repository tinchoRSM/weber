import { Wrapper } from "@googlemaps/react-wrapper";
import React from "react";
import { useEffect, useRef, useState } from "react";


const data =[
  {
    textInfo : `<p><b>Rosima</b></p><p>ul. "Viso" 60</p><p>1151 v.z. Vrana-Lozen triagalnika, Sofia</p><p>Bulgaria</p>`,
    position : { lat: 42.629180412652296, lng: 23.445410117588874 }
  },

  {
    textInfo : `<p><b>Planika</b></p><p>ul. "ul. "Okolovrasten pat" 36</p><p>1415 Vodoley-1, Sofia</p><p>Bulgaria</p>`,
    position : { lat: 42.64272667771185, lng: 23.308954275638964 }
  },

  {
    textInfo : `<p><b>Специализиран барбекю център Марков 92 ЕООД</b></p><p>bul. "8-mi Primorski Polk"</p><p>, 9010 Sotira, Varna</p><p>Bulgaria</p>`,
    position : { lat: 43.21063088200734, lng: 27.921821262349848 }
  },


];


const Map = ({ onClick, onIdle, children, style, ...options}) => {
  const ref = React.useRef(null);
  const [map, setMap] = React.useState();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  useEffect(() => {
    if (map) {
      map.setOptions(options);
    }
  }, [map, options]);

  useEffect(() => {
    if (map) {
      ["click", "idle"].forEach((eventName) =>
        window.google.maps.event.clearListeners(map, eventName)
      );

      if (onClick) {
        map.addListener("click", onClick);
      }

      if (onIdle) {
        map.addListener("idle", () => onIdle(map));
      }
    }
  }, [map, onClick, onIdle]);

  return (
    <>
      <div ref={ref} style={style} />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { map });
        }
      })}
    </>
  );
};

const Marker = (options) => {
  const [marker, setMarker] = useState();
  const contentRef = useRef(null);

  

  useEffect(() => {
    if (!marker) {
      setMarker(new window.google.maps.Marker());
    }

    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  useEffect(() => {
    if (marker) {
      const infowindow = new window.google.maps.InfoWindow({content: options.content});
            marker.setOptions(options);
      

      marker.addListener("click", () => {
        
        infowindow.open({
          anchor: marker,
          shouldFocus: false,
          
        });
      });
    }
  }, [marker, options]);

  return null;
};

export default function ShopTets() {
  return (
    <div className="flex  pt-[70px] h-[650px] w-full">
        
      <Wrapper apiKey={"AIzaSyCmC6Q5HtsFhrYG_mqU4DgKKgsreN52Upc"}>
        <Map
          center={{ lat: 42.732132804671124, lng: 25.08932957799609 }}  
          zoom={8}
          style={{ flexGrow: "1", height: "100%" }}
        >


          {data.map((data) => {
            return <Marker position={data.position} content={data.textInfo} />;
          })}
          
        </Map>
      </Wrapper>
    </div>
  );
}