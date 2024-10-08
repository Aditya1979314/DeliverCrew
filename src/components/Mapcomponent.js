import { GoogleMap, Marker, DirectionsRenderer, useJsApiLoader } from '@react-google-maps/api';
import { useRef } from 'react';

export default function Mapcomponent() {
    const markers = [
        { position: { lat: 18.5067, lng: 73.8791 }, label: 'R' },
        { position: { lat: 18.5113, lng: 73.8337 }, label: 'R' },
        { position: { lat: 18.5153, lng: 73.8360 }, label: 'C' },
        { position: { lat: 18.5253, lng: 73.8537 }, label: 'D' },
        { position: { lat: 18.5250, lng: 73.8365 }, label: 'D' },
        { position: { lat: 18.4900, lng: 73.8365 }, label: 'D' },
        { position: { lat: 18.5100, lng: 73.8537 }, label: 'D' },
        { position: { lat: 18.5050, lng: 73.8760 }, label: 'C' },
        { position: { lat: 18.4950, lng: 73.8760 }, label: 'D' }
    ];

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_API_KEY,
    });

    const center = { lat: 18.5, lng: 73.8 };
    const mapRef = useRef();

    function onload(map) {
        mapRef.current = map;
        const markerarr = [
            { lat: 18.5067, lng: 73.8791 },
            { lat: 18.5113, lng: 73.8337 }
        ];

        const bounds = new window.google.maps.LatLngBounds();
        markerarr.forEach((obj) => {
            bounds.extend(new window.google.maps.LatLng(obj.lat, obj.lng));
        });

        map.fitBounds(bounds);
    }

    if (!isLoaded) return <div className="text-center mt-4">Loading...</div>;

    return (
        <div className="p-4 h-screen w-full flex justify-center items-center bg-gray-100">
            <div className="w-2/3 h-full bg-white shadow-md rounded-md overflow-hidden">
                <GoogleMap
                    onLoad={onload}
                    center={center}
                    zoom={12}
                    mapContainerClassName="w-full h-full"
                >
                    {markers.map((marker, index) => (
                        <Marker
                            key={index}
                            position={marker.position}
                            label={marker.label}
                        />
                    ))}
                </GoogleMap>
            </div>
        </div>
    );
}
