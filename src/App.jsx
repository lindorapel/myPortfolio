import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <BrowserRouter>
      <div className="container flex flex-col lg:flex-row justify-between w-full mx-auto sm:px-12 sm:py-12 font-sans md:px-12 md:py-20 lg:gap-4 lg:px-24 py-8 lg:py-0">
        <Header />
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
