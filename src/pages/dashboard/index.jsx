import { useState } from 'react';
import { Button, Card, Table, Tag, Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const { Title, Text } = Typography;

export default function Dashboard() {
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const [activeTab, setActiveTab] = useState('todos');
  const [tableData, setTableData] = useState([
    { key: '1', ref: '1276135', modelo: 'Modelo 210', estado: 'Activo', procedimiento: 1 },
    { key: '2', ref: '1276134', modelo: 'Modelo 210', estado: 'Activo', procedimiento: 1 },
    { key: '3', ref: '1276133', modelo: 'Modelo 210', estado: 'Activo', procedimiento: 1 },
    { key: '4', ref: '1276132', modelo: 'Modelo 210', estado: 'Activo', procedimiento: 5 },
    { key: '5', ref: '1276131', modelo: 'Modelo 210', estado: 'Activo', procedimiento: 1 },
  ]);

  const todosData = [
    { key: '1', ref: '1276135', modelo: 'Modelo 210', estado: 'Activo', procedimiento: 1 },
    { key: '2', ref: '1276134', modelo: 'Modelo 210', estado: 'Activo', procedimiento: 1 },
    { key: '3', ref: '1276133', modelo: 'Modelo 210', estado: 'Activo', procedimiento: 1 },
    { key: '4', ref: '1276132', modelo: 'Modelo 210', estado: 'Activo', procedimiento: 5 },
    { key: '5', ref: '1276131', modelo: 'Modelo 210', estado: 'Activo', procedimiento: 1 },
  ];

  const modelo210Data = [
    { key: '1', ref: '2106135', modelo: 'Modelo 210', estado: 'Activo', procedimiento: 2 },
    { key: '2', ref: '2106134', modelo: 'Modelo 210', estado: 'Activo', procedimiento: 3 },
    { key: '3', ref: '2106133', modelo: 'Modelo 210', estado: 'Activo', procedimiento: 4 },
  ];

  const columns = [
    { title: 'Ref.', dataIndex: 'ref', key: 'ref' },
    {
      title: 'Modelo',
      dataIndex: 'modelo',
      key: 'modelo',
      render: (modelo) => (
        <Button
          type="link"
          onClick={() => handleNavigate(modelo)}
        >
          {modelo}
        </Button>
      ),
    },
    {
      title: 'Estado',
      dataIndex: 'estado',
      key: 'estado',
      render: (estado) => <Tag color="blue">{estado}</Tag>,
    },
    {
      title: 'Procedimiento',
      dataIndex: 'procedimiento',
      key: 'procedimiento',
      render: (procedimiento) => (
        <div
          style={{
            backgroundColor: 'gray',
            borderRadius: '50%',
            color: 'white',
            textAlign: 'center',
            padding: '8px 12px',
            width: '30px',
            height: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {procedimiento}
        </div>
      ),
    },
    {
      title: '',
      key: 'action',
      render: () => (
        <Button
          type="text"
          danger
          icon={<DeleteOutlined />}
        />
      ),
    },
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setTableData(tab === 'todos' ? todosData : modelo210Data);
  };

  const handleNavigate = (modelo) => {
    // Navigate to the ClientSVModel page
    navigate('/client-sv-model', { state: { modelo } }); // You can pass the modelo as state if needed
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={8}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Button
              type={activeTab === 'todos' ? 'primary' : 'default'}
              onClick={() => handleTabChange('todos')}
            >
              Todos
            </Button>
          </Grid>
          <Grid item>
            <Button
              type={activeTab === '210' ? 'primary' : 'default'}
              onClick={() => handleTabChange('210')}
            >
              210
            </Button>
          </Grid>
          <Grid item xs />
        </Grid>

        <Card style={{ marginTop: 16 }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Title level={5}>Modelos › Últimos modelos con actividad</Title>
            <Button type="primary">+ Modelo 210</Button>
          </div>
          <div style={{ marginTop: "10px" }}>
            <Table columns={columns} dataSource={tableData} pagination={false} />
          </div>
        </Card>
      </Grid>

      <Grid item xs={4}>
        <Card>
          <Title level={5}>Lunes, 30 De Agosto De 2021</Title>
          <Text type="secondary">Sin eventos</Text>
        </Card>
      </Grid>
    </Grid>
  );
}
