import React from "react";
import { map, isEmpty } from "lodash";

import "./ListUsers.scss";

export default function ListUsers(props) {
  const { users } = props;

  if (isEmpty(users)) {
    return <h2>No hay resultados</h2>;
  }

  return (
    <ul className="list-users">
      {map(users, (user) => (
        <h2 key={user.id}>
          {user.nombre} {user.apellidos}
        </h2>
      ))}
    </ul>
  );
}
