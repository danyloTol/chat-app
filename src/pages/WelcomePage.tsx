import Button from '../components/Button';
import { useState } from 'react';

export type Variation = 'welcome' | 'login' | 'signup';

export default function WelcomePage() {
    const BUTTON_WIDTH = 250;
    const [pageVariation, setPageVariation] = useState<Variation>('welcome');

    return (
        <div className='w-full h-full flex flex-col items-center'>
            <h1 className='text-8xl font-bold mt-15 fade-in-element-1s'>WELCOME</h1>
            <p className='text-xl mb-70 fade-in-element-2s'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className='text-xl my-5 fade-in-element-2s'>Do you wanna join us?</p>
            <div className='flex flex-row gap-10 fade-in-element-3s'>
                <Button text='Get Started' type='default' bgColor='#09b036' txtColor='#FFFFFF' hoverColor='#078c2b' padY={10} width={BUTTON_WIDTH} fontSize={24} onClick={() => setPageVariation('signup')} />
                <Button text='Log In' type='outline' bgColor='#09b036' hoverColor='#078c2b' padY={10} width={BUTTON_WIDTH} fontSize={24} onClick={() => setPageVariation('login')} />
            </div>
        </div>
    )
}