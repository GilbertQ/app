import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@mui/material';
import {Bar, Pie} from 'react-chartjs-2';
import {Chart as Chartjs, BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend} from 'chart.js';

Chartjs.register(BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend);

const Operacion = () => {
  const [producto, setProducto] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [precio, setPrecio] = useState('');
  const [items, setItems] = useState([]);

  const handleAgregar = () => {
    if (producto && cantidad > 0 && precio > 0) {
      const newItem = {
        producto,
        cantidad: Number(cantidad),
        precio: Number(precio),
        total: Number(cantidad) * Number(precio),
      };
      setItems([...items, newItem]);
      setProducto('');
      setCantidad('');
      setPrecio('');
    } else {
      alert('Por favor, ingrese valores válidos para todos los campos.');
    }
  };

  const PiesData = {
    labels: items.map(item => item.producto),
    datasets: [
      {
        data: items.map(item => item.cantidad * item.precio),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
        hoverBackgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
      },
    ],
  };

  const BarData = {
    labels: items.map(item => item.producto),
    datasets: [
      {
        label: 'Cantidad vendida',
        data: items.map(item => item.cantidad),
        backgroundColor: 'rgba(75, 192, 192, 0.6)', 
      },
      {
        label: 'Precio (Q)',
        data: items.map(item => item.precio),
      },
    ],
  };

  const pieData = {
    labels: items.map(item => item.producto),
    datasets: [
      {
        label: 'Ventas (Q)',
        data: items.map(item => item.cantidad),
        backgroundColor:[
            'rgba(255,99,132,0.6',
            'rgba(54,162,235,0.6',
            'rgba(75,192,192,0.6',
        ] },
      {
        label: 'Ventas (Q)',
        data: items.map(item => item.cantidad * item.precio),
      },
    ],
  };



  return (
    <div>
    <Box sx={{ maxWidth: 600, margin: 'auto', padding: 4, height: '35vh' }}>
      <Typography variant="h4" gutterBottom>
        Detalles de Venta
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, marginBottom: 2 }}>
        <TextField
          label="Producto"
          value={producto}
          onChange={(e) => setProducto(e.target.value)}
          fullWidth
        />
        <TextField
          label="Cantidad"
          type="number"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
          inputProps={{ min: 0 }}
        />
        <TextField
          label="Precio"
          type="number"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          inputProps={{ min: 0 }}
        />
        <Button variant="contained" onClick={handleAgregar}>
          Agregar
        </Button>
      </Box>
      <Box sx={{ overflow: 'auto', maxHeight: '200px' }}>  {/* Adjust maxHeight as needed */}
  <Table stickyHeader>
    <TableHead>
      <TableRow>
        <TableCell>Producto</TableCell>
        <TableCell align="right">Cantidad</TableCell>
        <TableCell align="right">Precio</TableCell>
        <TableCell align="right">Total</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {items.map((item, index) => (
        <TableRow key={index}>
          <TableCell>{item.producto}</TableCell>
          <TableCell align="right">{item.cantidad}</TableCell>
          <TableCell align="right">{item.precio.toFixed(2)}</TableCell>
          <TableCell align="right">{item.total.toFixed(2)}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</Box>

    </Box>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <div className="chart-container">
    <h2>Grafico de Barras</h2>
    <Bar data={BarData}></Bar>
  </div>
  <div className="chart-container item">
  <div class="item"><h2>Grafico de Pastel</h2></div>
    <Pie data={PiesData}></Pie>
  </div>
</div>
    </div>
  );
};

export default Operacion;