// import About from "./components/About";
// import Footer from "./components/Footer";
// import Hero from "./components/Hero";
// import Navbar from "./components/Navbar";
// import Skills from "./components/Skills";
import ProfileCard from "./components/ProfileCard";
import ProductCard from "./components/ProuductCard";
import Counter from "./components/Counter";



function App() {
  return (
    <>
    {/* <Navbar />
    <Hero />
    <Skills />
    <About />
    <ProfileCard />
    <Footer /> */}

    <ProfileCard
      name="Niraj"
      role="Backend dev"
      age={19}
      location= "Lko"
      imageUrl=""
    />

    <ProfileCard
      name="Mayank"
      role="NEET aspirant"
      age={17}
      location= "Gzp"
      imageUrl=""
    />
  
    <ProductCard
      price={1000}
      description="mechanical keyboard"
      image=""
      inStock={true}
    />

    <ProductCard
      price={30000}
      description="monitor"
      image=""
      inStock={false}
    />

    <ProductCard
      price={4500}
      description="Table"
      image=""
      inStock={true}
    />
    <Counter />

    </>
  )
}

export default App
