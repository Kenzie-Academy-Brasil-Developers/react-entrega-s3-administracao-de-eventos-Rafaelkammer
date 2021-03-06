import { useEvents } from "../../Providers/Events";
import { Link } from "react-router-dom";
import { useAddTo } from "../../Providers/AddTo";

const AddPage = () => {
  const { events } = useEvents();
  const { addTo, setAddTo } = useAddTo();

  const handleAdd = (evento) => {
    const event = events.find((element) => element.name === evento.name);
    if (!event.drinkList.find((element) => element === addTo)) {
      event.drinkList = [...event.drinkList, addTo];
      setAddTo({});
    }
  };

  return (
    <ul>
      <h1>Add to:</h1>
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
export default AddPage;
