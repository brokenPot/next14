import React from 'react';


export const metadata = {
    title: "sales",
};

export default function  Layout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            {children}
            $$$$
        </div>
    );
}
