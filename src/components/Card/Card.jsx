const Card = ({ gadget }) => {
    return (
      <div className="card">
        <p>Rating: {gadget.rating}</p> 
      </div>
    );
  };
  
  export default Card;
  