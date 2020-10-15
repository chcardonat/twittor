import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assests/png/logo.png";
import Error404Image from "../../assests/png/error-404.png";

import "./Error404.scss";

export default function Error404() {
  return (
    <div className="error404">
      <img src={Logo} alt="Twittor" />
      <img src={Error404Image} alt="Twittor" />

      <Link to="/">Volver al inicio</Link>
    </div>
  );
}
