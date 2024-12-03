"use client"
import React from 'react';
import { FieldValue, FieldValues, UseFormRegister } from 'react-hook-form';
import UserTypeCard from './user-type-card';

//TODO 很难！！！ 
type Props = {
    register: UseFormRegister<FieldValues>,
    userType: 'student' | 'owner',
    setUserType: React.Dispatch<React.SetStateAction<'owner'| 'student'>>
}

const TypeSelectionForm = ({register,setUserType,userType}: Props) => {
    return (
      <div>
        <h2 className="text-gravel md:text-4xl font-bold">
          create an account
        </h2>
        <p className='text-iridium md:text-sm mt-1'>
          Tell us about yourself! What do you do? Let's tailor your
          <br /> experience so it best suits you
        </p>
        <UserTypeCard
          value="owner"
          title="I own a business"
          text="setting up my account for my company"
          register={register}
          userType={userType}
          setUserType={setUserType}
        >
        </UserTypeCard>

        <UserTypeCard
          value="student"
          title="I am a student"
          text="Looking to learn about the tool"
          register={register}
          userType={userType}
          setUserType={setUserType}
        >
        </UserTypeCard>
      </div>
    );
};

export default TypeSelectionForm;