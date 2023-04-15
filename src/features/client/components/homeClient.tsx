import React from 'react';

import { Box, Button, TextField } from '@mui/material';

export function HomeClient() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    }}
    >
      <TextField
        label="ИИН"
        variant="outlined"
        sx={{
          width: 600,
        }}
      />
      <Button
        variant="contained"
        color="success"
        sx={{
          color: 'white',
          mt: 2,
          width: 600,
        }}
      >
        Кіру
      </Button>
    </Box>
  );
}
