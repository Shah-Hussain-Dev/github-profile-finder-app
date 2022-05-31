import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';

import Home from './components/Home';
import Notfound from './components/Notfound';
import {GithubProvider} from './context/GithubContext'
import {AlertProvider} from './context/alert/AlertContext'
import User from './components/users/User';

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
    <BrowserRouter>
   <div className="d-flex flex-column justify-content-between " style={{height: '100vh'}}>
     
   <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/user/:login" element={<User/>}/>
      <Route path="/notFound" element={<Notfound/>}/>
      <Route path="/*" element={<Notfound/>}/>
    </Routes>
    <Footer/>
   </div>
    </BrowserRouter>
    </AlertProvider>
    </GithubProvider>
  );
}

export default App;
