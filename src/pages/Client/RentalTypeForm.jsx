import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';

function RentalTypeForm() {
  const [isRented, setIsRented] = useState(false);
  const [isVacationRental, setIsVacationRental] = useState(false);
  const [period, setPeriod] = useState('Trimestral');
  const [year, setYear] = useState('2021');
  const [quarter, setQuarter] = useState('Primer trimestre');

  return (
   
   <div className="rental-type-form">


      <div className="d-flex justify-content-between">
        <h5 className="text-primary">Tipo de renta</h5>
        <p className="text-end text-muted">* Campos obligatorios</p>
      </div>

      <Form className='mt-4'>
        <Form.Group controlId="isRented">
          <Form.Label >¿Se alquila la vivienda?</Form.Label>
          <div className="d-flex">
            <Form.Check type="radio" label="Sí" name="isRented" checked={isRented} onChange={() => setIsRented(true)} className="me-3" />
            <Form.Check type="radio" label="No" name="isRented" checked={!isRented} onChange={() => setIsRented(false)} />
          </div>
        </Form.Group>

        <Form.Group controlId="isVacationRental" className="mt-3">
          <Form.Label>¿Alquila la vivienda de forma vacacional?</Form.Label>
          <div className="d-flex">
            <Form.Check
              type="radio"
              label="Sí"
              name="isVacationRental"
              checked={isVacationRental}
              onChange={() => setIsVacationRental(true)}
              className="me-3"
            />
            <Form.Check
              type="radio"
              label="No"
              name="isVacationRental"
              checked={!isVacationRental}
              onChange={() => setIsVacationRental(false)}
            />
          </div>
        </Form.Group>

        <Form.Group controlId="declarationPeriod" className="mt-4">
          <Form.Label>¿Qué periodo quiere declarar?</Form.Label>
          <div className="d-flex">
            <Form.Check
              type="radio"
              label="Trimestral"
              name="period"
              checked={period === 'Trimestral'}
              onChange={() => setPeriod('Trimestral')}
              className="me-3"
            />
            <Form.Check type="radio" label="Anual" name="period" checked={period === 'Anual'} onChange={() => setPeriod('Anual')} />
          </div>
        </Form.Group>

        <Form.Group controlId="yearSelection" className="mt-3">
          <Form.Label>Ejercicio de devengo *</Form.Label>
          <Form.Select value={year} onChange={(e) => setYear(e.target.value)}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            {/* Add more years as needed */}
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="quarterSelection" className="mt-3">
          <Form.Label>Periodo *</Form.Label>
          <Form.Select value={quarter} onChange={(e) => setQuarter(e.target.value)}>
            <option value="Primer trimestre">Primer trimestre</option>
            <option value="Segundo trimestre">Segundo trimestre</option>
            <option value="Tercer trimestre">Tercer trimestre</option>
            <option value="Cuarto trimestre">Cuarto trimestre</option>
          </Form.Select>
        </Form.Group>

        <div className="mt-4">
          <h6>Renta y gastos</h6>
          <Form.Group controlId="rentalIncome" className="mt-3">
            <Form.Label>Rendimientos íntegros *</Form.Label>
            <Form.Control type="number" placeholder="Ingrese los rendimientos" />
          </Form.Group>

          <Form.Group controlId="deductibleExpenses" className="mt-3">
            <Form.Label>Gastos deducibles *</Form.Label>
            <Form.Control type="number" placeholder="Ingrese los gastos" />
          </Form.Group>
        </div>

        <div className="d-flex justify-content-end mt-4">
          <Button variant="link" className="text-decoration-none text-muted">
            Retroceder
          </Button>
          <Button variant="success">Siguiente &gt;</Button>
        </div>
      </Form>
    </div>
  );
}

export default RentalTypeForm;
