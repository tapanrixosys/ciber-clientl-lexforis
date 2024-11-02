import React, { useState } from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import './client.css'
import TabPanel from '@mui/lab/TabPanel';
import { Box } from '@mui/material';
import Tab from '@mui/material/Tab';
import { EditOutlined } from '@ant-design/icons';
import { EyeOutlined, EyeInvisibleOutlined, KeyOutlined, LockOutlined } from '@ant-design/icons';
import { Input, Checkbox, Row, Col, } from 'antd';
import { Form, } from 'react-bootstrap';

import { Modal, } from 'react-bootstrap';




export default function ComponentColor() {


  const [value, setValue] = useState('1');
  const [information, setInformation] = useState('1'); // State for the nested tabs

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [show, setShow] = useState(false);

  // Handlers for opening and closing the modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);






  const handleCheckboxChange = (e) => {
    setNotifyEmail(e.target.checked);
  };

  const isButtonDisabled = password === '' || confirmPassword === '' || password !== confirmPassword;



  const handleChangeInformation = (event, newValue) => {
    setInformation(newValue); // Update nested tab state
  };

  return (

       <div className='d-flex justify-content-center'>

    <Box sx={{ width: '75%', typography: 'body1' }}>
      <TabContext value={value}>

        <TabPanel value="1">
          <Card style={{ marginTop: "20px", width: "100%", height: "auto" }}>
            <div>
              <p className='fs-4' style={{ marginLeft: "40px" }}>
                Mis datos
              </p>
            </div>
            <Box sx={{ width: '100%', typography: 'body1' }}>
              <TabContext value={information}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={handleChangeInformation} aria-label="client info tabs">
                    <Tab label="Datos principales" value="1" />
                    <Tab label="Más información" value="5" />
                    <Tab label="Representantes" value="3" />
                  </TabList>
                </Box>

                {/* Tab Panel for "Datos principales" */}
                <TabPanel value="1" style={{ height: '200px', overflowY: 'auto' }}>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    <Button variant="outlined">Nombre:<br /> CETA IT</Button>
                    <Button variant="outlined">Representante 1:<br /> Represent Represent (Administrador)</Button>
                    <Button variant="outlined">Representante 2:<br /> Diego Alhama Sánchez (Apoderado)</Button>
                    <Button variant="outlined">Persona física 1:<br /> Paco Moreno</Button>
                    <Button variant="outlined">Teléfono:<br /> 111223366</Button>
                    <Button variant="outlined">Idioma:<br /> es</Button>
                    <Button variant="outlined">Compañía:<br /> Lexforis</Button>
                  </Box>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, marginLeft: '70%', marginTop: '50px' }}>
                    <Button variant="contained" onClick={handleShow}>
                      <EditOutlined /> <span style={{ marginLeft: "10px" }} onClick={handleShow}> Editar información</span>
                    </Button>
                  </Box>


                </TabPanel>

                {/* Tab Panel for "Más información" */}
                <TabPanel value="5" style={{ height: '200px', overflowY: 'auto' }}>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    <Button variant="outlined">Representante 1:<br /> Represent Represent (Administrador)</Button>
                    <Button variant="outlined">Dirección de residencia<br /> Sin datos</Button>
                    <Button variant="outlined">Persona física 1:<br /> Paco Moreno</Button>
                    <Button variant="outlined">Teléfono:<br /> 111223366</Button>
                    <Button variant="outlined">Idioma:<br /> es</Button>
                    <Button variant="outlined">Compañía:<br /> Lexforis</Button>
                  </Box>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'flex-end' }}>
                    <Button variant="contained">
                      <EditOutlined /> <span style={{ marginLeft: "10px" }} onClick={handleShow}> Editar información</span>
                    </Button>
                  </Box>
                </TabPanel>

                {/* Tab Panel for "Representantes" */}
                <TabPanel value="3" style={{ height: '200px', overflowY: 'auto' }}>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    <Button variant="outlined">Representante 1:<br /> Represent Represent (Administrador)</Button>
                    <Button variant="outlined">Representante 2:<br /> Diego Alhama Sánchez (Apoderado)</Button>
                  </Box>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'flex-end' }}>
                    <Button variant="contained">
                      <EditOutlined /> <span style={{ marginLeft: "10px" }} onClick={handleShow}> Editar información</span>
                    </Button>
                  </Box>
                </TabPanel>

                {/* Tab Panel for "Personas físicas" */}
                <TabPanel value="4" style={{ height: '200px', overflowY: 'auto' }}>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    <Button variant="outlined">Persona 1:<br />Paco Moreno</Button>
                  </Box>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'flex-end' }}>
                    <Button variant="contained">
                      <EditOutlined /> <span style={{ marginLeft: "10px" }} onClick={handleShow}> Editar información</span>
                    </Button>
                  </Box>
                </TabPanel>
              </TabContext>
            </Box>
          </Card>

          {/* add two card */}
          <Card title="Actualizar contraseña" className='mt-4' style={{ width: "100%", height: "200px", paddingLeft: "40px", paddingTop: "20px" }}>
            <h6>Actualizar contraseña</h6>
            <div className='mt-4'>
              <Row gutter={16}>
                <Col span={11}>
                  <Input.Password
                    placeholder="Nueva contraseña *"
                    prefix={<KeyOutlined />}
                    iconRender={visible => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)}
                    style={{ width: '100%', padding: '10px' }}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Col>
                <Col span={11}>
                  <Input.Password
                    placeholder="Confirmar nueva contraseña *"
                    prefix={<LockOutlined />}
                    iconRender={visible => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    style={{ width: '100%', padding: '10px' }}
                  />
                </Col>
              </Row>
            </div>

            <Row style={{ marginTop: '20px' }}>
              <Col span={24}>
                <Checkbox onChange={handleCheckboxChange}>Notificar el cambio por correo electrónico</Checkbox>
              </Col>
            </Row>

            <Row>
              <Button variant="contained" sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, marginLeft: "66%" }} icon={<KeyOutlined />} disabled={isButtonDisabled}>
                Cambiar contraseña
              </Button>
            </Row>
          </Card>

        </TabPanel>





      </TabContext>


      {/* Modal */}
      <Modal show={show} onHide={handleClose} style={{ marginTop: "30px" }} centered size="lg" dialogClassName="custom-modal-height">
        <Modal.Header closeButton>
          <Modal.Title>Información del cliente</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div style={{ height: '400px', overflowY: 'auto' }}>
            <Form>
              <Row className="mb-3">
                <Col className="col-margin">
                  <Form.Group controlId="clientName" className="mb-3">
                    <Form.Label>Nombre *</Form.Label>
                    <Form.Control type="text" defaultValue="CETA IT" />
                  </Form.Group>
                </Col>
                <Col className="col-margin">
                  <Form.Group controlId="clientEmail" className="mb-3">
                    <Form.Label>Dirección de correo electrónico *</Form.Label>
                    <Form.Control type="email" defaultValue="ceta@ceta.com" />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col className="col-margin">
                  <Form.Group controlId="clientPhone" className="mb-3">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control type="text" defaultValue="111223366" />
                  </Form.Group>
                </Col>
                <Col className="col-margin">
                  <Form.Group controlId="clientCompany" className="mb-3">
                    <Form.Label>Compañía *</Form.Label>
                    <Form.Control type="text" defaultValue="Lexforis" />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col className="col-margin">
                  <Form.Group controlId="clientCountry" className="mb-3">
                    <Form.Label>País</Form.Label>
                    <Form.Control type="text" defaultValue="España" />
                  </Form.Group>
                </Col>
                <Col className="col-margin">
                  <Form.Group controlId="clientRegion" className="mb-3">
                    <Form.Label>Estado</Form.Label>
                    <Form.Control type="text" defaultValue="Murcia" />
                  </Form.Group>
                </Col>
                <Col className="col-margin">
                  <Form.Group controlId="clientCity" className="mb-3">
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control type="text" defaultValue="Cartagena" />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col className="col-margin">
                  <Form.Group controlId="clientPostalCode" className="mb-3">
                    <Form.Label>Código Postal</Form.Label>
                    <Form.Control type="text" defaultValue="30394" />
                  </Form.Group>
                </Col>
                <Col className="col-margin">
                  <Form.Group controlId="clientID" className="mb-3">
                    <Form.Label>Identificación</Form.Label>
                    <Form.Control type="text" defaultValue="model.client.identification" />
                  </Form.Group>
                </Col>
                <Col className="col-margin">
                  <Form.Group controlId="clientIban" className="mb-3">
                    <Form.Label>IBAN</Form.Label>
                    <Form.Control type="text" defaultValue="model.client.iban" />
                  </Form.Group>
                </Col>
              </Row>
            </Form>

            <Card title="Actualizar contraseña" className='mt-4' style={{ width: "100%", height: "200px", paddingLeft: "10px", paddingTop: "20px" }}>
              <h6>Actualizar contraseña</h6>
              <div className='mt-4'>
                <Row gutter={16}>
                  <Col span={11}>
                    <Input.Password
                      placeholder="Nueva contraseña *"
                      prefix={<KeyOutlined />}
                      iconRender={visible => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)}
                      style={{ width: '100%', padding: '10px' }}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Col>
                  <Col span={11}>
                    <Input.Password
                      placeholder="Confirmar nueva contraseña *"
                      prefix={<LockOutlined />}
                      iconRender={visible => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      style={{ width: '100%', padding: '10px' }}
                    />
                  </Col>
                </Row>
              </div>

              <Row style={{ marginTop: '20px' }}>
                <Col span={24}>
                  <Checkbox onChange={handleCheckboxChange}>Notificar el cambio por correo electrónico</Checkbox>
                </Col>
              </Row>

              <Row>
                <Button variant="contained" sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, marginLeft: "66%" }} icon={<KeyOutlined />} disabled={isButtonDisabled}>
                  Cambiar contraseña
                </Button>
              </Row>
            </Card>
          </div>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="contained" className='bg-danger text-white' onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="contained" className='bg-primary text-white' onClick={handleClose}>
            Actualiazar
          </Button>
        </Modal.Footer>
      </Modal>
    </Box >
       </div> 


  );
}