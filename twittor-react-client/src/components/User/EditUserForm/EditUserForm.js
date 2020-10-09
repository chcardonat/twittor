import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import es from "date-fns/locale/es";

import "./EditUserForm.scss";

export default function EditUserForm() {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Editando usuario");
  };
  return (
    <div className="edit-user-form">
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Row>
            <Col>
              <Form.Control type="text" placeholder="Nombre" name="nombre" />
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Apellidos"
                name="apellidos"
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group>
          <Form.Control
            as="textarea"
            row="3"
            placeholder="Agrega tu biografía"
            type="text"
            name="biografia"
          />
        </Form.Group>
        <Form.Group>
          <Form.Control placeholder="Sitio Web" type="text" name="sitioWeb" />
        </Form.Group>
        <Form.Group></Form.Group>

        <Form.Group>
          <DatePicker
            placeholder="Fecha de Nacimiento"
            locale={es}
            selected={new Date()}
          />
        </Form.Group>

        <Button className="btn-submit" variant="primary" type="submit">
          Actualizar
        </Button>
      </Form>
    </div>
  );
}
