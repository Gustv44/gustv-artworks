import ServiceCard from './ServiceCard'

function ServicesCarousel() {
  const servicos = [
    {
      id: 1,
      titulo: 'Ícone',
      descricao:
        'Arte personalizada para perfil, servidor ou comunidade.',
      preco: 'R$ 10,00',
      destaque: false,
      icone: '🖼️',
    },

    {
      id: 2,
      titulo: 'Banner',
      descricao:
        'Banner personalizado para Discord e mídias sociais.',
      preco: 'R$ 20,00',
      destaque: false,
      icone: '🎨',
    },

    {
      id: 3,
      titulo: 'Combo',
      descricao:
        '1 ícone + 1 banner personalizados em um único pedido.',
      preco: 'R$ 25,00',
      destaque: true,
      icone: '⭐',
      promocao: true,
    },
  ]

  function deslizar(direcao) {
    const carousel = document.querySelector(
      '.services-carousel-viewport'
    )

    if (!carousel) return

    const largura =
      carousel.clientWidth * 0.85

    carousel.scrollBy({
      left: direcao * largura,
      behavior: 'smooth',
    })
  }

  return (
    <div className="services-carousel">

      {/* ========================================
          SETA ESQUERDA
      ======================================== */}

      <button
        type="button"
        className="services-carousel-arrow services-carousel-prev"
        onClick={() => deslizar(-1)}
        aria-label="Ver serviço anterior"
      >
        ‹
      </button>


      {/* ========================================
          ÁREA DO CARROSSEL
      ======================================== */}

      <div className="services-carousel-viewport">

        <div className="services-carousel-track">

          {servicos.map((servico) => (

            <article
              className="services-carousel-item"
              key={servico.id}
            >

              {servico.promocao && (
                <div className="combo-promotion-label">
                  PROMOÇÃO
                </div>
              )}

              <div className="services-carousel-card">

                <ServiceCard
                  titulo={servico.titulo}
                  descricao={servico.descricao}
                  preco={servico.preco}
                  destaque={servico.destaque}
                >
                  {servico.icone}
                </ServiceCard>

                {servico.promocao && (
                  <div className="combo-old-price">
                    De <span>R$ 30,00</span>
                  </div>
                )}

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
        className="services-carousel-arrow services-carousel-next"
        onClick={() => deslizar(1)}
        aria-label="Ver próximo serviço"
      >
        ›
      </button>

    </div>
  )
}

export default ServicesCarousel