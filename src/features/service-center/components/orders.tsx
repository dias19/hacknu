import React from 'react';

import { Box, styled, Divider } from '@mui/material';

import { OrderCard } from './order-card';

export function Orders() {
  return (
    <BoxStyle>
      <OrderCard />
      <Divider />
      <OrderCard />
      <Divider />
      <OrderCard />
    </BoxStyle>
  );
}

const BoxStyle = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  gap: theme.spacing(3),
}));
