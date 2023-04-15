import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import { Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import adminAuthApi from '~/api/admin-auth/api';
import { FormProvider, RHFTextField } from '~/components/hook-form';

type FormValuesProps = {
  verificationNumber: string,
};
const ConfirmSchema = Yup.object().shape({
  verificationNumber: Yup.string().required('Жасырын кодты дурыс және толық толтырыңыз'),
});

const defaultValues = {
  verificationNumber: '',
};

export function ConfirmVerificationForm() {
  const [confirmVerification] = adminAuthApi.endpoints.confirmVerification.useMutation();
  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(ConfirmSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: FormValuesProps) => {
    const res = await confirmVerification({ verificationNumber: data.verificationNumber }).unwrap();
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <RHFTextField
          name="phoneNumber"
          label="Жасырын кодты толтырыңыз"
        />
        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          color="secondary"
          variant="contained"
          loading={isSubmitting}
        >
          Кіру
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
