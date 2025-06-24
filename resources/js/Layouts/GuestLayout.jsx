import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-white dark:bg-gray-200">

            <header className="text-black px-6 py-4">
                <h1 className="text-6xl font-bold">Hospital at Perlis</h1>
            </header>

            <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" reduction={0.6}/>
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-300 shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>

        </div>
    );
}
