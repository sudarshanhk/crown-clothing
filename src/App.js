import './categories.style.scss';
import { Routes, Route , Outlet } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component.jsx';
import Authentication from './routes/authentication/authentication.component.jsx';


const Shop = () => {
  return <h1>Hello, shop container</h1>;
}

const App = () => {
  return (
    <Routes>
      <Route path="/crown-clothing" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
      
     
      
    </Routes>
  );
}

export default App;
