import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibilitiy] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibilitiy(false)}>My alert</Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisibilitiy(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
