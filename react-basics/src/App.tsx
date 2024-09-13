import { useState } from "react";
import NavBar from "./components/NavBar";
import ShoppingCart from "./components/ShoppingCart";
import Button from "./components/Button";
import Paragraph from "./components/Paragraph";

function App() {
  const [cartItems, setCartItems] = useState(["Item 1", "Item 2"]);
  const [display, setDisplay] = useState(false);
  const [maxChar, setMaxChar] = useState(10);
  const handleClear = () => {
    setCartItems([]);
  };
  const handleClick = () => {
    let count = cartItems.length + 1;
    setCartItems([...cartItems, "Item " + count]);
  };

  return (
    <div>
      <NavBar itemCount={cartItems.length} />
      <br />
      <ShoppingCart cartItems={cartItems} onClear={handleClear} />
      <br />
      <Button color="primary" onClick={handleClick}>
        Click Me
      </Button>
      <br />
      <Paragraph>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea mollitia
        doloremque soluta cupiditate. Aliquid animi, reprehenderit iste veniam
        beatae repellendus reiciendis ex sunt accusamus ducimus excepturi
        accusantium dolorem! Iusto, in?
      </Paragraph>
    </div>
  );
}

export default App;
