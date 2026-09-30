import { useRef } from 'react'
import { Link } from 'react-router-dom'

function PortfolioCarousel({ projetos }) {
  const carouselRef = useRef(null)

  function deslizar(direcao) {
    if (!carouselRef.current) return

    const largura =
      carouselRef.current.clientWidth * 0.78

    carouselRef.current.scrollBy({
      left: direcao * largura,
      behavior: 'smooth',
    })
  }

  return (
    <div className="portfolio-carousel">

      {/* ========================================
          SETA ESQUERDA
      ======================================== */}

      <button
        type="button"
        className="portfolio-carousel-arrow portfolio-carousel-prev"
        onClick={() => deslizar(-1)}
        aria-label="Ver trabalhos anteriores"
      >
        ‹
      </button>


      {/* ========================================
          ÁREA DESLIZÁVEL
      ======================================== */}

      <div
        ref={carouselRef}
        className="portfolio-carousel-viewport"
      >

        <div className="portfolio-carousel-track">

          {projetos.map((projeto) => (

            <article
              className="portfolio-carousel-item"
              key={projeto.id}
            >

              <div className="portfolio-carousel-card">

                {/* Moldura */}
                <div className="portfolio-carousel-frame">

                  <span className="portfolio-carousel-line carousel-line-purple"></span>
                  <span className="portfolio-carousel-line carousel-line-blue"></span>

                  <span className="portfolio-carousel-corner carousel-corner-tl"></span>
                  <span className="portfolio-carousel-corner carousel-corner-tr"></span>
                  <span className="portfolio-carousel-corner carousel-corner-bl"></span>
                  <span className="portfolio-carousel-corner carousel-corner-br"></span>

                  <div className="portfolio-carousel-image-wrapper">

                    <img
                      src={projeto.imagem}
                      alt={projeto.titulo}
                      className="portfolio-carousel-image"
                      loading="lazy"
                    />

                  </div>

                </div>


                {/* Informações */}
                <div className="portfolio-carousel-body">

                  <span className="portfolio-carousel-category">

                    {projeto.categoria === 'icone'
                      ? 'Ícone'
                      : 'Banner'}

                    {' · '}

                    {projeto.contexto}

                  </span>

                  <h3 className="portfolio-carousel-title">
                    {projeto.titulo}
                  </h3>

                  <p className="portfolio-carousel-description">
                    {projeto.descricao}
                  </p>

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>


      {/* ========================================
          SETA DIREITA
      ======================================== */}

      <button
        type="button"
        className="portfolio-carousel-arrow portfolio-carousel-next"
        onClick={() => deslizar(1)}
        aria-label="Ver próximos trabalhos"
      >
        ›
      </button>


      {/* ========================================
          LINK PARA PORTFÓLIO
      ======================================== */}

      <div className="text-center mt-4">

        <Link
          to="/portfolio"
          className="btn btn-outline-light"
        >
          Ver portfólio completo →
        </Link>

      </div>

    </div>
  )
}

export default PortfolioCarousel