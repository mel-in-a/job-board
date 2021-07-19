import "./App.css";
import Header from "./Header";
import Jobs from "./Jobs";
import Footer from "./Footer";

function App() {
  return (
    <div className="content">
      <Header title="Job Board" />
      <Jobs />
      <Footer />
    </div>
  );
}

export default App;
