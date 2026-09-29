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
          <h1 className="title is-1">Lets go</h1>
          <h2 className="title is-2">Appointment Form</h2>
          <section className="page-section">
            <AppointmentForm onSubmit={onSubmit} />
          </section>
          <h2 className="title is-2">Appointment List</h2>
          <section className="page-section">
            <AppointmentList list={appointments} onReset={onReset} />
          </section>
        </main>
      </div>
    </>
  )
}

export default App
