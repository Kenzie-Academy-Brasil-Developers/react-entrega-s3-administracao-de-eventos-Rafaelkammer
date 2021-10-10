import "./style.css";

import { useEvents } from "../../Providers/Events";
import { Link } from "react-router-dom";

const Events = () => {
  const { events } = useEvents();

  return (
    <ul>
      <li>
        {/* <Link> */}
        <button>New Event</button>
        {/* </Link> */}
      </li>
      {events.map((evento) => {
        return (
          <li key={evento.name}>
            <Link to={`/event/${evento.name}`}>
              <button>{evento.name}</button>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default Events;
