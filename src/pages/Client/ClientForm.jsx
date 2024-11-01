import React from 'react';
import { Form, Input, Button, DatePicker, Select, Row, Col, Typography } from 'antd';

const { Title, Text } = Typography;
const { Option } = Select;

const ClientForm = () => {
    const onFinish = (values) => {
        console.log('Form Values:', values);
    };

    return (
        <div>
            <Form
                name="clientForm"
                onFinish={onFinish}
                layout="vertical"

            >
                <Title level={4}>Información personal</Title>
                <Text type="secondary">* Campos obligatorios</Text>

                {/* Personal Information Section */}
                <Row gutter={16} wrap={false}> {/* Setting wrap to false to keep items in one line */}
                    <Col flex="1 1 25%">
                        <Form.Item
                            label="NIF *"
                            name="nif"
                            rules={[{ required: true, message: 'Please enter NIF!' }]}
                        >
                            <Input placeholder="NIF" />
                        </Form.Item>
                    </Col>
                    <Col flex="0 1 80px">
                        <Form.Item label="F/J" name="fj">
                            <Select placeholder="F/J">
                                <Option value="F">F</Option>
                                <Option value="J">J</Option>
                            </Select>    
                        </Form.Item>      
                    </Col>
                    <Col flex="1 1 60%">
                        <Form.Item 
                            label="Apellidos y nombre"
                            name="name"
                            rules={[{ required: true, message: 'Please enter full name or company name!' }]}
                        >
                            <Input placeholder="Apellidos y nombre, razón social o denominación" />
                        </Form.Item>
                    </Col>
                </Row>


                <Row gutter={16}>
                    <Col span={6}>
                        <Form.Item label="Fecha" name="date">
                            <DatePicker placeholder="Fecha" style={{ width: '100%' }} />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            label="Localidad *"
                            name="localidad"
                            rules={[{ required: true, message: 'Please enter localidad!' }]}
                        >
                            <Input placeholder="Localidad" />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label="País" name="pais">
                            <Select placeholder="País">
                                <Option value="Spain">Spain</Option>
                                <Option value="USA">USA</Option>
                                <Option value="Mexico">Mexico</Option>
                                {/* Add other countries as needed */}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label="Residencia" name="residencia">
                            <Select placeholder="Residencia">
                                <Option value="residente">Residente</Option>
                                <Option value="no_residente">No Residente</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>

                <Title level={4}>Dirección en el país de residencia</Title>

                {/* Residential Address Section */}
                <Row gutter={16}>
                    <Col span={8}>
                        <Form.Item label="Domicilio" name="domicilio">
                            <Input placeholder="Domicilio" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Datos " name="complementario">
                            <Input placeholder="Datos complementarios" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Localidad" name="localidad_res">
                            <Input placeholder="Localidad" />
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item label="Dirección de correo electrónico" name="email">
                    <Input placeholder="Dirección de correo electrónico" />
                </Form.Item>

                <Row gutter={16}>
                    <Col span={8}>
                        <Form.Item label="Código postal" name="codigo_postal">
                            <Input placeholder="Código postal" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Estado" name="estado">
                            <Input placeholder="Estado" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="País" name="pais_res">
                            <Select placeholder="País">
                                <Option value="Spain">Spain</Option>
                                <Option value="USA">USA</Option>
                                <Option value="Mexico">Mexico</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={8}>
                        <Form.Item label="Teléfono" name="telefono">
                            <Input placeholder="Teléfono" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Móvil" name="movil">
                            <Input placeholder="Móvil" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Fax" name="fax">
                            <Input placeholder="Fax" />
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '5px' }}>
                        <Button type="primary" htmlType="submit">
                            Save
                        </Button>
                        <Button htmlType="button">
                            Cancel
                        </Button>
                    </div>
                </Form.Item>

            </Form>
        </div>
    );
};

export default ClientForm;
