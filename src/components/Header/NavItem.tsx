import React from "react";
import cn from 'classnames';

interface NavItemProps {
    title: string;
    link: string;
    disabled?: boolean;
    isActive?: boolean;
    children?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const NavItem: React.FC<NavItemProps> = ({title, link, disabled, isActive}) => {
    return (
        <li className={cn('navItem', {
            disabled: disabled,
            active: isActive
        })}
        >
            <a href={link}>
                {title}
            </a>
        </li>
    )
}

export default NavItem;