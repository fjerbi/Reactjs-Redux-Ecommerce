import Homepage from "./pages/homepage/homepage.component";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header-component";
import SignInAndSignUpPage from "./pages/signin-signout/signin-signout";

const HatsPage = () => <div>Hats Page</div>;

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/auth" component={SignInAndSignUpPage} />
      </Router>
    </div>
  );
}

export default App;
