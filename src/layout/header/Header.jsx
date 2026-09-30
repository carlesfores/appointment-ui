import "@/layout/header/Header.scss";

function Header() {
  return (
    <div className="navbar is-primary">
      <div className="navbar-brand">
        <div 
          className="
            navbar-item 
            is-size-4 
            is-family-secondary 
            has-text-white 
            has-text-weight-bold
          "
        >
          Brand Logo
        </div>
      </div>
    </div>  
  )
};

export default Header;