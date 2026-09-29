import Header from "@/layout/header/index";
import Appointment from "@/features/appointment/index";
import '@/App.scss';

function App() {

  return (
    <>
      <div className="page-content">
        <Header />
        <main className="page-main">
          <section className="page-section">
            <Appointment />
          </section>
        </main>
      </div>
    </>
  )
}

export default App
