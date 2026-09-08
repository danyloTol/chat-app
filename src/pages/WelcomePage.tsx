import { Link } from 'react-router-dom';
import Button from '../components/Button';

function WelcomePage() {
    const BUTTON_WIDTH = 250;

    return (
        <div className='w-full h-full flex flex-col gap-[40vh] items-center'>
            <div className='mt-[8vh]'>
                <h1 className='text-8xl font-bold fade-in-element-1s'>WELCOME</h1>
                <p className='text-xl fade-in-element-2s'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            
            <div className='flex flex-col items-center'>
                <p className='text-xl my-5 fade-in-element-2s'>Do you wanna join us?</p>
                <div className='flex flex-row gap-10 fade-in-element-3s'>
                    <Link to="/signup">
                        <Button text='Get Started' type='default' bgColor='#399e47' hoverColor='#24692d' padY={10} width={BUTTON_WIDTH} fontSize={24}/>
                    </Link>
                    <Link to="/login">
                        <Button text='Log In' type='outline' bgColor='#399e47' hoverColor='#e0e0e0' padY={10} width={BUTTON_WIDTH} fontSize={24}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default WelcomePage;