import React from 'react';

interface MenuItemProps extends React.HTMLProps<HTMLDivElement> {
    children: React.ReactNode;
}

export const MenuItem: React.FC<MenuItemProps> = ({ children, ...props }) => { 
    return (
        <div {...props}>{children}</div>
    );
}