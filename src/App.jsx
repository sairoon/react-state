import "./App.css";
import Hero from "./components/Hero";
import Password from "./components/Password";
import Counter from "./components/counter/Counter";
import Navbar from "./components/include/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container mx-auto ">
        <div className=" flex justify-center items-center">
          <Counter />
        </div>
        <div className="flex justify-center">
          <Password />
        </div>
      </div>
    </>
  );
}

export default App;
