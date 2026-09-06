import { useState } from 'react';
import Button from '../components/Button'

export default function SignupPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmail(value);

        if (value && !value.includes("@")) {
            setError("Email must contain the '@' symbol")
        } else {
            setError("")
        }
    }

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPassword(value);
    }

    const handleChangeConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setConfirmPassword(value);
    }

    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="w-[30vw] flex flex-col gap-5 items-center border-2 border-[#c2c2c2] rounded-3xl px-10 py-7">
                <h1 className='text-5xl'>Sign Up</h1>
                <input
                    className="
                        w-full py-2 px-5 border-2 border-gray-300 rounded-full transition-all duration-200 outline-none
                        focus:border-[#399e47] focus:ring-2 focus:ring-[#399e47]/20
                        disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed disabled:border-gray-200
                    "
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChangeEmail}
                    placeholder='example@gmail.com'
                    autoComplete='email'
                    required
                    aria-invalid={!!error}
                    aria-describedby={error ? "email-error" : undefined}
                />

                <div className='relative w-full max-w-sm'>
                    <input 
                        className="
                            w-full py-2 px-5 border-2 border-gray-300 rounded-full transition-all duration-200 outline-none
                            focus:border-[#399e47] focus:ring-2 focus:ring-[#399e47]/20
                            disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed disabled:border-gray-200
                        "
                        type={showPassword ? "text" : "password"}
                        name="password"
                        disabled={false}
                        value={password}
                        onChange={handleChangePassword}
                        placeholder='password'
                        autoComplete='password'
                        required
                        aria-invalid={!!error}
                        aria-describedby={error ? "email-error" : undefined} 
                    />
                    <button
                        type='button'
                        onClick={() => setShowPassword(!showPassword)}
                        className='absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 hover:text-gray-700 select-none'
                    >
                        {showPassword ? "Hide" : "Show"}
                    </button>
                </div>
                <div className='relative w-full max-w-sm'>
                    <input 
                        className="
                            w-full py-2 px-5 border-2 border-gray-300 rounded-full transition-all duration-200 outline-none
                            focus:border-[#399e47] focus:ring-2 focus:ring-[#399e47]/20
                            disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed disabled:border-gray-200
                        "
                        type={showPassword ? "text" : "password"}
                        name="ConfirmPassword"
                        disabled={false}
                        value={confirmPassword}
                        onChange={handleChangeConfirmPassword}
                        placeholder='confirm password'
                        required
                        aria-invalid={!!error}
                        aria-describedby={error ? "email-error" : undefined} 
                    />
                    <button
                        type='button'
                        onClick={() => setShowPassword(!showPassword)}
                        className='absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 hover:text-gray-700 select-none'
                    >
                        {showPassword ? "Hide" : "Show"}
                    </button>
                </div>
                
                <Button text='Log In' bgColor='#399e47' hoverColor='#24692d' padY={6} fontSize={24} width="100%"/>
                <p>Don't have an account yet? <a href="">Sign Up</a></p>
            </div>
        </div>
    )
}