'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the map to avoid SSR issues
const MapComponent = dynamic(() => import('./MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="h-96 w-full rounded-lg bg-gray-800 flex items-center justify-center">
      <div className="text-white">Loading map...</div>
    </div>
  )
});

export default function InteractiveMap() {
  return <MapComponent />;
}