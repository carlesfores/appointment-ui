import Header from "@/layout/header/index";
import Appointment from "@/features/appointment/index";
import '@/App.scss';

function App() {

  return (
    <>
      <div className="page-content">
        <Header />
        <main className="page-main">
          <Appointment />
        </main>
      </div>
    </>
  )
}

export default App
