import s from './Footer.module.css'

export function Footer() {
    return (
        <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.top}>
          <div className={s.brand}>
            <a href="/" className={s.logo}>
              <span className={s.logoMark}>◆</span>
              <span className={s.logoText}>BrandName</span>
            </a>
            <p className={s.tagline}>
              Делаем инструменты, которые помогают командам работать быстрее.
            </p>
          </div>

          <nav className={s.columns} aria-label="Навигация в подвале">
            <div className={s.column}>
              <h3 className={s.columnTitle}>Продукт</h3>
              <ul className={s.columnList}>
                <li>
                  <a href="#features" className={s.columnLink}>
                    Возможности
                  </a>
                </li>
                <li>
                  <a href="#pricing" className={s.columnLink}>
                    Тарифы
                  </a>
                </li>
                <li>
                  <a href="#integrations" className={s.columnLink}>
                    Интеграции
                  </a>
                </li>
              </ul>
            </div>

            <div className={s.column}>
              <h3 className={s.columnTitle}>Компания</h3>
              <ul className={s.columnList}>
                <li>
                  <a href="#about" className={s.columnLink}>
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#blog" className={s.columnLink}>
                    Блог
                  </a>
                </li>
                <li>
                  <a href="#contact" className={s.columnLink}>
                    Контакты
                  </a>
                </li>
              </ul>
            </div>

            <div className={s.column}>
              <h3 className={s.columnTitle}>Поддержка</h3>
              <ul className={s.columnList}>
                <li>
                  <a href="#docs" className={s.columnLink}>
                    Документация
                  </a>
                </li>
                <li>
                  <a href="#help" className={s.columnLink}>
                    База знаний
                  </a>
                </li>
                <li>
                  <a href="#status" className={s.columnLink}>
                    Статус
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className={s.bottom}>
          <p className={s.copyright}>© {new Date().getFullYear()} BrandName</p>
          <ul className={s.legal}>
            <li>
              <a href="#privacy" className={s.legalLink}>
                Конфиденциальность
              </a>
            </li>
            <li>
              <a href="#terms" className={s.legalLink}>
                Условия
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    )
}