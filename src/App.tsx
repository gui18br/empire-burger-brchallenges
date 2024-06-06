import { Header } from "./components/doom/header/Header";
import { Body } from "./components/doom/body/Body";
import { Footer } from "./components/doom/footer/Footer";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="bg-[#FAF3F2]">
      <Header />
      <Body />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
