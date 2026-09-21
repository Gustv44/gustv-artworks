import { useState } from 'react'

import PageBanner from '../components/PageBanner'
import PortfolioCard from '../components/PortfolioCard'

import portfolio from '../data/portfolio'

function Portfolio() {
  const [filtro, setFiltro] = useState('todos')
  const [projetoSelecionado, setProjetoSelecionado] = useState(null)

  const projetosFiltrados =
    filtro === 'todos'
      ? portfolio
      : portfolio.filter((projeto) => projeto.categoria === filtro)

  function fecharModal() {
    setProjetoSelecionado(null)
  }

  return (
    <>
      {/* ========================= */}
      {/* BANNER                    */}
      {/* ========================= */}

      <PageBanner
        imagem="/assets/images/banner-portfolio.png"
        alt="Gustv Artworks - Portfólio"
      />


      {/* ========================= */}
      {/* INTRODUÇÃO                */}
      {/* ========================= */}

      <section className="portfolio-introduction py-5">

        <div className="container py-5">

          <div className="row justify-content-center text-center">

            <div className="col-lg-8">

              <span className="section-label">
                PORTFÓLIO
              </span>

              <h1 className="section-title mt-2">
                Conheça meus trabalhos.
              </h1>

              <p className="section-text mt-3">
                Esta é uma seleção de trabalhos desenvolvidos ao longo
                da minha jornada com manipulação de imagens e design digital.
              </p>

              <p className="section-text mt-3">
                Alguns projetos foram criados como estudos e experimentações,
                enquanto outros foram desenvolvidos para amigos e comunidades.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ========================= */}
      {/* GALERIA                   */}
      {/* ========================= */}

      <section className="portfolio-gallery-section py-5">

        <div className="portfolio-gallery-background" aria-hidden="true">

          <span className="portfolio-decoration-circle circle-1"></span>
          <span className="portfolio-decoration-circle circle-2"></span>
          <span className="portfolio-decoration-circle circle-3"></span>
          <span className="portfolio-decoration-circle circle-4"></span>
          <span className="portfolio-decoration-circle circle-5"></span>
          <span className="portfolio-decoration-circle circle-6"></span>

          <span className="portfolio-decoration-dot dot-1"></span>
          <span className="portfolio-decoration-dot dot-2"></span>
          <span className="portfolio-decoration-dot dot-3"></span>
          <span className="portfolio-decoration-dot dot-4"></span>
          <span className="portfolio-decoration-dot dot-5"></span>
          <span className="portfolio-decoration-dot dot-6"></span>

          <span className="portfolio-decoration-star star-a">✦</span>
          <span className="portfolio-decoration-star star-b">✧</span>
          <span className="portfolio-decoration-star star-c">⋆</span>
          <span className="portfolio-decoration-star star-d">✦</span>

          <span className="portfolio-decoration-curve curve-a"></span>
          <span className="portfolio-decoration-curve curve-b"></span>
          <span className="portfolio-decoration-curve curve-c"></span>
        </div>


        <div className="container py-5">

          {/* ========================= */}
          {/* FILTROS                  */}
          {/* ========================= */}

          <div className="portfolio-filters">

            <button
              type="button"
              className={`portfolio-filter ${
                filtro === 'todos' ? 'active' : ''
              }`}
              onClick={() => setFiltro('todos')}
            >
              Todas
            </button>

            <button
              type="button"
              className={`portfolio-filter ${
                filtro === 'banner' ? 'active' : ''
              }`}
              onClick={() => setFiltro('banner')}
            >
              Banners
            </button>

            <button
              type="button"
              className={`portfolio-filter ${
                filtro === 'icone' ? 'active' : ''
              }`}
              onClick={() => setFiltro('icone')}
            >
              Ícones
            </button>

          </div>


          {/* ========================= */}
          {/* GALERIA                  */}
          {/* ========================= */}

          <div className="portfolio-gallery-grid">

            {projetosFiltrados.map((projeto, index) => (

              <div
                className={`portfolio-gallery-item gallery-item-${index % 6}`}
                key={projeto.id}
              >

                <PortfolioCard
                  projeto={projeto}
                  onOpen={setProjetoSelecionado}
                />

              </div>

            ))}

          </div>


          {projetosFiltrados.length === 0 && (
            <div className="portfolio-empty text-center">
              <p>
                Nenhum projeto encontrado.
              </p>
            </div>
          )}

        </div>

      </section>


      {/* ========================= */}
      {/* MODAL                    */}
      {/* ========================= */}

      {projetoSelecionado && (

        <div
          className="portfolio-modal"
          onClick={fecharModal}
        >

          <div
            className="portfolio-modal-content"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              type="button"
              className="portfolio-modal-close"
              onClick={fecharModal}
              aria-label="Fechar visualização"
            >
              ×
            </button>


            <div className="portfolio-modal-image-container">

              <img
                src={projetoSelecionado.imagem}
                alt={projetoSelecionado.titulo}
                className="portfolio-modal-image"
              />

            </div>


            <div className="portfolio-modal-info">

              <span className="portfolio-category">
                {projetoSelecionado.categoria === 'icone'
                  ? 'Ícone'
                  : 'Banner'}
              </span>

              <h2 className="portfolio-modal-title">
                {projetoSelecionado.titulo}
              </h2>

              <p className="portfolio-modal-description">
                {projetoSelecionado.descricao}
              </p>

              <span className="portfolio-modal-context">
                Projeto de {projetoSelecionado.contexto}
              </span>

            </div>

          </div>

        </div>

      )}

    </>
  )
}

export default Portfolio