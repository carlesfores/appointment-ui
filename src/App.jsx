import { useState, useEffect } from "react";
import Header from "@/layout/header/index";
import AppointmentForm from "@/features/appointment-form/index";
import AppointmentList from "@/features/appointment-list/index";
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
      <Header />
      <main className="container is-fullhd">
        <section className="section">
          <div className="title">Start appointment</div>
          <AppointmentForm onSubmit={onSubmit} />
        </section>
        <section className="section">
          <div className="title">Appointments</div>
          <AppointmentList list={appointments} />
        </section>
      </main>
    </>
  )
}

export default App
