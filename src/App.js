import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Intro from "./components/Intro/Intro";
import "./App.css";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";

window.addEventListener("scroll", () => {
  const topBorder = document
    .getElementById("navbar-container")
    .getBoundingClientRect().top;

  topBorder >= 0
    ? document.getElementById("Navbar").classList.remove("fixed")
    : document.getElementById("Navbar").classList.add("fixed");
});

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Home />
      <Intro />
      <Services />
      <Experience />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
