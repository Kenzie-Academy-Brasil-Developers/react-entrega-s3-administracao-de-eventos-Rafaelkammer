import { useEvents } from "../../Providers/Events";
import { useHistory as history, useParams } from "react-router-dom";
import { useProductList } from "../../Providers/ProductList";

const AddPage = () => {
  const { drink } = useParams();
  const { events, setEvents } = useEvents();
  const { productList } = useProductList();

  const handleAdd = (evento) => {
    const event = events.find((element) => element.name === evento.name);
    const product = productList.find((element) => element.id === drink);
    console.log(event, product, drink);
    event.drinkList.push(product);
  };

  return (
    <ul>
      {events.map((evento) => {
        return (
          <li key={evento.name}>
            <button onClick={() => handleAdd(evento)}>{evento.name}</button>
          </li>
        );
      })}
    </ul>
  );
};
export default AddPage;
