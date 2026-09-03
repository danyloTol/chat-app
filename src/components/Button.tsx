type ButtonProps = {
    text: string;
    color?: string;
    type?: "default" | "outline";
}

function Button({text, color = "#000000", type = "default"}: ButtonProps) {
    return (
        <button 
            className={(type === "default") ? `bg-${color}` : `outline-2 outline-${color}`}>
            {text}
        </button>
    )
}

export default Button;