import s from './Banner.module.css'
import bannerBg from '../../assets/bannerBg.jfif'

export function Banner() {
    return (
        <section
            className={s.hero}
            style={{
                backgroundImage: `url(${bannerBg})`,
                background: "center cover/ no-repeat",
            }}
        >
            <div className={s.content}>
                <h1 className={s.title}>Создавайте быстрее вместе с нами</h1>
                <p className={s.subtitle}>
                    Всё, что нужно вашей команде для продуктивной работы — в одном месте.
                </p>
                <a href="#contact" className={s.cta}>
                    Начать бесплатно
                </a>
            </div>
        </section>
    );
}