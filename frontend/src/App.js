import "./App.css";
import Login from "./Login";
import Signup from "./Signup";
import { Switch, Route } from "react-router";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <>
      <Container maxwidth="md">
        <div className="app">
          <Switch>
            <Route path="/signup" exact component={Signup} />
            <Route path="/login" exact component={Login} />
          </Switch>
        </div>
      </Container>
    </>
  );
}

export default App;
