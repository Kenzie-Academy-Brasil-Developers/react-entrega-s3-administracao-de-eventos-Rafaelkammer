import { createContext, useState, useContext } from "react";

const EventsContext = createContext();

const initialState = [
  {
    name: "Graduation",
    drinkList: [],
  },
  {
    name: "Wedding",
    drinkList: [],
  },
  {
    name: "Confraternization",
    drinkList: [],
  },
];

export const EventsProvider = ({ children }) => {
  const [events, setEvents] = useState(initialState);

  return (
    <EventsContext.Provider value={{ events, setEvents }}>
      {children}
    </EventsContext.Provider>
  );
};

export const useEvents = () => useContext(EventsContext);
