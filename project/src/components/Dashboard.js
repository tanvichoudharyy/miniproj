import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 300, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 200, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 278, pv: 3908, amt: 2000 },
  { name: 'May', uv: 189, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 239, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 349, pv: 4300, amt: 2100 },
];

function Dashboard() {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Line Chart</Typography>
          <LineChart width={600} height={300} data={data}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Bar Chart</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;