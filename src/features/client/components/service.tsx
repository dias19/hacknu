import React from 'react';

import {
  Box, Button, Card, CardContent, Container, Typography,
} from '@mui/material';

export function Service() {
  return (
    <Container>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
      >
        <Typography sx={{
          fontSize: 24,
          mt: 3,
        }}
        >
          Саламатсызба ИмяФамилия
        </Typography>
        <Card sx={{ mt: 2, padding: 2 }}>
          <CardContent>
            <Typography variant="h5">
              Заказ #
            </Typography>
            <Typography>
              Наименование:
            </Typography>
            <Typography>
              Отделение:
            </Typography>
            <Typography variant="h5">
              Данные получателя:
            </Typography>
            <Typography>
              ИИН:
            </Typography>
            <Typography>
              Полное имя:
            </Typography>
            <Typography>
              Номер телефона:
            </Typography>
            <Button
              size="medium"
              color="info"
              variant="contained"
              sx={{
                mt: 1,
                padding: 1,
              }}
            >
              Заказать доставку
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
