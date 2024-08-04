import React from 'react';

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode
}

export const Text: React.FC<TextProps> = ({ children, ...props }) => {
    return (
        <p {...props}>{children}</p>
    );
}