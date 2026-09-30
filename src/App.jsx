import { useState, useEffect } from "react";
import Header from "@/layout/header/index";
import AppointmentForm from "@/features/appointment-form/index";
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
      <main className="page-container">
        <section className="section">
          <div className="container">
            <div className="columns is-8-mobile is-2-desktop is-vcentered">
              <div className="column">
                <div className="block">
                  <div className="title has-text-primary">Book your appointment.</div>
                  <div className="subtitle has-text-dark">and put your mind at <span className="has-text-primary has-text-weight-bold">ease</span></div>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div className="card-content">
                    <div className="content">
                      <AppointmentForm onSubmit={onSubmit} />
                    </div>
                  </div>  
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
};

export default App;
