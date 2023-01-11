import React from 'react';
import { loginRequest, profileRequest } from '../api/auth';
import { useAuthStore } from '../store/auth';
import { useNavigate } from 'react-router-dom';

type Props = {};

const LoginPage = (props: Props) => {
  const { setToken, token, setProfile } = useAuthStore();
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
    const resLogin = await loginRequest(email, password);
    setToken(resLogin.data.token);
    const resProfile = await profileRequest(token);
    setProfile(resProfile.data.profile);
    navigate('/profile');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="email@mail.com" />
      <input type="password" placeholder="*******" />
      <button>Login</button>
    </form>
  );
};

export default LoginPage;
