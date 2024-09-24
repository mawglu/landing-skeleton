import React, {useState} from "react";
import NavItem from "./NavItem";
import NavToggle from "./NavToggle";
import styles from "./Navbar.module.scss";

interface NavItemType {
    id: number;
    title: string;
    link: string;
    disabled: boolean;
}

const navItems: NavItemType[] = [
    {
        id: 0,
        title: 'О нас',
        link: '#about',
        disabled: false,
    },
    {
        id: 1,
        title: 'Тарифы',
        link: '#tariffs',
        disabled: true,
    },
    {
        id: 2,
        title: 'Преимущества',
        link: '#benefits',
        disabled: false,
    },
    {
        id: 3,
        title: 'Контакты',
        link: '#contacts',
        disabled: false,
    },
];

const NavBar: React.FC = () => {
    const [activeLinkId, setActiveLinkId] = useState<number | null>(null);
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

    const handleLinkClick = (id: number) => {
        setActiveLinkId(id);
    };

    const handleToggleNav = () => {
        setIsNavOpen((prev) => !prev);
    };

    return (
        <nav className={styles.navBar} aria-label="Навигация по сайту">
            <div className={styles.navBrand}>Navbar</div>

            <NavToggle onClick={handleToggleNav} isActive={isNavOpen}/>

            <ul className={styles.navBarMenu}>
                {navItems.map(item =>
                    <NavItem
                        key={item.id}
                        title={item.title}
                        link={item.link}
                        disabled={item.disabled}
                        isActive={activeLinkId === item.id}
                        onClick={() => handleLinkClick(item.id)}
                    />
                )}
            </ul>
        </nav>
    )
}

export default NavBar;