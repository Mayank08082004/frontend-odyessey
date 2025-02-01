import React, { useState, useEffect } from "react";

export default function HospitalConnect() {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    // Simulating an API call to fetch hospital data
    const fetchHospitals = async () => {
      const data = [
        {
          name: "Apollo Hospital",
          doctors: 100,
          beds: 500,
          icuBeds: 50,
          ventilators: 20,
          image: "https://cdn.usegalileo.ai/sdxl10/a589640a-5570-4b8c-89cd-c0973401f344.png",
        },
        {
          name: "Fortis Hospital",
          doctors: 200,
          beds: 700,
          icuBeds: 70,
          ventilators: 30,
          image: "https://cdn.usegalileo.ai/sdxl10/7d132804-58e7-4ca7-b012-666f66114879.png",
        },
        {
          name: "Max Hospital",
          doctors: 300,
          beds: 600,
          icuBeds: 60,
          ventilators: 25,
          image: "https://cdn.usegalileo.ai/sdxl10/cfffab07-aa11-4642-bd86-dcb83eb541ae.png",
        },
      ];
      setHospitals(data);
    };

    fetchHospitals();
  }, []);

  return (
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
      <link
        rel="stylesheet"
        as="style"
        onLoad={(e) => e.target.rel = "stylesheet"}
        href="https://fonts.googleapis.com/css2?display=swap&family=Epilogue%3Awght%40400%3B500%3B700%3B900&family=Noto+Sans%3Awght%40400%3B500%3B700%3B900"
      />
      <title>Galileo Design</title>
      <div className="relative flex min-h-screen flex-col bg-white overflow-x-hidden px-4 sm:px-10 py-5" style={{ fontFamily: 'Epilogue, "Noto Sans", sans-serif' }}>
        <header className="flex items-center justify-between border-b border-gray-300 pb-4 mb-6">
          <h2 className="text-gray-900 text-2xl font-bold">MediMitra</h2>
        </header>
        <div className="max-w-5xl mx-auto flex-grow">
          <h2 className="text-gray-900 text-3xl font-bold mb-6">Hospital Connect</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hospitals.map((hospital, index) => (
              <div key={index} className="bg-gray-100 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                {/* Hospital Image */}
                <div className="w-full h-48 bg-cover bg-center" style={{ backgroundImage: `url(${hospital.image})` }} />

                {/* Hospital Details */}
                <div className="p-6">
                  <p className="text-lg font-semibold text-gray-900 mb-2">{hospital.name}</p>
                  <p className="text-gray-700 mb-4">{hospital.doctors} doctors</p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-white rounded-lg shadow">
                      <p className="text-gray-700 text-sm">Beds Available</p>
                      <p className="text-xl font-bold text-gray-900">{hospital.beds}</p>
                    </div>
                    <div className="p-3 bg-white rounded-lg shadow">
                      <p className="text-gray-700 text-sm">ICU Beds Available</p>
                      <p className="text-xl font-bold text-gray-900">{hospital.icuBeds}</p>
                    </div>
                    <div className="p-3 bg-white rounded-lg shadow">
                      <p className="text-gray-700 text-sm">Ventilators Available</p>
                      <p className="text-xl font-bold text-gray-900">{hospital.ventilators}</p>
                    </div>
                  </div>

                  {/* View Button */}
                  <button className="mt-6 w-full bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
