import "@/layout/bulma-hero/components/navbar/Navbar.scss";

function Navbar() {
  return (
      <nav class="navbar">
        <div class="container">
          <div id="navMenu" class="navbar-menu">
            <div class="navbar-start">
              <div class="navbar-brand">
                  <a class="navbar-item">
                    APPOINTMENT UI
                  </a>
              </div>
            </div>
            <div class="navbar-end">
              <div class="navbar-item">
                <div class="buttons">
                  <a class="button is-dark">Github</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
  )
};

export default Navbar;