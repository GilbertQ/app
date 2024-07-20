import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import { Bar, Pie } from 'react-chartjs-2';

const dummyData = [
  { product: 'Product1', quantity: 10, price: 15 },
  { product: 'Product2', quantity: 20, price: 25 },
];

const ReportComponent = () => {
  const barChartData = {
    labels: dummyData.map((d) => d.product),
    datasets: [
      {
        label: 'Cantidad',
        data: dummyData.map((d) => d.quantity),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Precio',
        data: dummyData.map((d) => d.price),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  const pieChartData = {
    labels: dummyData.map((d) => d.product),
    datasets: [
      {
        data: dummyData.map((d) => d.quantity * d.price),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
        ],
      },
    ],
  };

  return (
    <Container>
      <Typography variant="h4">Reports</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => alert('Displaying Bar Chart')}
      >
        Bar Chart
      </Button>
      <Bar data={barChartData} />

      <Button
        variant="contained"
        color="secondary"
        onClick={() => alert('Displaying Pie Chart')}
      >
        Pie Chart
      </Button>
      <Pie data={pieChartData} />
    </Container>
  );
};

export default ReportComponent;
