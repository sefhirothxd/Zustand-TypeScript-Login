import React from 'react';
import { useAuthStore } from '../store/auth';
import { useNavigate } from 'react-router-dom';

type Props = {};

const ProfilePage = (props: Props) => {
  const { logout, profile } = useAuthStore();
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <h1>Profile</h1>
        <p>Username: {profile?.username.test}</p>
      </div>
      <button
        onClick={() => {
          logout();
          navigate('/login');
        }}
      >
        Log out
      </button>
    </div>
  );
};

export default ProfilePage;
