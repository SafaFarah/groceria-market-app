import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import AppLayout from './pages/AppLayout'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductPage from './pages/ProductPage'
import SearchResults from './pages/SearchResults'
import SpecialOffers from './pages/SpecialOffers'
import Checkout from './pages/Checkout'
import MyOrder from './pages/MyOrders'
import OrderTracking from './pages/OrderTracking'
import Addresses from './pages/Addresses'
import ProtectRoute from './components/ProtectRoute'

const App = () => {
  return (
    <>
    < Toaster position= "top-right" toastOptions={{duration:3000 ,style: {
      background: "#1B3022", color: "#fff", borderRadius: "12px", 
      fontSize: "14px"}}}/>
    <Routes>
      {/* Auth pages */}
      <Route path='/login' element={<Login />} />
      {/* main page - with Navbar and Footer */}
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path='products' element={<Products />} />
        <Route path='products/:id' element={<ProductPage />} />
        <Route path='search' element={<SearchResults />} />
        <Route path='offers' element={<SpecialOffers />} />
        <Route element={<ProtectRoute />}>
          <Route path='checkout' element={<Checkout />} />
          <Route path='myOrders' element={<MyOrder />} />
          <Route path='orders/:id' element={<OrderTracking />} />
          <Route path='addresses' element={<Addresses />} />
        </Route>
      </Route>
    </Routes>
    </>
  )
}

export default App