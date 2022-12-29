import Homepage from "./pages/homepage/homepage.component";
import { Route } from "react-router-dom";
const HatsPage = () => <div>Hats Page</div>;

function App() {
  return (
    <div>
      <Route exact path="/" component={Homepage}/>
    </div>
  );
}

export default App;
