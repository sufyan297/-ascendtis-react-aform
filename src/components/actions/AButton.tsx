import React from 'react';
interface IProps {
    type: 'button' | 'submit';
    children: string;
    className?: string; 
}
const AButton: React.FC<IProps> = ({ type, children, className }) => {
    return (
        <button type={type} className={`rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${className}`}>{children}</button>
    )
}
export default AButton;