import { Link, useParams } from 'react-router'
import s from './ProductPage.module.css'
import { categories, products } from '../../../dist/assets/data';
import { PATH } from '../../routing/Routing';

export function ProductPage() {

    const {id} = useParams();
    const product = products.find(product => product.id == id);
    const category = categories.find(category => category.id == product.categoryId);

    return (
        <section className={s.page}>
            <div className={s.container}>
                <nav className={s.breadcrumbs} aria-label="Хлебные крошки">
                    <Link to={PATH.Home} className={s.crumb}>Главная</Link>
                    <span className={s.crumbSep}>/</span>
                    <Link to={PATH.Catalog} className={s.crumb}>Каталог</Link>
                    <span className={s.crumbSep}>/</span>
                    <span className={s.crumbCurrent}>{product.title}</span>
                </nav>

                <div className={s.layout}>
                    <div className={s.gallery}>
                        <div className={s.imageWrap}>
                            <img src={product.image} alt={product.title} className={s.image} />
                        </div>
                    </div>

                    <div className={s.info}>
                        <span className={s.category}>{category.title}</span>
                        <h1 className={s.title}>{product.title}</h1>
                        <p className={s.desc}>
                            {product.description}
                        </p>

                        <div className={s.priceRow}>
                            <span className={s.price}>{product.price} ₽</span>
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