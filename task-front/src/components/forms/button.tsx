import type { ReactNode } from "react"

interface ButtonPrps{
    children: ReactNode
    type: "submit" | "button"
    className?:string
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({children, type, className, onClick}:ButtonPrps) {
    return (
        <button
            type= {type} 
            className={className}
            onClick={onClick}
        >
            {children}
        </button>
    )
}