import NavBar from "./components/navbar/NavBar";
import Footer from "./components/Footer/Footer";
import ItemsContext from "./context/ItemsProvider";
import CartContext from "./context/CartProvider";
import SuscriptorsProvider from "./context/SuscriptorsProvider";

function App() {
  return (
    <CartContext>
      <ItemsContext>
         <SuscriptorsProvider>
          <NavBar/>
          <Footer/>
        </SuscriptorsProvider>
      </ItemsContext>
    </CartContext>
  );
}

export default App;