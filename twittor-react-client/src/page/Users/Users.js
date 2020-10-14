import React, { useEffect, useState } from "react";
import { Spinner, ButtonGroup, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import { isEmpty } from "lodash";
import BasicLayout from "../../layout/BasicLayout";
import { getFollowsApi } from "../../api/follow";
import ListUsers from "../../components/ListUsers";

import "./Users.scss";

function Users(props) {
  const { setRefreshLogin, location } = props;

  const [users, setUsers] = useState(null);
  const params = useUsersQuery(location);

  useEffect(() => {
    getFollowsApi(queryString.stringify(params))
      .then((response) => {
        if (isEmpty(response)) {
          setUsers([]);
        } else {
          setUsers(response);
        }
      })
      .catch(() => {
        setUsers([]);
      });
  }, []);

  return (
    <BasicLayout
      className="users"
      title="Usuarios"
      setRefreshLogin={setRefreshLogin}
    >
      <div className="users__title">
        <h2>Usuarios</h2>
        <input type="text" placeholder="Busca un usuario..." />
      </div>
      <ButtonGroup className="users__options">
        <Button className="active">Siguiendo</Button>
        <Button>Nuevos</Button>
      </ButtonGroup>
      {!users ? (
        <div className="users__loading">
          <Spinner animation="border" varian="info" />
          Buscando Usuarios
        </div>
      ) : (
        <ListUsers users={users} />
      )}
    </BasicLayout>
  );
}

function useUsersQuery(location) {
  const { page = 1, type = "follow", search = "" } = queryString.parse(
    location.search
  );
  return { page, type, search };
}

export default withRouter(Users);
