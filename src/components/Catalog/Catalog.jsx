import { useState } from 'react'
import s from './Catalog.module.css'
import { CatalogCard } from './CatalogCard/CatalogCard'
import { useEffect } from 'react';
export function Catalog() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        async function load() {
            try {
                const res = await fetch('http://localhost:3000/products');
                if (!res.ok) {
                    throw new Error(`Ошибка ${res.status}: ${res.statusText}`);
                }
                const data = await res.json();
                setProducts(data);
            } catch (error) {
                setError(error.message);
            }
        }
        load();
    }, [])//один раз при монтировании компонента
    if(error) {
        return <p>Не удалось загрузить товары: {error}</p>
    }
    if(products.length === 0) {
        return <p>Товары не найдены</p>
    }
    return (
        <div className={s.grid}>
            {
                products.map((product) => <CatalogCard key={product.id} product={product} />)
            }
        </div>
    )
}