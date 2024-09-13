import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import ListGroup1 from "./components/ListGroup/ListGroup1";
import Like from "./components/Like";

function App() {
  let items = ["India", "US", "UK", "Nepal", "Japan"];
  const handleSelectItem = (item: string) => console.log(item);

  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>ALERT</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisible(true)}>
        Hello
      </Button>
      <Like />
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <ListGroup1
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
