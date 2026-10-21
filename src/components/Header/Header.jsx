import { Link } from 'react-router';
import { PATH } from '../../routing/Routing';
import s from './Header.module.css'

export function Header() {
    return (
        <header className={s.header}>
            <div className="container">
                <div className={s.header__inner}>
                    <Link to={PATH.Home} className={s.logo}>
                        <span className={s.logoMark}>◆</span>
                        <span className={s.logoText}>BrandName</span>
                    </Link>

                    <nav className={s.nav} aria-label="Основная навигация">
                        <ul className={s.navList}>
                            <li>
                                <Link to={PATH.Home} className={s.navLink}>
                                    Главная
                                </Link>
                            </li>
                            <li>
                                <Link to={PATH.Catalog} className={s.navLink}>
                                    Каталог
                                </Link>
                            </li>
                            <li>
                                <Link to="/cart" className={s.navLink}>
                                    Корзина
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <a href="#contact" className={s.cta}>
                        Связаться
                    </a>
                </div>
            </div>
        </header>
    );
}