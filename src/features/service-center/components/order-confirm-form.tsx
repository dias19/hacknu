import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box, Stack, styled, Button,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { FormProvider, RHFTextField } from '~/components/hook-form';

type OrderFormData = {
    code: string;
}

type Props = {
  buttonTitle: string;
  onCloseForm: VoidFunction,
};

const codeSchema = yup.object().shape(
  {
    code: yup.string().required().min(4, 'Код должен составлять 4 цифры').max(4),
  },
);

export function OrderConfirmForm({
  buttonTitle, onCloseForm,
}: Props) {
  const defaultValues = {
    code: '',
  };

  const methods = useForm<OrderFormData>({
    resolver: yupResolver(codeSchema),
    defaultValues,
    mode: 'onChange',
  });

  const {
    formState: { isValid },
    handleSubmit,
  } = methods;

  const onSubmit = (data: OrderFormData) => {
    console.log(data);
  };
  return (
    <FormProviderStyle
      methods={methods}
    >
      <Stack spacing={2}>
        <Box sx={{ flexGrow: 1 }}>
          <Stack spacing={1} sx={{ mt: 2 }}>
            <RHFTextField name="code" label="Код" color="success" />
          </Stack>
        </Box>
        <BoxButtonStyle>
          <Button variant="outlined" size="large" onClick={onCloseForm} color="error">
            Отмена
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleSubmit(onSubmit)}
            size="large"
            disabled={!isValid}
          >
            {buttonTitle}
          </Button>
        </BoxButtonStyle>

      </Stack>

    </FormProviderStyle>
  );
}

const BoxButtonStyle = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: theme.spacing(1),
}));

const FormProviderStyle = styled(FormProvider)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
});
