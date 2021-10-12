import "./style.css";
import { Link, useParams } from "react-router-dom";
import { useEvents } from "../../Providers/Events";
import Product from "../../components/Product";

const Event = () => {
  let { name } = useParams();
  const { events } = useEvents();

  const event = events.find((evento) => evento.name === name);

  return (
    <>
      <div>
        <h3>Event details:</h3>

        <h1>{event.name}</h1>
        <div className="container">
          {event.drinkList.length > 0 &&
            event.drinkList.map((drink) => {
              return <Product key={drink.id} produto={drink} isRemovable />;
            })}
        </div>
      </div>
      <Link to="/events">
        <button>Back</button>
      </Link>
    </>
  );
};
export default Event;
