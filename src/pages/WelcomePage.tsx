import Button from '../components/Button';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';    

export type PageMode = 'welcome' | 'login' | 'signup';

export default function WelcomePage() {
    const BUTTON_WIDTH = 250;
    const [pageMode, setPageMode] = useState<PageMode>('welcome');

    return (
        <div style={{
            display: 'flex',
            flexDirection: pageMode === 'welcome' ? 'column' : 'row',
            width: '100vw',
            height: '100vh',
            alignItems: 'center',
            justifyContent: pageMode === 'welcome' ? 'center' : 'space-around',
            padding: '40px',
            boxSizing: 'border-box',
            transition: 'justify-content 0.8s ease'
        }}>
            <motion.h1
                layout
                transition={{ type: 'spring', stiffness: 100, damping: 15}}
                style={{
                    fontSize: pageMode === 'welcome' ? '4rem' : '2.5rem',
                    margin: 0
                }}>
                WELCOME
            </motion.h1>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', minWidth: '300px' }}>

                <AnimatePresence mode="wait">
                
                {pageMode === 'welcome' && (
                    <motion.div
                    key="welcome-buttons"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
                    >
                    <Button text='Get Started Now' bgColor='#32a852' txtColor='#FFFFFF' type='default' width={250} padY={10} fontSize={24} hoverColor='#206933' onClick={() => setPageMode('signup')} />
                    <Button text='Log In' bgColor='#32a852' type='outline' width={250} padY={10} fontSize={24} hoverColor='#206933' onClick={() => setPageMode('login')} />
                    </motion.div>
                )}

                {pageMode === 'signup' && (
                    <motion.div
                    key="signup-form"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5 }}
                    style={formContainerStyle}
                    >
                    
                    </motion.div>
                )}

                {pageMode === 'login' && (
                    <motion.div
                    key="login-form"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5 }}
                    style={formContainerStyle}
                    >
                    
                    </motion.div>
                )}

                </AnimatePresence>
            </div>
            </div>
        );
        }

        const buttonStyle = {
        padding: '12px 24px',
        fontSize: '1rem',
        backgroundColor: '#3b82f6',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'background 0.2s',
        };

        const inputStyle = {
        padding: '10px',
        borderRadius: '6px',
        border: '1px solid #475569',
        backgroundColor: '#1e293b',
        color: 'white',
        fontSize: '1rem',
        };

        const formContainerStyle = {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '12px',
        background: '#1e293b',
        padding: '24px',
        borderRadius: '12px',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
        };

        const backButtonStyle = {
        background: 'none',
        border: 'none',
        color: '#94a3b8',
        cursor: 'pointer',
        textDecoration: 'underline',
        marginTop: '5px'
        };
