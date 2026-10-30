import { Link, useParams } from 'react-router'
import s from './ProductPage.module.css'
import { PATH } from '../../routing/Routing';
import { useState } from 'react';
import { useEffect } from 'react';

export function ProductPage() {
    const [product, setProduct] = useState({});
    const [category, setCategory] = useState({});
    const { id } = useParams();

    useEffect(() => {
        (async function load() {

            const prodRes = await fetch('http://localhost:3000/products/' + id);
            const productFromServer = await prodRes.json();
            setProduct(productFromServer);

            const catRes = await fetch ('http://localhost:3000/categories/'+productFromServer.categoryId);
            const categoryFromServer = await catRes.json();
            setCategory(categoryFromServer);

        })();
    }, [id]);

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