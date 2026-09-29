import { useState } from "react";
import Form from "@/features/appointment/components/form";
import List from "@/features/appointment/components/list";

import "./Appointment.scss";

function Appointment() {

  const [appointments, setAppointments] = useState([]);

  const onSubmit = (data) => {
    setAppointments([
      ...appointments,
      data
    ]);
  }

  return (
    <div className="appointment">
      <h2>Appointment Form</h2>
      <Form onSubmit={onSubmit} />
      <h2>Appointment List</h2>
      <List items={appointments}/>
    </div>
  );
}

export default Appointment;