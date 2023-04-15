import React, { useState } from 'react';

import {
  Box,
  Button, Checkbox, Container, TextField, Typography,
} from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import orderApi from '~/api/order/api';

export function LoginClient() {
  const [IIN, setIIN] = useState('');

  const [dogovor, setDogovor] = useState(false);

  const [dataObrabotka, setDataObrabotka] = useState(false);

  const { requestId } = useParams();

  const [trigger, { data, error, isLoading }] = orderApi.endpoints.getOrderDetails.useLazyQuery();

  async function handleClick() {
    if (IIN === '') {
      toast.error('Заполните поле ИИН');
    }
    const queryParams = {
      requestId,
      requestIIN: IIN,
      token: 'eyJG6943LMReKj_kqdAVrAiPbpRloAfE1fqp0eVAJ-IChQcV-kv3gW-gBAzWztBEdFY',
    };
    try {
      await trigger({ queryParams });
    } catch (e) {
      toast.error('Упс вышла ошибочка');
    }
  }

  return (
    <Container>
      <Typography
        sx={{
          fontSize: 24,
          mt: 3,
        }}
        align="center"
      >
        Порталға кіру
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <TextField
          disabled
          sx={{
            mt: 2,
            width: 800,
            '.Mui-disabled ': {
              color: '#000000',
              border: '#00000',
            },
            '& .MuiInputBase-input.Mui-disabled': {
              WebkitTextFillColor: '#000000',
            },

          }}
          label="Тапсырыстын нөмері"
          defaultValue={requestId}
          variant="outlined"
          size="medium"
        />
        <TextField
          label="ЖСН"
          value={IIN}
          size="medium"
          onChange={(e) => setIIN(e.target.value)}
          variant="outlined"
          sx={{ mt: 2, width: 800 }}
        />
        <Button
          color="success"
          sx={{
            paddingX: 1.5,
            paddingY: 1,
            color: 'white',
            mt: 2,
            width: 800,
          }}
          variant="contained"
          onClick={() => handleClick()}
        >
          Жүйеге кіру
        </Button>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <Checkbox
            color="success"
          />
          <Typography>
            <Link to="/" style={{ color: 'black' }}>
              Я принимаю условия публичного договора-оферты
            </Link>
          </Typography>
        </Box>
        <Box sx={{
          display: 'flex', alignItems: 'center', mt: 1,
        }}
        >
          <Checkbox color="success" />
          <Link to="/" style={{ color: 'black' }}>
            Я ознакомлен и согласен с условиями политики конфиденциальности и персональных данных
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
