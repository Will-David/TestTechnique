import type { ReactNode } from "react"

interface BodyProps{
    children: ReactNode
}

export default function Body({children}:BodyProps) {
    return (
        <div>
            {children}
        </div>
    )
}