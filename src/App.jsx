import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Products from './components/products';
import Order from './components/order'; // Import the Order component
import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: '/product',
      element: (
        <>
          <Navbar />
          <Products />
        </>
      ),
    },
    {
      path: '/order', // Define the /order route
      element: (
        <>
          <Navbar />
          <Order />
        </>
      ),
    },
    {
      path: '*', // Fallback route for undefined paths
      element: (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <h1>404 - Page Not Found</h1>
          <p>The page you're looking for doesn't exist.</p>
        </div>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
