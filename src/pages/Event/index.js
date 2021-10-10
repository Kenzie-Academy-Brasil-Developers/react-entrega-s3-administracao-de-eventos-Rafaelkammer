import "./style.css";
import { Link, useParams } from "react-router-dom";
import { useEvents } from "../../Providers/Events";
import Product from "../../components/Product";

const Event = () => {
  let { name } = useParams();
  const { events } = useEvents();

  const event = events.find((evento) => evento.name === name);

  return (
    <div className="eventcontainer">
      <h3>Event details:</h3>

      <h1>{event.name}</h1>

      {event.drinkList.length > 0 &&
        event.drinkList.map((drink) => {
          return <Product key={drink.id} produto={drink} />;
        })}

      <Link to="/events">
        <button>Voltar</button>
      </Link>
    </div>
  );
};
export default Event;
