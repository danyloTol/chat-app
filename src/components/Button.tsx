import { useState } from 'react';

type ButtonProps = {
    text: string;
    bgColor?: string;
    textColor?: string;
    hoverColor?: string;
    type?: "default" | "outline";
    padX?: number;
    padY?: number;
    width?: number | string;
    fontSize?: number;
    hoverColor?: string;
}

function Button({text, bgColor = "#FFFFFF", hoverColor, type = "default", padX = 0, padY = 0, width, fontSize = 16}: ButtonProps) {
    const [isHovered, setIsHovered] = useState(false)
    const isDefault = type === "default";
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`rounded-full px-[${padX}] py-[${padY}] cursor-pointer ${isDefault ? "text-white" : "bg-transparent trxt-black"} duration-300`}
            style={{
                backgroundColor: isDefault ? isHovered ? hoverColor : bgColor : isHovered ? hoverColor : undefined,  
                color: isDefault ? '#FFFFFF' : bgColor,
                border: !isDefault ? `3px solid ${bgColor}`: undefined,
                padding: `${padY}px ${padX}px`, 
                width: width,
                fontSize: fontSize,
                color: isDefault ? txtColor : isHovered ? hoverColor : bgColor,
            }}>
            {text}
        </button>
    )
}

export default Button;