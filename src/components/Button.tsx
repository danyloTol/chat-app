type ButtonProps = {
    text: string;
    color?: string;
    btnType?: "default" | "outline";
}

function Button({text, color, btnType}: ButtonProps) {
    return (
        <button>
            {text}
        </button>
    )
}

export default Button;