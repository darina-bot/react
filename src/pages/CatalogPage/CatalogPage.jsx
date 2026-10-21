import { Catalog } from "../../components/Catalog/Catalog";
import s from './CatalogPage.module.css'

export function CatalogPage() {
    return (
        <section className={s.catalog}>
            <div className="container">
                <header className={s.head}>
                    <h2 className={s.title}>Каталог</h2>
                    <p className={s.subtitle}>Подберите то, что подходит именно вам</p>
                </header>

                <Catalog/>
            </div>
        </section>
    )
}