import React from 'react';

import { Box, styled } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { Logo } from '~/assets/logo';
import { APPLICATION_NAME } from '~/config';

type Props = {
  children: React.ReactNode;
  meta?: React.ReactNode;
  title: string;
};

export function Page({ children, meta, title }: Props) {
  return (
    <>
      <Helmet>
        <title>{`${title} | ${APPLICATION_NAME}`}</title>
        {meta}
      </Helmet>

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <BoxStyle sx={{ }}>
          <Logo />
        </BoxStyle>
        {children}
      </Box>
    </>
  );
}

const BoxStyle = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  marginTop: theme.spacing(3),
  marginLeft: theme.spacing(3),
}));
