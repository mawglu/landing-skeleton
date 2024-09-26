import React from "react";
import cn from "classnames";
import styles from "./NavItem.module.scss"

interface NavItemProps {
    title: string;
    link: string;
    disabled?: boolean;
    isActive?: boolean;
    children?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLLIElement>) => void;
}

const NavItem: React.FC<NavItemProps> = ({title, link, disabled, isActive, onClick}) => {
    return (
        <li className={cn(styles.navItem, {
            [styles.disabled]: disabled,
            [styles.active]: isActive,
        })}
            onClick={onClick}
        >
            <a href={link}>
                {title}
            </a>
        </li>
    )
}

export default NavItem;