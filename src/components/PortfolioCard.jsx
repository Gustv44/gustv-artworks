function PortfolioCard({ projeto, onOpen }) {
  const categoria =
    projeto.categoria === 'icone' ? 'Ícone' : 'Banner'

  return (
    <button
      type="button"
      className="portfolio-card h-100"
      onClick={() => onOpen(projeto)}
    >
      {/* ========================================
          MOLDURA DA ARTE
      ======================================== */}

      <div className="portfolio-art-frame">

        {/* Camadas externas */}
        <span className="portfolio-art-line portfolio-line-purple"></span>
        <span className="portfolio-art-line portfolio-line-blue"></span>

        {/* Cantos decorativos */}
        <span className="portfolio-art-corner portfolio-corner-top-left"></span>
        <span className="portfolio-art-corner portfolio-corner-top-right"></span>
        <span className="portfolio-art-corner portfolio-corner-bottom-left"></span>
        <span className="portfolio-art-corner portfolio-corner-bottom-right"></span>

        {/* Imagem */}
        <div className="portfolio-image-wrapper">
          <img
            src={projeto.imagem}
            alt={projeto.titulo}
            className="portfolio-image"
            loading="lazy"
          />
        </div>

      </div>


      {/* ========================================
          INFORMAÇÕES
      ======================================== */}

      <div className="portfolio-card-body">

        <span className="portfolio-category">
          {categoria}
          {' · '}
          {projeto.contexto}
        </span>

        <h3 className="portfolio-title">
          {projeto.titulo}
        </h3>

        <p className="portfolio-description">
          {projeto.descricao}
        </p>

        <span className="portfolio-link">
          Ver projeto →
        </span>

      </div>
    </button>
  )
}

export default PortfolioCard