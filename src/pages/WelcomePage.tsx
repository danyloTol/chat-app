import Button from '../components/Button';

function WelcomePage() {
    const BUTTON_WIDTH = 250;

    return (
        <div>
            <h1>WELCOME</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Button text='Get Started' type='default' color='#000000' padY={10} width={BUTTON_WIDTH} fontSize={24}/>
            <Button text='Log In' type='outline' color='#000000' padY={10} width={BUTTON_WIDTH} fontSize={24}/>
        </div>
    )
}

export default WelcomePage;