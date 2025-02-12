import { Routes, Route ,useLocation} from 'react-router-dom';
import Products from './UI/Pages/Products';
import Homepage from './UI/Pages/Homepage';
import Contact from './UI/Pages/Contact';
import Location from './UI/Pages/Location';
import ProductDetails from './UI/Pages/ProductDetails';
import Navbar from './UI/Components/Navabar';
import Footer from './UI/Components/Footer';
import Cart from './UI/Pages/Cart';
import Login from './UI/Pages/LoginPage';
import "../src/index.css";
import { useState,useEffect } from 'react';
import { AuthProvider } from './context/Auth';  // Import AuthProvider
import Sign from './UI/Pages/Sign';
import { useAuth } from './context/Auth';


const App = () => {

  //cart
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCartItems = localStorage.getItem('cartItems');
      return savedCartItems ? JSON.parse(savedCartItems) : [];
    } catch (error) {
      console.error("Error parsing cartItems from localStorage:", error);
      return []; 
    }
  });

 
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);


//theme
  const [theme, setTheme] = useState(localStorage.getItem('theme'));

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Save theme to localStorage
  };

  
  useEffect(() => {
    document.body.className = theme; 
  }, [theme]);


  //login

  const location = useLocation();
  
  const { isLoggedIn, login, logout } = useAuth(); // Get authentication state

  const isLoginPage = location.pathname === '/login';
  const isSignPage = location.pathname === '/sign';

  const PaintTypes=[
    {
      id: 1,
      title:"Oil Paint",
      description:"Oil paint colours for homes come under versatile wall paint names as they can be applied as a primer, undercoat, and even a finish coat of paint.",
      image:"https://static.asianpaints.com/content/dam/asian_paints/blog/december-22/oil-paint-for-home.jpg"
    },
    {
      id: 2,
      title:"Enamel Paint",
      description:"Enamel Paint is Known for its exceptional water resistance, stain resistance, and overall durability, enamel paint stands as a top-notch choice.",
      image:"https://static.asianpaints.com/content/dam/asian_paints/blog/december-22/enamel-paint-for-home.jpg"
    },
    {
      id: 3,
      title:"Emulsion Paint",
      description:"Enamel Paint is Known for its exceptional water emulsion paint offers a rich variety of wall finishes, along with a captivating texture that enhances your space, stain resistance, and overall durability.",
      image:"https://static.asianpaints.com/content/dam/asian_paints/blog/december-22/emulsion-paint-for-home.jpg"
    },
    {
      id: 4,
      title:"Anti-Corrosive Paint",
      description:"Anti-corrosive paint is among the types of paint for a home that is used to cover iron and steel surfaces such as window grills, pipes, etc.",
      image:"https://static.asianpaints.com/content/dam/asian_paints/blog/december-22/anti-corrosive-paint-for-home.jpg"
    }, 
  ]
  

  return (
    <>
    <AuthProvider> 
      {!isLoginPage && !isSignPage && <Navbar theme={theme} toggleTheme={toggleTheme} logout={logout} isLoggedIn={isLoggedIn}/> }
      <Routes>
        <Route path="/" element={<Homepage props={PaintTypes} theme={theme} />} />
        <Route path="/contact" element={<Contact theme={theme} />} />
        <Route path="/product/:id" element={<ProductDetails theme={theme} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} theme={theme} isLoggedIn={isLoggedIn}/>} />
        <Route path="/location" element={<Location theme={theme}/>} />
        <Route path="/products" element={<Products setCartItems={setCartItems} theme={theme} />} />           
        <Route path="/login" element={<Login theme={theme} login={login}/>} />
        <Route path="/sign" element={<Sign theme={theme}/>} />
      </Routes>
      {!isLoginPage && !isSignPage &&  <Footer theme={theme}/>}
      </AuthProvider>
     </>
  );
};

export default App;
