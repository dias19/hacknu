import React, { useState } from 'react';

import { Box } from '@mui/material';

import { ConfirmVerificationForm } from './confirm-verificaiton-form';
import { SendVerificationForm } from './send-verificaiton-form';

export function AdminLogin() {
  const [verNum, setVerNum] = useState(false);

  return (
    <Box>
      {
            verNum ? <ConfirmVerificationForm />
              : <SendVerificationForm setVerification={setVerNum} />

        }
    </Box>
  );
}
