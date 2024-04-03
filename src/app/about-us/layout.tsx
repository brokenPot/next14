import React from "react";


export const metadata = {
    title: "About us",
};

export default function Layout({children}: Readonly<{ children: React.ReactNode; }>) {

    return (
        <div>
            {children}
            &copy; NextJsisgood
        </div>
    );
}
