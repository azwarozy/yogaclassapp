import { Outlet } from "react-router-dom";

const Header = () => {
  
  return (
    <>

      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <h4 class="logo">SOT Yoga</h4>
          <ul class="nav justify-content-end">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">AboutUs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/classes">Classes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/booking">Booking</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/yogainfo">Yoga Info</a>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Header;