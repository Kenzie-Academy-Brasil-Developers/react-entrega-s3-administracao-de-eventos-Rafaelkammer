import { useEvents } from "../../Providers/Events";
import { Link } from "react-router-dom";
import { useRemoveFrom } from "../../Providers/RemoveFrom";

const RemovePage = () => {
  const { events } = useEvents();
  const { removeFrom, setRemoveFrom } = useRemoveFrom();

  const handleAdd = (evento) => {
    const event = events.find((element) => element.name === evento.name);
    event.drinkList = event.drinkList.filter((element) => {
      return element.id !== removeFrom.id;
    });
    setRemoveFrom({});
  };

  return (
    <ul>
      <h1>Remove from:</h1>
      {events.map((evento) => {
        return (
          <li key={evento.name}>
            <Link to={`/event/${evento.name}`}>
              <button onClick={() => handleAdd(evento)}>{evento.name}</button>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default RemovePage;
