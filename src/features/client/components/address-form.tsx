import React, { useState } from 'react';

import {
  Box, Checkbox, Container, Stack, TextField, Typography,
} from '@mui/material';

export function AddressFormClient() {
  const [orderForMyself, setOrderForMyself] = useState(false);

  return (
    <Container>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        width: 700,
      }}
      >
        <Box>
          <Checkbox
            checked={orderForMyself}
            onChange={() => setOrderForMyself(!orderForMyself)}
          />
          <Typography>
            Отправить документы доверенному лицу
          </Typography>
        </Box>
        {orderForMyself
        && (
        <TextField
          label="ИИН"
        />
        )}
        <Stack spacing={1}>
          <TextField
            label="Область"
          />
          <TextField
            label="Город"
          />
          <TextField
            label="Улица"
          />
          <Box sx={{ display: 'flex' }}>
            <TextField
              label="Номер дома"
            />
            <TextField
              label="Квартира"
            />
          </Box>
          <Box sx={{ display: 'flex' }}>
            <TextField
              label="Подьезд"
            />
            <TextField
              label="Этаж"
            />
          </Box>
          <Box sx={{ display: 'flex' }}>
            <TextField
              label="Корпус"
            />
            <TextField
              label="Наименования ЖК"
            />
          </Box>
          <TextField
            label="Дополнительная информация"
          />
        </Stack>
      </Box>
    </Container>
  );
}
