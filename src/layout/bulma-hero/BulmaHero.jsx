import Navbar from "@/layout/bulma-hero/components/navbar/index";

import "@/layout/bulma-hero/BulmaHero.scss";

function BulmaHero({ children }) {
  return (

    <>
      
      <section className="hero is-primary is-fullheight">
        
        <div className="hero-head">
          <Navbar />  
        </div>
        
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-full-mobile is-7 has-text-centered mb-2-mobile">
                <div className="title has-text-primary-light">Book your appointment.</div>
                <div className="subtitle has-text-dark">
                  and put your mind at
                  <span className="has-text-primary-light has-text-weight-bold">ease</span>
                </div>
              </div>
              <div className="column is-full-mobile is-5">
                <div className="card">
                  <div className="card-content">
                    <div className="content">
                      {children}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>

        <div className="hero-foot">
          <div className="container has-text-centered">
            <p>&copy; 2026 footer.</p>
          </div>
        </div>
      </section>
    </>
  )
};

export default BulmaHero;