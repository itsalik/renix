import React from 'react';

interface ButtonProps {
    text?: string;
    type?: "primary" | "success" | "info" | "warning" | "danger";
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    className?: string;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

declare const Button: React.FC<ButtonProps>;

export { Button };
