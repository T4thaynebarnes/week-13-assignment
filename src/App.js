import "./App.css";
import LoginForm from "./components/loginForm";
import Navbar from "./components/nav-bar";
function App() {
  return (
    <div className="App">
      {/* calling the classes in JSX */}
      <Navbar />
      <LoginForm />
    </div>
  );
}

export default App;
