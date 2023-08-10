import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


function App() {
  const { pathname } = useLocation();

  useEffect(()=>{
    window.scrollTo(0,0);
  },[pathname])

  return (
    <div className="App">
      <Navbar />
        <AnimatedRoutes />
      <Footer />
    </div>
  );
}

export default App;
