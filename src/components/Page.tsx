import React from 'react';

import {
  Box, styled, Button, Typography,
} from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

import { Logo } from '~/assets/logo';
import { APPLICATION_NAME } from '~/config';

type Props = {
  children: React.ReactNode;
  meta?: React.ReactNode;
  title: string;
};

export function Page({ children, meta, title }: Props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };

  return (
    <>
      <Helmet>
        <title>{`${title} | ${APPLICATION_NAME}`}</title>
        {meta}
      </Helmet>

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <BoxStyle>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
            <Typography variant="caption" color="green">
              Қазақша
            </Typography>
            <Typography variant="caption" color="green">
              Руский
            </Typography>
          </Box>
          <Logo />
          <Button color="success" onClick={handleClick}>Login</Button>

        </BoxStyle>
        {children}
      </Box>
    </>
  );
}

const BoxStyle = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: theme.spacing(3),
}));
