import React, { useState, useEffect } from "react";
import { Button, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import BasicLayout from "../../layout/BasicLayout";
import { withRouter } from "react-router-dom";
import { getUserapi } from "../../api/user";

import "./User.scss";

function User(props) {
  const { match } = props;
  const [user, setUser] = useState(null);
  const { params } = match;

  console.log(user);

  useEffect(() => {
    getUserapi(params.id)
      .then((response) => {
        setUser(response);
        if (!response) toast.error("El usuario que has visitado no existe");
      })
      .catch(() => {
        toast.error("El usuario que has visitado no existe");
      });
  }, [params]);

  return (
    <BasicLayout className="user">
      <div className="user__title">
        <h2>
          {user ? `${user.nombre} ${user.apellidos}` : "Este usuario no existe"}
        </h2>
      </div>
      <div>
        <h2>Banner Usuario</h2>
      </div>
      <div>
        <h2>Info Usuario</h2>
      </div>
      <div className="user__tweets">
        <h2>Lista de Tweets</h2>
      </div>
    </BasicLayout>
  );
}

export default withRouter(User);
