import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./style.css";

const Product = ({
  produto: {
    id,
    image_url,
    name,
    first_brewed,
    description,
    volume: { value, unit },
  },
  isRemovable = false,
}) => {
  return (
    <div className="card">
      <div>
        <div className="imgcontainer">
          <img src={image_url} alt={name} />
        </div>
        <h2>
          {name} - {value} {unit}
        </h2>
      </div>
      <p>{description}</p>
      <p>First brewed: {first_brewed}</p>
      {isRemovable ? (
        <Button
          variant="contained"
          color="inherit"
          // onClick={() => dispatch(addToCartThunk(product))}
        >
          Remove
        </Button>
      ) : (
        <Link key={id} to={`/add/${id}`}>
          <Button
            variant="contained"
            color="inherit"

            // onClick={() => dispatch(removeFromCartThunk(id))}
          >
            Add to event
          </Button>
        </Link>
      )}
    </div>
  );
};

export default Product;
