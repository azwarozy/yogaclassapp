import React, { useEffect, useState } from "react";

function LandingPage(props) {
    return(
      <>
      <div className="landing">
        <img alt="landingImg" src="https://images.pexels.com/photos/4323292/pexels-photo-4323292.jpeg?auto=compress&cs=tinysrgb&w=600"/>

      <div className="landing-text">
        <h1>Heal the soul. Balance the life. Flexibility</h1>
        <p>Experience your yoga today with our special membership offer every month</p>
        <a class="btn btn-outline-primary btn-lg" href="/login" role="button">Member</a>
        <a class="btn btn-outline-info btn-lg" href="/home" role="button">Guest</a>
        </div>
      </div>

      </>
    );
}

export default LandingPage;