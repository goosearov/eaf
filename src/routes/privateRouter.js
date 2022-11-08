import React from 'react';
import { useAuth } from '../contexts/auth';
import { Outlet } from 'react-router-dom';
import SignIn from '../pages/signIn';

export default function PrivateRouter() {
    const {user} = useAuth();
    console.log(user);
    return user ? <Outlet /> : <SignIn/>;
}