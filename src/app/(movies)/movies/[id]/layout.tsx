import React from 'react';


export const metadata = {
    title: "movie",
};

export default function  Layout({
                                    children,
                                }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            {children}
            영화
        </div>
    );
}
