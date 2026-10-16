import s from './CatalogCard.module.css'
export function CatalogCard() {
    return (
        <article className={s.card}>
            <div className={s.imageWrap}>
                <img
                    src="https://hips.hearstapps.com/hmg-prod/images/2e55cc9f-a54e-4e48-93cd-2bc0fd2b0b27.jpeg?crop=0.888888888889xw:1xh;center,top&resize=1200:*"
                    alt="Товар 2"
                    className={s.image}
                    loading="lazy"
                />
            </div>
            <div className={s.body}>
                <h3 className={s.name}>Название товара</h3>
                <p className={s.desc}>Короткое описание в одну строку</p>
                <div className={s.footer}>
                    <span className={s.price}>2 490 ₽</span>
                    <button className={s.buy} type="button">
                        Купить
                    </button>
                </div>
            </div>
        </article>
    )
}