import './App.css';
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import HomePage from './pages/Home'
// import RegisterPage from './pages/RegisterPage';
// import Register from './pages/Register';
import ApplyforWork from './pages/ApplyforWork';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfilePage from './pages/ProfilePage';
import ForgetPassword from './pages/ForgetPassword';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <HomePage />} />
          {/* <Route path='/RegisterPage' element={ <RegisterPage />} />
          <Route path='/Register' element={ <Register/>}/> */}
          <Route path='/LoginPage' element={ <LoginPage/>}/>
          <Route path='/SignupPage' element={ <SignupPage/>}/>
          <Route path='/ApplyforWork' element={ <ApplyforWork/>}/>
          <Route path='/ProfilePage' element={<ProfilePage/>}/>
          <Route path='/ForgetPassword' element={<ForgetPassword/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
