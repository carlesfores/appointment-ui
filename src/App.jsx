import { useState } from "react";
import Header from "@/layout/header/index";
import AppointmentForm from "@/features/appointment-form/index";
import AppointmentList from "@/features/appointment-list/index";

import '@/App.scss';

function App() {

  const [appointments, setAppointments] = useState([]);

  const onSubmit = (data) => {
    setAppointments([
      ...appointments,
      data
    ]);
  };

  const onReset = () => {
    setAppointments([]);
  };

  return (
    <>
      <Header />
      <main className="container is-fullhd">
        <section className="section">
          <div className="title">Start appointment</div>
          <div className="subtitle">Start appointment</div>
          <AppointmentForm onSubmit={onSubmit} />
        </section>
        <section className="section">
          <div className="title">Appointments</div>
          <div className="subtitle">Appointment List</div>
          <AppointmentList list={appointments} onReset={onReset} />
        </section>
      </main>
    </>
  )
}

export default App
