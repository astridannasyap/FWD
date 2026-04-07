import Book from "../components/shared/Book";
import Contact from "../components/shared/Contact";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import Hero from "../components/shared/Hero";
import Stats from "../components/shared/Stats";
import Team from "../components/shared/Team";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <Book />
      <Team />
      <Contact />
      <Footer />
    </>
  )
}