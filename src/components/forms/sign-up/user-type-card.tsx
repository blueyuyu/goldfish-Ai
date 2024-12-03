import { Card, CardContent, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { User } from 'lucide-react';
import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

type Props = {
    value: string,
    title: string,
    text: string,
    register: UseFormRegister<FieldValues>,
    userType: 'student' | 'owner',
    setUserType: React.Dispatch<React.SetStateAction<'owner' | 'student'>>
}

const UserTypeCard = ({ value, title, text, userType, register, setUserType }: Props) => {
    return (
        <Label htmlFor={value}>
            <Card
                className={
                    cn(
                        'w-full cursor-pointer mt-2',
                        userType == value && 'border-orange'
                    )}
            >
                <CardContent className='flex justify-between p-2'>
                    <div className="flex items-center gap-3">
                        <Card
                            className={
                                cn(
                                    'flex justify-center p-3',
                                    userType == value && 'border-orange'
                                )}>
                            <User size={30} className={
                                cn(userType == value ? 'text-orange' : 'text-gray-400')
                            }>
                            </User>
                        </Card>
                        <div className="">
                            <CardDescription
                                className={cn(
                                    userType == value ? 'text-orange' : 'text-gray-400'
                                )}
                            >
                                {title}
                            </CardDescription>
                            <CardDescription
                                className={cn(
                                    userType == value ? 'text-orange' : 'text-gray-400'
                                )}
                            >
                                {text}
                            </CardDescription>
                        </div>
                    </div>
                    <div>
                        <div className={
                            cn('w-4 h-4 rounded-full', userType == value ? 'bg-orange' : 'bg-platinum')
                        }
                        >
                            <Input
                                {...register('type', {
                                    onChange: (event) => setUserType(event.target.value),
                                })}
                                value={value}
                                id={value}
                                className='hidden'
                                type='radio'
                            >
                            </Input>
                        </div>
                    </div>
                </CardContent>

            </Card>

        </Label>
    );
};

export default UserTypeCard;