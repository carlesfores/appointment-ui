import "@/components/card/Card.scss";

function Card({children}) {

  return(
    <div className="card">
      <div className="card__content">
        {children}
      </div>
    </div>
  );
}

export default Card;