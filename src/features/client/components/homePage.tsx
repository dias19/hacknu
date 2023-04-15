import React, { useState } from 'react';

import {
  Box,
  Button, Container, TextField, Typography,
} from '@mui/material';

export function HomePage() {
  const [IIN, setIIN] = useState('');

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
            width: 600,
          }}
          label="Тапсырыстын нөмері"
          defaultValue="12345"
          variant="outlined"
          size="medium"
        />
        <TextField
          label="ЖСН"
          value={IIN}
          size="medium"
          onChange={(e) => setIIN(e.target.value)}
          variant="outlined"
          sx={{ mt: 2, width: 600 }}
        />
        <Button
          color="success"
          sx={{
            paddingX: 1.5,
            paddingY: 1,
            color: 'white',
            mt: 2,
            width: 600,
          }}
          variant="contained"
        >
          Жүйеге кіру
        </Button>
      </Box>
    </Container>
  );
}
