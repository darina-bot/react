import s from './ProductPage.module.css'

export function ProductPage() {
    return (
        <section className={s.page}>
            <div className={s.container}>
                <nav className={s.breadcrumbs} aria-label="Хлебные крошки">
                    <a href="/" className={s.crumb}>Главная</a>
                    <span className={s.crumbSep}>/</span>
                    <a href="/catalog" className={s.crumb}>Каталог</a>
                    <span className={s.crumbSep}>/</span>
                    <span className={s.crumbCurrent}>Название товара</span>
                </nav>

                <div className={s.layout}>
                    <div className={s.gallery}>
                        <div className={s.imageWrap}>
                            <img src="" alt="Название товара" className={s.image} />
                        </div>
                    </div>

                    <div className={s.info}>
                        <span className={s.category}>Категория</span>
                        <h1 className={s.title}>Название товара</h1>
                        <p className={s.desc}>
                            Подробное описание товара: материалы, характеристики, особенности
                            использования. Здесь можно рассказать о преимуществах и том, что
                            делает этот товар особенным.
                        </p>

                        <div className={s.priceRow}>
                            <span className={s.price}>1 990 ₽</span>
                        </div>

                        <button type="button" className={s.buy}>
                            В корзину
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}