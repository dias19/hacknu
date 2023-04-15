import React from 'react';

import {
  CardContent, Typography, Card, IconButton, Container, Box, Tab, Tabs, CardActionArea,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Iconify } from '~/components/Iconify';
import { useAppDispatch, useAppSelector } from '~/store';

import { addService, removeService } from '../servicesSlice';

export function ServicesList() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const navigate = useNavigate();

  const selectedServices = useAppSelector((state) => state.service.services);

  const dispatch = useAppDispatch();

  const handleAddService = (e: React.SyntheticEvent) => {
    const newService = {
      id: 1,
      name: 'Сотталғандығы болуы не болмауы туралы анықтама беру',
    };

    dispatch(addService(newService));
    handleChange(e, 1);
  };

  const handleRemoveService = () => {
    dispatch(removeService(1));
  };

  return (
    <Container>
      <Typography sx={{
        fontSize: 24,
        mt: 3,
        mb: 2,
      }}
      >
        Саламатсызба ИмяФамилия
      </Typography>
      <Box sx={{
        flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 150,
      }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          orientation="vertical"
          indicatorColor="secondary"
        >
          <Tab label="Сервистер" sx={{ width: 200 }} />
          <Tab label="Менің сервистерім" sx={{ width: 200 }} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Typography sx={{ fontSize: 18 }}>
            Барлық сервистер
          </Typography>
          <Card elevation={10} sx={{ mt: 2 }}>
            <CardContent sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 2,
            }}
            >
              <Typography>
                Сотталғандығы болуы не болмауы туралы анықтама беру
              </Typography>
              <IconButton
                sx={{ height: 40, width: 40 }}
                color="success"
                onClick={(e) => handleAddService(e)}
              >
                <Iconify icon="material-symbols:add" width={40} height={40} />
              </IconButton>
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={value} index={1}>
          {selectedServices.length > 0
          && (
            <>
              <Typography sx={{ fontSize: 18 }}>
                Таңдалған сервистер
              </Typography>
              <Card elevation={10} sx={{ mt: 2 }}>
                <CardActionArea onClick={() => navigate('/client/services/:1')}>
                  <CardContent sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: 2,
                  }}
                  >
                    <Typography>
                      Сотталғандығы болуы не болмауы туралы анықтама беру
                    </Typography>
                    <IconButton
                      sx={{ height: 40, width: 40 }}
                      color="error"
                      onClick={handleRemoveService}
                    >
                      <Iconify icon="ic:sharp-clear" width={40} height={40} />
                    </IconButton>
                  </CardContent>
                </CardActionArea>
              </Card>
            </>
          )}
          {selectedServices.length === 0
          && (
            <Typography sx={{ fontSize: 18 }}>
              Сервистер таңдалмаған
            </Typography>
          )}
        </TabPanel>
      </Box>
    </Container>
  );
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{
        marginLeft: 20,
      }}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
