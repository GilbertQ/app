import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';

const InputComponent = () => {
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [total, setTotal] = useState(0);

  const handleCalculate = () => {
    const total = parseFloat(quantity) * parseFloat(price);
    setTotal(total);
  };

  return (
    <Container>
      <Typography variant="h4">Product Input</Typography>
      <TextField
        label="Producto"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Cantidad"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Precio"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleCalculate}>
        Calculate
      </Button>
      <Typography variant="h6">Total: {total}</Typography>
    </Container>
  );
};

export default InputComponent;
