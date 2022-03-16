import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Work from "./Work";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Blog />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
