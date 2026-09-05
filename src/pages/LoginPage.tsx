import { useState } from 'react';
import Button from '../components/Button'

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

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

    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="flex flex-col border-2 border-[#399e47]">
                <h1>Login</h1>
                <input 
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

                <input 
                    type="name"
                    name="name"
                    value={password}
                    onChange={handleChangePassword}
                    placeholder='password'
                    autoComplete='password'
                    required
                    aria-invalid={!!error}
                    aria-describedby={error ? "email-error" : undefined} 
                />
                <Button text='Log In'/>
            </div>
        </div>
    )
}
