import Components from "./components/Components";
import CountProvider from "./CountProvider";

function App() {
  return (
    <CountProvider>
      <Components/>
    </CountProvider>
  );
}

export default App;
