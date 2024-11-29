import './categories.style.scss';
import { Routes, Route , Outlet } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component.jsx';
import SignIn from './routes/sign-in/sign-in.component.jsx';


const Shop = () => {
  return <h1>Hello, shop container</h1>;
}

const App = () => {
  return (
    <Routes>
      <Route path="/crown-clothing" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signIn" element={<SignIn />} />
      </Route>
      
     
      
    </Routes>
  );
}

export default App;
