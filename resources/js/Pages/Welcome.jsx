import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth }) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome to Hospital at Perlis" />
            <div className="bg-white text-gray-900">
                <div className="relative min-h-screen flex flex-col items-center justify-center">
                    <div className="relative w-full max-w-7xl px-6 lg:px-8">
                        {/* Header Section */}
                        <header className="flex items-center justify-between py-8">
                            <div className="flex items-center space-x-4">
                                <img
                                    src="/ff.png"
                                    alt="Hospital Perlis Logo"
                                    className="h-11 w-auto"
                                />
                                <span className="text-2xl font-bold text-White">Hospital Perlis</span>
                            </div>

                            <nav className="flex items-center space-x-6">
                                <Link
                                    href="/about"
                                    className="text-gray-600 hover:text-[#4CAF50] transition-colors"
                                >
                                    About Us
                                </Link>
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="px-4 py-2 rounded-lg bg-[#4CAF50] text-white hover:bg-[#45a049] transition-colors"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="px-4 py-2 text-gray-600 hover:text-White transition-colors"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="px-4 py-2 rounded-lg bg-[#4BAF60] text-white hover:bg-White transition-colors"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>

{/* Main Content */}
<main className="py-16 bg-gradient-to-b from-blue-50 to-white">
    <div className="text-center mb-16">
        <h1 className="flex justify-center items-center mb-6">
            <img src="/dobi2.png" alt="Hospital Perlis Logo" className="h-32 w-32" />
        </h1>
        <p className="text-2xl text-blue-900 max-w-2xl mx-auto font-medium">
            Providing Compassionate Healthcare Excellence in Perlis
        </p>
    </div>

    {/* Services Grid */}
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 px-8">
        {/* Emergency Care */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-transform transform hover:scale-105">
            <div className="bg-blue-100 p-4 rounded-lg w-max mb-4 mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-blue-900">24/7 Emergency Care</h3>
            <p className="text-gray-600">Immediate medical attention with state-of-the-art facilities</p>
        </div>

        {/* Specialist Consultation */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-transform transform hover:scale-105">
            <div className="bg-blue-100 p-4 rounded-lg w-max mb-4 mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-blue-900">Specialist Consultation</h3>
            <p className="text-gray-600">Expert care from qualified medical specialists</p>
        </div>

        {/* Maternity Services */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-transform transform hover:scale-105">
            <div className="bg-blue-100 p-4 rounded-lg w-max mb-4 mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.326a7.5 7.5 0 110 15.348 7.5 7.5 0 010-15.348zm0 0L15 7l-3-2.674L9 7l3-2.674z"/>
                </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-blue-900">Maternity Care</h3>
            <p className="text-gray-600">Comprehensive mother and baby care services</p>
        </div>

        {/* Health Screening */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-transform transform hover:scale-105">
            <div className="bg-blue-100 p-4 rounded-lg w-max mb-4 mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-blue-900">Health Screening</h3>
            <p className="text-gray-600">Preventive health checks and diagnostics</p>
        </div>
    </div>
</main>

{/* Footer */}
<footer className="py-12 bg-blue-900 text-white">
    <div className="flex justify-center">
        <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="flex justify-center space-x-6 mb-4">
                <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    <span>04-977 8000</span>
                </div>
                <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    <span>info@hosp.perlis.gov.my</span>
                </div>
            </div>
            <div className="flex justify-center space-x-6 mt-6">
                <a href="https://facebook.com" className="hover:text-blue-200 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
                    </svg>
                </a>
                <a href="https://twitter.com" className="hover:text-blue-200 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/>
                    </svg>
                </a>
                <a href="https://instagram.com" className="hover:text-blue-200 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
    <div className="mt-8 text-center text-sm text-blue-200">
        © {new Date().getFullYear()} Hospital Negeri Perlis. Dedicated to Community Health
    </div>
</footer>
                    </div>
                </div>
            </div>
        </>
    );
}
