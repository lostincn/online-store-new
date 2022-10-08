import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "../components/modals/CreateType";
const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);
  return (
    <Container className="D-flex flex-column">
      <Button
        variant={"outline-dark"}
        className="m-1 mt-2 p-2"
        onClick={() => setTypeVisible(true)}
      >
        Добавить тип
      </Button>
      <Button
        variant={"outline-dark"}
        className="m-1 mt-2 p-2"
        onClick={() => setBrandVisible(true)}
      >
        Добавить брэнд
      </Button>
      <Button
        variant={"outline-dark"}
        className="m-1 mt-2 p-2"
        onClick={() => setDeviceVisible(true)}
      >
        Добавить продукт
      </Button>
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
      <CreateDevice
        show={deviceVisible}
        onHide={() => setDeviceVisible(false)}
      />
    </Container>
  );
};
export default Admin;
