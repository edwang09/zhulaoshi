import React from "react";
import "./global.scss";
import Header from "./components/header"
import Footer from "./components/footer"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from "./pages/home"
class App extends React.Component{
  render(){
    return(
<Router>
      <div>

        <Header/>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        <Footer/>
      </div>
    </Router>
    );
  }
}

export default App;