'use client';
import Input from '@/components/input';
import { signUpNewUser } from '@/lib/actions';
import SubmitButton from '@/components/submit-button';
import { useFormState } from 'react-dom';
import Link from 'next/link';
import { sizes, variants } from '@/lib/variants';

const initialState = {
  message: '',
  error: false,
};

export default function SignUpForm() {
  const [state, formAction] = useFormState(signUpNewUser, initialState);
  return (
    <form action={formAction} className='space-y-2'>
      <Input
        type='email'
        placeholder='name@example.com'
        name='email'
        required
      />
      <Input type='password' placeholder='Password' name='password' required />
      <SubmitButton type='submit' size='sm' className='w-full'>
        Sign in with email
      </SubmitButton>
      <Link href='/login' className='m-2 mt-8 hover:underline'>
        Have an account? Login!
      </Link>
      <p
        className={`${
          state?.error ? 'text-red-500' : 'text-green-500'
        } text-sm text-center`}
      >
        {state?.message}
      </p>
    </form>
  );
}
