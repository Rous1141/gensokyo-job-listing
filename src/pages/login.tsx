import { useGoogleLogin } from '@react-oauth/google'
import React from 'react'
import { GoogleAccountAuthen } from '../api/Account/AccountAPI';
import { GoogleAccountRequestProps } from '../api/Account/IAccount';

export default function Login() {
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
   
      try {
        const { access_token } = tokenResponse;
        const userAccount: GoogleAccountRequestProps = await GoogleAccountAuthen(access_token);
        
      } catch (error) {
        console.error("Google Login Error:", error);
        alert("Something went wrong. Please try again.");
      }
    },
    onError: (error) => {
      console.log(error)
    }
  })
  return (
    <div>login</div>
  )
}
