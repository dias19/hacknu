import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type Service = {
  id: number;
  name: string;
};

interface ServiceState {
    services: Service[];
  }

const initialState: ServiceState = {
  services: [],
};

export const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    addService(state, action: PayloadAction<Service>) {
      state.services.push(action.payload);
    },
    removeService(state, action: PayloadAction<number>) {
      const index = state.services.findIndex((service) => service.id === action.payload);
      if (index !== -1) {
        state.services.splice(index, 1);
      }
    },
  },
});

export const { addService, removeService } = serviceSlice.actions;

export const serviceReducer = serviceSlice.reducer;
