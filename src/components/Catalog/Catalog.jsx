import { products } from '../../../dist/assets/data'
import s from './Catalog.module.css'
import { CatalogCard } from './CatalogCard/CatalogCard'
export function Catalog() {
    return (
        <div className={s.grid}>
            {
                products.map((product) => <CatalogCard  key={product.id} product={product}/>)
            }
        </div>
    )
}