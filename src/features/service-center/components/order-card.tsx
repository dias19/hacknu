import React from 'react';

import {
  Box, styled, Stack, Typography, Button,
} from '@mui/material';

import { DialogForm } from '~/components/Dialog';

import { OrderConfirmForm } from './order-confirm-form';

export function OrderCard() {
  const [open, setOpen] = React.useState(false);

  const handleAccept = async () => {
    setOpen(true);
    // make the request to the server and accept it, wait for the courier code
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeny = () => {
    // deny the order
  };

  return (
    <BoxStyle>
      <Stack spacing={1.5}>
        <Typography variant="caption">
          Доставщик: Yandex Delivery
        </Typography>
        <Typography variant="caption">

          Курьер: Balenbay Balenbayev
        </Typography>
        <Typography variant="caption">

          Дата: 11-02-2023
        </Typography>
      </Stack>
      <Stack spacing={1.5}>
        <Typography variant="caption">
          Доверенное лицо: Leo Messi
        </Typography>
        <Typography variant="caption">
          ГосУслуга: спрака с места жительство
        </Typography>
      </Stack>

      <Stack spacing={3}>
        <Button variant="outlined" color="secondary" onClick={handleAccept}>
          Принять
        </Button>
        <Button variant="outlined" color="error" onClick={handleDeny}>
          Отказать
        </Button>
      </Stack>
      <DialogForm
        open={open}
        onClose={handleClose}
        onOpen={handleAccept}
        title="Проверка номера"
        hasCloser
      >
        <OrderConfirmForm
          buttonTitle="Проверить"
          onCloseForm={handleClose}
        />
      </DialogForm>
    </BoxStyle>
  );
}

const BoxStyle = styled(Box)(({ theme }) => ({
  display: 'flex',
  minWidth: '100%',
  gap: theme.spacing(3),
  justifyContent: 'space-between',
}));
