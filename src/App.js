import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import AppStore from "./Utils/AppStore";

function App() {
  return (
    <Provider store={AppStore}>
      <Body />
    </Provider>
  );
}

export default App;
