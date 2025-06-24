import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';

export default function Marker({ auth, markers }) {

    console.log("Markers Data:", markers);  // Debugging markers data

    const handleEdit = (id) => {
        router.get(route('marker.edit', { id })); // Ensure ID is correctly passed
    };

    const handleDelete = (id) => {
        console.log("Deleting ID:", id);
        if (confirm('Are you sure you want to delete this Hospital?')) {
            router.delete(route('marker.destroy', { id }));
        }
    };

    return (
        <div className="bg-white min-h-screen dark:bg-gray-100">
            <AuthenticatedLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Hospital at Perlis</h2>}
            >
                <Head title="Hospital Perlis" />

                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                        <div className="p-4 sm:p-8 bg-white dark:bg-gray-100 shadow sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead className="bg-gray-50 dark:bg-gray-200">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">No</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Hospital Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Services</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Operation Time</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white dark:bg-gray-100 divide-y divide-gray-200 dark:divide-gray-300">
                                    {markers.length > 0 ? (
                                        markers.map((marker, index) => (
                                            <tr key={marker.id}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{marker.operator_name || 'N/A'}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{marker.menu || 'N/A'}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{marker.schedule || 'N/A'}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                    <button onClick={() => handleEdit(marker.id)} className="text-indigo-600 hover:text-indigo-900">
                                                        Edit
                                                    </button>
                                                    <button onClick={() => handleDelete(marker.id)} className="ml-4 text-red-600 hover:text-red-900">
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="5" className="px-6 py-4 text-center text-gray-500">No hospitals found</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </div>
    );
}
