import React from 'react';
import { Outlet } from 'react-router-dom';
import SignIn from '../pages/signIn';
import {useAuth} from '../contexts/auth';

export default function PrivateRouter() {
    const {user} = useAuth();
    const userEmail = localStorage.getItem("user")
    return userEmail ? <Outlet /> : <SignIn/>;
}