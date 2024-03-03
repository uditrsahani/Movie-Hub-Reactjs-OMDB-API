import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import HomeTwo from './components/HomeTwo';
import Footer from './components/Footer';
import Hero from './components/LandingPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import Disclaimer from './pages/Disclaimer';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Layout/>,
      children:[
        {
          path:"",
          element: <HomeTwo/>
        },

        {
          path:"about",
          element:<About/>
        },
        {
          path:"contact",
          element:<Contact/>
        },
        {
          path:"disclaimer",
          element:<Disclaimer/>
        },
        {
          path:"privacy-policy",
          element:<PrivacyPolicy/>
        }
        ,
       
      ]
    }
  ])
  return (
   <>

   <RouterProvider router={router}/>
   
   </>
  );
}

export default App;
