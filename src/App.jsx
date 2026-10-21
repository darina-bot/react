import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Routing } from "./routing/Routing";


export function App() {
  return (
    <div className="layout">
      <Header />
      <Routing />
      <Footer />
    </div>
  );
}


