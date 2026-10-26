import { Link } from 'react-router'
import s from './CatalogCard.module.css'
import { PATH } from '../../../routing/Routing'
export function CatalogCard({product}) {
    return (
        <article className={s.card}>
            <div className={s.imageWrap}>
                <img
                    src={product.image}
                    alt="Товар 2"
                    className={s.image}
                    loading="lazy"
                />
            </div>
            <div className={s.body}>
                <h3 className={s.name}>{product.title}</h3>
                <p className={s.desc}>{product.description}</p>
                <div className={s.footer}>
                    <span className={s.price}>{product.price} ₽</span>
                    <Link to={`/product/${product.id}`}>
                        <button className={s.buy} type="button">
                        Купить
                    </button>
                    </Link>
                </div>
            </div>
        </article>
    )
}