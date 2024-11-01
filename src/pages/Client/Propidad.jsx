import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';

const Propidad = () => {
    const [isOwner, setIsOwner] = useState(true);
    const [percentage, setPercentage] = useState(100);

    return (
        <div>
            <div className="d-flex justify-content-between">
                <h5 className="text-primary">Propiedad del inmueble</h5>
                <p className="text-end text-muted">* Campos obligatorios</p>
            </div>

            <Form>

              <div className='d-flex justify-content-center'>
                <div>
                    <Form.Group controlId="ownership">
                        <Form.Label>¿Es usted el único propietario de la vivienda?</Form.Label>
                        <div className="d-flex">
                            <Form.Check type="radio" label="Sí" name="ownership" checked={isOwner} onChange={() => setIsOwner(true)} className="me-3" />
                            <Form.Check type="radio" label="No" name="ownership" checked={!isOwner} onChange={() => setIsOwner(false)} />
                        </div>
                    </Form.Group>
                    <Form.Group controlId="percentage" className="mt-3">
                        <Form.Label>Porcentaje *</Form.Label>
                        <InputGroup style={{ width: "300px" }}>
                            <Form.Control type="number" value={percentage} onChange={(e) => setPercentage(e.target.value)} />
                            <InputGroup.Text>%</InputGroup.Text>
                        </InputGroup>
                    </Form.Group>
                </div>

              </div>


                <div className="d-flex justify-content-end mt-4">
                    <div>
                        <Button variant="link" className="text-decoration-none text-muted">
                            Retroceder
                        </Button>
                        <Button variant="success">Siguiente &gt;</Button>
                    </div>
                </div>

            </Form>
        </div>
    );
};

export default Propidad;
