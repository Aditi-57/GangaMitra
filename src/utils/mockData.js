export const locations = [
  {
    id: '1',
    name: 'Rishikesh',
    coordinates: { lat: 30.0869, lng: 78.2676 },
    riverSection: 'Upper Ganga',
  },
  {
    id: '2',
    name: 'Haridwar',
    coordinates: { lat: 29.9457, lng: 78.1642 },
    riverSection: 'Upper Ganga',
  },
  {
    id: '3',
    name: 'Varanasi',
    coordinates: { lat: 25.3176, lng: 82.9739 },
    riverSection: 'Middle Ganga',
  },
  {
    id: '4',
    name: 'Patna',
    coordinates: { lat: 25.5941, lng: 85.1376 },
    riverSection: 'Lower Ganga',
  },
];

export const generateMockData = (locationId) => {
  const location = locations.find(loc => loc.id === locationId)?.name || '';
  return {
    location,
    ph: 6.5 + Math.random() * 2,
    dissolvedOxygen: 4 + Math.random() * 4,
    temperature: 20 + Math.random() * 10,
    turbidity: 5 + Math.random() * 15,
    conductivity: 200 + Math.random() * 300,
    waterLevel: 2 + Math.random() * 3,
    flowRate: 100 + Math.random() * 200,
    totalDissolvedSolids: 150 + Math.random() * 250,
    timestamp: new Date().toISOString(),
  };
};