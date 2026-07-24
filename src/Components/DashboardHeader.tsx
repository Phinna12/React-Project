import type { ReactNode } from "react";

interface DashboardHeaderProps {
    title: string;
    children: ReactNode
}

function DashboardHeader({ title, children }: DashboardHeaderProps) {
    return (
        <header style={{ textAlign: "center", marginBottom: "20px" }}>
            <h1>{title}</h1>
            {children}
        </header>
    );
}

export default DashboardHeader