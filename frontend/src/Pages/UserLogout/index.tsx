import axios from 'axios';
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Index: React.FC = () => {    
    const navigate = useNavigate();
    const logoutCalled = useRef(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token || logoutCalled.current) {
            navigate('/login');
            return;
        }

        const logout = async () => {
            if (logoutCalled.current) return;
            logoutCalled.current = true;

            try {
                await axios.get('http://localhost:4000/users/logout', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                navigate('/login');
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    console.error('Logout failed:', error.response?.data || error.message);
                }
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                navigate('/login');
            }
        };

        logout();
    }, [navigate]);

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-xl animate-pulse">Logging out...</div>
        </div>
    );
};

export default Index;