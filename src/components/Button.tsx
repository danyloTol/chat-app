type ButtonProps = {
    text: string;
    color?: string;
    type?: "default" | "outline";
    padX?: number;
    padY?: number;
    width?: number;
    fontSize?: number;
}

function Button({text, color = "#FFFFFF", type = "default", padX = 0, padY = 0, width, fontSize = 16}: ButtonProps) {
    const isDefault = type === "default";

    return (
        <button 
            className={`rounded-full px-[${padX}] py-[${padY}] cursor-pointer ${isDefault ? "text-white" : "bg-transparent trxt-black"}`}
            style={{
                backgroundColor: isDefault ? color : undefined,
                outline: !isDefault ? `2px solid ${color}`: undefined,
                padding: `${padY}px ${padX}px`, 
                width: width,
                fontSize: fontSize,
            }}>
            {text}
        </button>
    )
}

export default Button;