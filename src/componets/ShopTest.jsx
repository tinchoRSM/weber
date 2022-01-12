import { Wrapper } from "@googlemaps/react-wrapper";
import React from "react";

const markers = [
  { lat: 42.629180412652296, lng: 23.445410117588874 },
  { lat: 42.64272667771185, lng: 23.308954275638964 }
];

const Map = ({ onClick, onIdle, children, style, ...options }) => {
  const ref = React.useRef(null);
  const [map, setMap] = React.useState();

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  React.useEffect(() => {
    if (map) {
      map.setOptions(options);
    }
  }, [map, options]);

  React.useEffect(() => {
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
  const [marker, setMarker] = React.useState();
  const contentRef = React.useRef(null);

  React.useEffect(() => {
    if (!marker) {
      setMarker(new window.google.maps.Marker());
    }

    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  React.useEffect(() => {
    if (marker) {
      const infowindow = new window.google.maps.InfoWindow({
        content: `daver`
      });
      marker.setOptions(options);

      marker.addListener("click", () => {
        infowindow.open({
          anchor: marker,
          shouldFocus: false
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
          center={{ lat: 42.651411775077044, lng: 23.3746000073453 }}  
          zoom={13}
          style={{ flexGrow: "1", height: "100%" }}
        >
          {markers.map((marker) => {
            return <Marker position={marker} />;
          })}
        </Map>
      </Wrapper>
    </div>
  );
}