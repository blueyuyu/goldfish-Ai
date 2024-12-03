"use client"
import { Loader } from '@/components/loader';
import { AuthContentProvider } from '@/context/use-auth-context';
import { useSignUpForm } from '@/hooks/sign-up/use-sign-up';
import React from 'react';
import { FormProvider } from 'react-hook-form';

type Props = {
    children: React.ReactNode
}

export const SignUpFormProvider = ({children}: Props) => {

  const {methods,onGenerateOTP,onHandleSubmit,loading} =  useSignUpForm();
    return (
      <AuthContentProvider>
        <FormProvider {...methods}>
          <form
          onSubmit={onHandleSubmit}
          className='h-full'
          >
            <div className='flex flex-col justify-between gap-3 h-full'>
              <Loader loading={loading}>
                {children}
              </Loader>
            </div>
          </form>
        </FormProvider>
      </AuthContentProvider>
    );
};