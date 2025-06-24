import { useState, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    const { data, setData, post } = useForm({
        lat: 6.4485680435702575,
        lng: 100.28012124888713,
        operatorName: '',
        menu: '',
        schedule: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value); // Correctly update the state
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('marker.create'));
    };

    const [mapCenter, setMapCenter] = useState({
        lat: 6.4485680435702575, lng: 100.28012124888713
    });

    const onMapClick = useCallback((e) => {
        const newCenter = { lat: e.latLng.lat(), lng: e.latLng.lng() };
        setMapCenter(newCenter);
        setData('lat', newCenter.lat); // Update lat
        setData('lng', newCenter.lng); // Update lng
    }, [setData]);

    const handleDetectLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const newCenter = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                setMapCenter(newCenter);
                setData('lat', newCenter.lat); // Update lat
                setData('lng', newCenter.lng); // Update lng
            });
        }
    };

    const mapStyles = {
        height: "400px",
        width: "100%",
        borderRadius: '8px',
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Hospital Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6 space-y-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="mb-4">
                                <label className="block text-gray-700 dark:text-gray-400">Hospital Name</label>
                                <input
                                    type="text"
                                    name="operatorName" // Match the key in `data`
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={data.operatorName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 dark:text-gray-400">Services</label>
                                <input
                                    type="text"
                                    name="menu" // Match the key in `data`
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={data.menu}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 dark:text-gray-400">Open Time</label>
                                <input
                                    type="text"
                                    name="schedule" // Match the key in `data`
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={data.schedule}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 dark:text-gray-400">Latitude</label>
                                <input
                                    type="number"
                                    name="lat"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={data.lat}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 dark:text-gray-400">Longitude</label>
                                <input
                                    type="number"
                                    name="lng"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={data.lng}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="flex space-x-4">
                                <button
                                    type="button"
                                    onClick={handleDetectLocation}
                                    className="mb-4 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    Detect My Location
                                </button>
                                <button
                                    type="submit"
                                    className="mb-4 px-6 py-3 bg-green-500 text-white rounded-lg shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>

                        <LoadScript googleMapsApiKey="AIzaSyC1W2iXzdcitHKgvVUrBWRvC64oV642Poo">
                            <GoogleMap
                                mapContainerStyle={mapStyles}
                                zoom={13}
                                center={mapCenter}
                                onClick={onMapClick}
                            >
                                <Marker position={mapCenter} />
                            </GoogleMap>
                        </LoadScript>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
