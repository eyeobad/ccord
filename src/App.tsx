import Header from "./components/Header";
import Hero from "./components/Hero";
import AppBanner from "./components/Appdownload";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Firstsegment from "./components/Firstsegment"

export default function App() {
  return (
    <main>
      {/* blur */}
    
     <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10">
      </div>
      <Header />
      <Hero/>
      <Firstsegment/>
      <Pricing />
      <AppBanner/>
      
      <Footer />
      {/* Add more components as needed */}
    </main>
  )
}