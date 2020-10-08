import React from "react";
import { Location, Link, DateBirth } from "../../../utils/icons";

import "./InfoUser.scss";

export default function InfoUser(props) {
  const { user } = props;
  return (
    <div className="info-user">
      <h2 className="name">
        {user?.nombre} {user?.apellidos}
      </h2>
      <p className="email">{user?.email}</p>
      {user?.biografia && <div className="description">{user.biografia}</div>}

      <div className="">
        {user?.udibacion && (
          <p>
            <Location />
            {user.udibacion}
          </p>
        )}
      </div>
    </div>
  );
}
