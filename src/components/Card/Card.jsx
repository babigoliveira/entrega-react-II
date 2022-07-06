import "./Card.css";

function Card({ title, image, children }) {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <img className="card-image" src={image} />
      <p className="card-text">{children}</p>
    </div>
  );
}

export default Card;
