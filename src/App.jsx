import { useState, useEffect } from "react";
import AppointmentForm from "@/features/appointment-form/index";
import BulmaHero from "@/layout/bulma-hero/index";

import api from "@/api";

import '@/App.scss';

function App() {

  const [appointments, setAppointments] = useState([]);

  const onSubmit = (data) => {
    setAppointments([
      ...appointments,
      data
    ]);
  };
  
  useEffect(() => {
    const getAppointments = async () => {
      try {
        const response = await api.get("/appointments");
        const results = response.data?.data;
        console.log(results)
        setAppointments(results);
      } catch(error) {
        console.error("Error fetching appointments:", error);
      }
    }

    getAppointments();
  }, []);

  return (
    <>
      <BulmaHero 
        children={<AppointmentForm onSubmit={onSubmit} />} 
      />
    </>
  )
};

export default App;
