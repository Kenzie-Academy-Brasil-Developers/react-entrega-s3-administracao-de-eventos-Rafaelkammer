import { EventsProvider } from "./Events";
import { ProductListProvider } from "./ProductList";

const Providers = ({ children }) => {
  return (
    <ProductListProvider>
      <EventsProvider>{children}</EventsProvider>
    </ProductListProvider>
  );
};

export default Providers;
