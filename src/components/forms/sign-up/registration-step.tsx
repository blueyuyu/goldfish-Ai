"use client"
import { useAuthContextHook } from '@/context/use-auth-context';
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import TypeSelectionForm from './type-selection-form';
import { loadGetInitialProps } from 'next/dist/shared/lib/utils';

type Props = {}

const RegistrationFormStep = (props: Props) => {
    const {register,formState: {errors},setValue} = useFormContext();
    const { currentStep } = useAuthContextHook();

    const [onOtp, setOnOtp ] = useState<string>('');

    const [onUserType, setOnUserType] =  useState<'owner'| 'student'>('owner')

    // TODO 啥意思
    setValue('otp',onOtp);
    // console.log(' currentStep', currentStep)

    switch (currentStep) {
        case 1:
          console.log('进入第一步',true)
            return ( 
                <TypeSelectionForm
                register={register}
                userType={onUserType}
                setUserType={setOnUserType}
                >
                </TypeSelectionForm>
              );
            break;
        case 2:
            return (
                <div>RegistrationFormStep</div>
              );
        break;

        case 3:
            return (
                <div>RegistrationFormStep</div>
              )
        break;

        default:
            return (
                <div>RegistrationFormStep</div>
              );
            break;
    }


};

export default RegistrationFormStep;