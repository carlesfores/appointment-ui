import Header from "@/layout/header/index";
import Card from "@/components/card/index";
import '@/App.scss';

function App() {

  return (
    <>
      <div className="page-content">
        <Header />
        <main className="page-main">
          <section>
            <Card>
              test card content
            </Card>
          </section>
        </main>
      </div>
    </>
  )
}

export default App
