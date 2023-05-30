import "./App.css";
import Todo from "./Component/Todo";
import Header from "./Component/Partial/Header";
import Footer from './Component/Partial/Footer'
import Tictak from "./Component/Tictak";
function App() {
 

  return (
    <div>
    <Header />
    <Todo />
    <Tictak />
    <Footer />
    </div>
  );
}

export default App;
