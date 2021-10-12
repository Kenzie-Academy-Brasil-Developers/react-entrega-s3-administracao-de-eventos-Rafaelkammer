import { AddToProvider } from "./AddTo";
import { EventsProvider } from "./Events";
import { ProductListProvider } from "./ProductList";
import { RemoveFromProvider } from "./RemoveFrom";

const Providers = ({ children }) => {
  return (
    <ProductListProvider>
      <EventsProvider>
        <AddToProvider>
          <RemoveFromProvider>{children}</RemoveFromProvider>
        </AddToProvider>
      </EventsProvider>
    </ProductListProvider>
  );
};

export default Providers;
