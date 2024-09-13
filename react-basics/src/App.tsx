import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["India", "US", "UK", "Nepal", "Japan"];
  const handleSelectItem = (item: string) => console.log(item);

  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>ALERT</Alert>
      )}
      <Button color="secondary" onClick={() => setAlertVisible(true)}>
        Hello
      </Button>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
