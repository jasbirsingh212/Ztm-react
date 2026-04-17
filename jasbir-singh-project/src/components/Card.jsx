const Card = ({ src, name, email }) => {
  return (
    <div className="card">
      <img src={src} alt={name} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
