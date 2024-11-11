import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import ProductListPage from './pages/ProductListPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import UserProfilePage from './pages/user/UserProfilePage'
import UserOrdersPage from './pages/user/UserOrdersPage'
import UserOrderDetailsPage from './pages/user/UserOrderDetailsPage'
import UserCartDetailsPage from './pages/user/UserCartDetailsPage'
import ProtectedRoutesComponent from './components/ProtectedRoutesComponent'
import AdminAnalyticsPage from './pages/admin/AdminAnalyticsPage'
import AdminChatsPage from './pages/admin/adminChatsPage'
import AdminCreateProductPage from './pages/admin/AdminCreateProductPage'
import AdminEditProductPage from './pages/admin/AdminEditProductPage'
import AdminEditUserPage from './pages/admin/AdminEditUserPage'
import AdminOrderDetailsPage from './pages/admin/AdminOrderDetailsPage'
import AdminOrdersPage from './pages/admin/AdminOrdersPage'
import AdminProductsPage from './pages/admin/AdminProductsPage'
import AdminUsersPage from './pages/admin/AdminUsersPage'

// components
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'


function App() {
 

  return (
    <>
    <Router>
    <HeaderComponent/>
    <Routes>

      <Route path='/' element={<HomePage/>} />
      <Route path='/cart' element={<CartPage/>}/>
      <Route path='/product-details' element={<ProductDetailsPage/>}/>
      <Route path='/product-list' element={<ProductListPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>

      <Route element={<ProtectedRoutesComponent admin={false} />}>

      <Route path='/user' element={<UserProfilePage/>}/>
      <Route path='/user/my-orders' element={<UserOrdersPage/>}/>
      <Route path='/user/cart-details' element={<UserCartDetailsPage/>}/>
      <Route path='/user/order-details' element={<UserOrderDetailsPage/>}/>
      
      </Route>


      {/* admin protected routes */}

      <Route element={<ProtectedRoutesComponent admin={false}/>}>

      <Route path='/admin/analytics' element={<AdminAnalyticsPage/>}/>
      <Route path='/admin/chats' element={<AdminChatsPage/>}/>
      <Route path='/admin/create-new-product' element={<AdminCreateProductPage/>}/>
      <Route path='/admin/edit-product' element={<AdminEditProductPage/>}/>
      <Route path='/admin/edit-user' element={<AdminEditUserPage/>}/>
      <Route path='/admin/order-details' element={<AdminOrderDetailsPage/>}/>
      <Route path='/admin/orders' element={<AdminOrdersPage/>}/>
      <Route path='/admin/products' element={<AdminProductsPage/>}/>
      <Route path='/admin/users' element={<AdminUsersPage/>}/>


      </Route>

    </Routes>
    <FooterComponent/>
    </Router>

    </>
  )
}

export default App
