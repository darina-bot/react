import s from './Catalog.module.css'
import { CatalogCard } from './CatalogCard/CatalogCard'
export function Catalog() {
    return (
        <div className={s.grid}>
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
        </div>
    )
}