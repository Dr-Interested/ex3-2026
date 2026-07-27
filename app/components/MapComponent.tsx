'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { eventLocationText, eventMapCenter } from '../lib/event-info';

export default function MapComponent() {
  const [customIcon, setCustomIcon] = useState<any>(null);
  const [isClient, setIsClient] = useState(false);
  const [mapKey, setMapKey] = useState(0);

  useEffect(() => {
    // Ensure we're on the client side
    setIsClient(true);
    setMapKey((prev) => prev + 1);
    
    // Create custom icon using text/emoji
    const createCustomIcon = async () => {
      try {
        const L = await import('leaflet');
        
        // Create a custom HTML icon
        const icon = L.divIcon({
          html: `<div style="
            background-color: #3B82F6; 
            color: white; 
            width: 30px; 
            height: 30px; 
            border-radius: 50%; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            font-size: 16px;
            font-weight: bold;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
            border: 2px solid white;
          ">📍</div>`,
          className: 'custom-marker',
          iconSize: [30, 30],
          iconAnchor: [15, 15],
        });
        
        setCustomIcon(icon);
      } catch (error) {
        console.error('Error creating custom icon:', error);
      }
    };
    
    createCustomIcon();
  }, []);

  // Don't render the map until we're on the client
  if (!isClient) {
    return (
      <div className="h-96 w-full rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center">
        <div className="text-white">Loading map...</div>
      </div>
    );
  }

  return (
    <div className="h-96 w-full rounded-lg overflow-hidden border border-gray-700">
      <MapContainer
        key={mapKey}
        center={eventMapCenter}
        zoom={16}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {customIcon && (
          <Marker position={eventMapCenter} icon={customIcon}>
            <Popup>
              <div className="text-center">
                <strong>Explore3 Case Competition</strong>
                <br />
                Event Venue
                <br />
                <span className="text-sm text-gray-600">
                  {eventLocationText}
                </span>
              </div>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}