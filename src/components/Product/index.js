import "./style.css";

import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useAddTo } from "../../Providers/AddTo";
import { useRemoveFrom } from "../../Providers/RemoveFrom";

const Product = ({ produto, isRemovable = false }) => {
  const {
    id,
    image_url,
    name,
    first_brewed,
    description,
    volume: { value, unit },
  } = produto;

  const { setAddTo } = useAddTo();
  const { setRemoveFrom } = useRemoveFrom();

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
        <Link key={id} to={`/remove`}>
          <Button
            variant="contained"
            color="inherit"
            onClick={() => setRemoveFrom(produto)}
          >
            Remove
          </Button>
        </Link>
      ) : (
        <Link key={id} to={`/add`}>
          <Button
            variant="contained"
            color="inherit"
            onClick={() => setAddTo(produto)}
          >
            Add to event
          </Button>
        </Link>
      )}
    </div>
  );
};

export default Product;
