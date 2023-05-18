import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './LoginPage';
import "bootstrap/dist/css/bootstrap.min.css";//bootstrap/dist/css/bootstrap.min.css"
import Header from './component/Header';
import HomePage from './Homepage';
import AboutUsPage from './AboutUsPage';
import BookingPage from './BookingPage';
import YogaInfoPage from './YogaInfoPage';
import LandingPage from './component/LandingPage';
import ClassesPage from './ClassesPage';
import YogaScheduler from './component/YogaScheduler';
import BookingConfirmation from './component/BookingConfirmation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
          <Route path="/header" element={<Header />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutUsPage />}></Route>
          <Route path="/classes" element={<ClassesPage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
          <Route path="/yogainfo" element={<YogaInfoPage />}></Route>
          <Route path="/schedule" element={<YogaScheduler/>}></Route>
          <Route path="/verification" element={<BookingConfirmation/>}></Route>
          
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
