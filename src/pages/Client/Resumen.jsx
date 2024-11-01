import React from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { FaRegCheckCircle } from "react-icons/fa";


function SummaryForm() {
  return (
    <div className="d-flex justify-content-center min-vh-100">
    <div style={{ maxWidth: '700px', width: '100%' }}>
      <h5 className="text-primary">Resumen</h5>
      <p className="mt-3">
        Para rentas de tipo 01 con base imponible positiva, se obtiene un descuento del 60% (Art. 23.2)
      </p>
  
      <Form>
        <div className="row">
          <Form.Group controlId="donationDeduction" className="col-12 col-md-4 mb-3">
            <Form.Label>Deducción por donativos *</Form.Label>
            <InputGroup>
              <Form.Control type="number" placeholder="0" />
              <InputGroup.Text>€</InputGroup.Text>
            </InputGroup>
          </Form.Group>
  
          <Form.Group controlId="totalFee" className="col-12 col-md-4 mb-3">
            <Form.Label>Cuota íntegra *</Form.Label>
            <InputGroup>
              <Form.Control type="number" defaultValue="9.60" />
              <InputGroup.Text>€</InputGroup.Text>
            </InputGroup>
          </Form.Group>
  
          <Form.Group controlId="reducedTotalFee" className="col-12 col-md-4 mb-3">
            <Form.Label>Cuota íntegra reducida *</Form.Label>
            <InputGroup>
              <Form.Control type="number" defaultValue="9.60" />
              <InputGroup.Text>€</InputGroup.Text>
            </InputGroup>
          </Form.Group>
        </div>
  
        <div className="text-center my-4">
          <FaRegCheckCircle className="fs-1 text-success" style={{ fontSize: '40px' }} />
          <p className="mt-4">
            Usted ha completado el procedimiento. Si usted está de acuerdo, confirme esta declaración pulsando
            sobre el botón <strong>"Guardar y confirmar"</strong> para que los datos sean procesados y presentados ante la AEAT.
            Usted no podrá volver a modificar los datos de esta declaración.
          </p>
        </div>
  
        <Form.Group controlId="result" className="mb-4">
          <Form.Label>Resultado *</Form.Label>
          <InputGroup>
            <Form.Control type="number" defaultValue="9.60" />
            <InputGroup.Text>€</InputGroup.Text>
          </InputGroup>
        </Form.Group>
  
        <div className="text-center">
          <Button variant="success" className="px-4">
            Guardar y confirmar
          </Button>
        </div>
      </Form>
    </div>
  </div>
  
  );
}

export default SummaryForm;
