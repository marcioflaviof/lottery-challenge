import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./components/organisms/Home";

import "./style.css";

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
