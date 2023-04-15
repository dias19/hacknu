import React from 'react';

import { styled, Container, Box } from '@mui/material';

import { Page } from '~/components/Page';
import { Orders } from '~/features/service-center';
import { useResponsive } from '~/hooks/useResponsive';

const ContentStyle = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  overflow: 'hidden',
  width: '100%',
  minHeight: theme.spacing(5),
  padding: theme.spacing(3),
}));

export function ServiceSenterPage() {
  const isMobile = useResponsive('down', 'sm');

  const border = { borderRadius: '10px' };
  const direction = { flexDirection: 'row' };
  const shadow = { boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.3)' };

  if (isMobile) {
    border.borderRadius = 'none';
    direction.flexDirection = 'column';
    shadow.boxShadow = 'none';
  }

  return (
    <Page title="Homepage">
      <Container sx={{ paddingTop: '12px' }}>
        <ContentStyle sx={{ ...border, ...direction, ...shadow }}>
          <Orders />
        </ContentStyle>
      </Container>
    </Page>
  );
}
