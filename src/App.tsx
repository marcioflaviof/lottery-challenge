import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./components/organisms/Home";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
