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
      <div className="page-content">
        <Header />
        <main className="page-main">
          <h2>Lets go</h2>
          <h3>Appointment Form</h3>
          <section className="page-section">
            <AppointmentForm onSubmit={onSubmit} />
          </section>
          <h3>Appointment List</h3>
          <section className="page-section">
            <AppointmentList list={appointments} onReset={onReset} />
          </section>
        </main>
      </div>
    </>
  )
}

export default App
