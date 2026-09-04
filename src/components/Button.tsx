import { useState } from "react";


type ButtonProps = {
    text: string;
    bgColor?: string;
    txtColor?: string;
    type?: "default" | "outline";
    padX?: number;
    padY?: number;
    width?: number;
    fontSize?: number;
    hoverColor?: string;
    onClick?: () => void;
}

function Button({text, bgColor = "#FFFFFF", txtColor = "#000000", type = "default", padX = 0, padY = 0, width, fontSize = 16, hoverColor = bgColor, onClick}: ButtonProps) {
    const isDefault = type === "default";
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button 
            className={`rounded-full cursor-pointer transition duration-300`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                backgroundColor: isDefault ? (isHovered ? hoverColor : bgColor) : undefined,
                outline: !isDefault ? `3px solid ${isHovered ? hoverColor : bgColor}`: undefined,
                padding: `${padY}px ${padX}px`, 
                width: width,
                fontSize: fontSize,
                color: isDefault ? txtColor : isHovered ? hoverColor : bgColor,
            }}
            onClick={onClick}>
            {text}
        </button>
    )
}

export default Button;