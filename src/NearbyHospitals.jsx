import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import HospitalCard from "./Hospitals";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function NearbyHospitals() {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
  });
  const [hospitalData, setHospitalData] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setLocation({ latitude, longitude });
          console.log(latitude, longitude); // Optional: for debugging
        },
        function (error) {
          console.error(error); // Handle geolocation error
        }
      );
    }
  }, []);

  useEffect(() => {
    if (location.latitude && location.longitude) {
      getNearbyHospitals();
    }
  }, [location]);

  async function getNearbyHospitals() {
    try {
      const res = await axios.post(
        // `http://localhost:4000/nearby-hospital`,
        `https://sympto-scan-jc6q.vercel.app//nearby-hospital`,
        location,
      );
      console.log(res.data.hospitalData);
      setHospitalData(res.data.hospitalData);
    } catch (error) {
      console.error("Error fetching hospital data:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-9">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Nearby Hospitals
        </h1>
        {loading && (
        <div className="flex w-full items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      )}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hospitalData.map((hospital) => (
            <HospitalCard
              key={hospital.id}
              id={hospital.id}
              name={hospital.name}
              phone={hospital.phone}
              latitude={hospital.latitude}
              longitude={hospital.longitude}
            />
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}