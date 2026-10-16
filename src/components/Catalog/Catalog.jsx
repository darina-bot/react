import s from './Catalog.module.css'
import { CatalogCard } from './CatalogCard/CatalogCard'
export function Catalog() {
    return (
        <section className={s.catalog}>
            <div className="container">
                <header className={s.head}>
                    <h2 className={s.title}>Каталог</h2>
                    <p className={s.subtitle}>Подберите то, что подходит именно вам</p>
                </header>

                <div className={s.grid}>
                    <CatalogCard/>
                    <CatalogCard/>
                    <CatalogCard/>
                </div>
            </div>
        </section>
    )
}