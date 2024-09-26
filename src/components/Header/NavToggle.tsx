import React from "react";
import cn from "classnames";
import styles from "./NavToggle.module.scss";

interface NavToggleProps {
    disabled?: boolean;
    isActive?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const NavToggle: React.FC<NavToggleProps> = ({disabled, isActive, onClick}) => {
    return (
        <button className={cn(styles.navToggle, {
            [styles.active]: isActive,
        })}
                aria-label="Переключение навигации"
                onClick={onClick}
                disabled={disabled}
        >
            <span/><span/><span/>
        </button>
    )
}

export default NavToggle;