import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home/Home"
import Cart from "./pages/Cart/Cart"

function App() {

  return (
    <div className="">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
