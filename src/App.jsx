import Footer from "./Components/Footer"
import Main from "./Components/Main"
import Navbar from "./Components/Navbar"
import Products from "./Components/Products"
import Promo from "./Components/Promo"

function App() {
  return (
    <div className="font-serif">
      <Navbar />
      <Main />
      <Products />
      <Promo />
      <Footer />
    </div>
  )
}

export default App