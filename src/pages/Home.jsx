import { assetPath } from '../utils/assetPath.js'
import { Link } from 'react-router-dom'
import portfolio from '../data/portfolio'

function Home() {
  const destaques = portfolio.slice(0, 3)

  return (
    <div className="home-page">

      {/* ========================================
          BANNER PRINCIPAL
      ======================================== */}

      <section className="hero">
        <div className="hero-banner-frame">

          {/* Camadas decorativas */}
          <span className="hero-banner-line hero-line-purple"></span>
          <span className="hero-banner-line hero-line-blue"></span>

          <span className="hero-banner-corner hero-corner-top-left"></span>
          <span className="hero-banner-corner hero-corner-top-right"></span>
          <span className="hero-banner-corner hero-corner-bottom-left"></span>
          <span className="hero-banner-corner hero-corner-bottom-right"></span>

          {/* Banner */}
          <div className="hero-banner-image-wrapper">

            <img
              src={assetPath('assets/images/banner-principal.png')}
              alt="Gustv Artworks - Bem-vindo ao meu espaço criativo"
              className="hero-banner-image"
            />

          </div>

        </div>
      </section>


      {/* ========================================
          APRESENTAÇÃO
      ======================================== */}

      <section className="container py-5">

        <div className="row justify-content-center text-center">

          <div className="col-lg-9">

            <span className="badge text-bg-dark mb-3">
              GUSTV ARTWORKS
            </span>

            <h2 className="fw-bold mb-3">
              Criatividade, edição e evolução.
            </h2>

            <p className="lead text-secondary">
              O Gustv Artworks é meu espaço para compartilhar trabalhos
              de edição de imagem, experimentar ideias e mostrar minha
              evolução no universo do design.
            </p>

            <p className="text-secondary">
              Aqui você pode conhecer meus trabalhos, visualizar meu
              portfólio e, futuramente, solicitar artes personalizadas
              para diferentes projetos e redes sociais.
            </p>

          </div>

        </div>

      </section>


      {/* ========================================
          DESTAQUES DO PORTFÓLIO
      ======================================== */}

      <section className="container py-5">

        <div className="text-center mb-5">

          <span className="badge text-bg-dark mb-3">
            PORTFÓLIO
          </span>

          <h2 className="fw-bold">
            Alguns dos meus trabalhos
          </h2>

          <p className="text-secondary">
            Uma pequena seleção das artes presentes no meu portfólio.
          </p>

        </div>


        <div className="row g-4">

          {destaques.map((item) => (

            <div
              className="col-md-6 col-lg-4"
              key={item.id}
            >

              <div className="card h-100 portfolio-highlight-card">

                <div className="portfolio-highlight-image-wrapper">

                  <img
                    src={item.imagem}
                    alt={item.titulo}
                    className="portfolio-highlight-image"
                  />

                </div>


                <div className="card-body d-flex flex-column">

                  <span className="small text-secondary mb-2">
                    {item.categoria === 'icone'
                      ? 'Ícone'
                      : 'Banner'}
                  </span>

                  <h3 className="h5 fw-bold">
                    {item.titulo}
                  </h3>

                  <p className="text-secondary">
                    {item.descricao}
                  </p>

                  <div className="mt-auto pt-3">

                    <Link
                      to="/portfolio"
                      className="btn btn-outline-light"
                    >
                      Ver portfólio
                    </Link>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ========================================
          SERVIÇOS
      ======================================== */}

      <section className="container py-5">

        <div className="text-center mb-5">

          <span className="badge text-bg-dark mb-3">
            SERVIÇOS
          </span>

          <h2 className="fw-bold">
            Artes personalizadas
          </h2>

          <p className="text-secondary">
            Serviços com preços iniciais pensados para minha primeira
            experiência com encomendas.
          </p>

        </div>


        <div className="row g-4 justify-content-center">

          {/* Ícone */}
          <div className="col-md-6 col-lg-4">

            <div className="card service-home-card h-100">

              <div className="card-body text-center p-4">

                <div className="service-icon mb-3">
                  🎨
                </div>

                <h3 className="h4 fw-bold">
                  Ícone
                </h3>

                <div className="service-price mb-3">
                  R$ 10
                </div>

                <p className="text-secondary">
                  Criação de ícones personalizados para perfis,
                  comunidades e redes sociais.
                </p>

              </div>

            </div>

          </div>


          {/* Banner */}
          <div className="col-md-6 col-lg-4">

            <div className="card service-home-card h-100">

              <div className="card-body text-center p-4">

                <div className="service-icon mb-3">
                  🖼️
                </div>

                <h3 className="h4 fw-bold">
                  Banner
                </h3>

                <div className="service-price mb-3">
                  R$ 20
                </div>

                <p className="text-secondary">
                  Banners personalizados para comunidades,
                  redes sociais e projetos.
                </p>

              </div>

            </div>

          </div>


          {/* Combo */}
          <div className="col-md-6 col-lg-4">

            <div className="card service-home-card h-100">

              <div className="card-body text-center p-4">

                <span className="combo-promotion-label mb-3">
                  PROMOÇÃO
                </span>

                <div className="service-icon mb-3">
                  ✨
                </div>

                <h3 className="h4 fw-bold">
                  Combo
                </h3>

                <div className="service-price mb-1">
                  R$ 25,00
                </div>

                <div className="combo-old-price mb-3">
                  De <span>R$ 30,00</span>
                </div>

                <p className="text-secondary">
                  Ícone + banner personalizados em um único pedido.
                </p>

              </div>

            </div>

          </div>


          <div className="text-center mt-4">

            <span className="section-label">
              PAGAMENTO
            </span>

            <p className="section-text mt-2">
              💳 Pagamento via Pix
            </p>

          </div>

        </div>


        <div className="text-center mt-4">

          <Link
            to="/servicos"
            className="btn btn-outline-light"
          >
            Ver todos os detalhes
          </Link>

        </div>

      </section>


      {/* ========================================
          COMO FUNCIONA
      ======================================== */}

      <section className="container py-5">

        <div className="text-center mb-5">

          <span className="badge text-bg-dark mb-3">
            PROCESSO
          </span>

          <h2 className="fw-bold">
            Como funciona?
          </h2>

          <p className="text-secondary">
            Um processo simples para solicitar sua arte.
          </p>

        </div>


        <div className="row g-4">

          {/* Etapa 01 */}
          <div className="col-md-6 col-lg-3">

            <div className="card process-home-card h-100">

              <div className="card-body text-center p-4">

                <div className="process-number">
                  01
                </div>

                <h3 className="h5 fw-bold">
                  Escolha
                </h3>

                <p className="text-secondary">
                  Escolha o tipo de arte que deseja solicitar.
                </p>

              </div>

            </div>

          </div>


          {/* Etapa 02 */}
          <div className="col-md-6 col-lg-3">

            <div className="card process-home-card h-100">

              <div className="card-body text-center p-4">

                <div className="process-number">
                  02
                </div>

                <h3 className="h5 fw-bold">
                  Entre em contato
                </h3>

                <p className="text-secondary">
                  Entre em contato comigo pelas redes disponíveis.
                </p>

              </div>

            </div>

          </div>


          {/* Etapa 03 */}
          <div className="col-md-6 col-lg-3">

            <div className="card process-home-card h-100">

              <div className="card-body text-center p-4">

                <div className="process-number">
                  03
                </div>

                <h3 className="h5 fw-bold">
                  Definimos os detalhes
                </h3>

                <p className="text-secondary">
                  Conversamos sobre estilo, tamanho e detalhes da arte.
                </p>

              </div>

            </div>

          </div>


          {/* Etapa 04 */}
          <div className="col-md-6 col-lg-3">

            <div className="card process-home-card h-100">

              <div className="card-body text-center p-4">

                <div className="process-number">
                  04
                </div>

                <h3 className="h5 fw-bold">
                  Receba sua arte
                </h3>

                <p className="text-secondary">
                  Após a produção, você recebe o resultado final.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ========================================
          CTA FINAL
      ======================================== */}

      <section className="container py-5">

        <div className="home-final-cta text-center p-5">

          <span className="badge text-bg-dark mb-3">
            GUSTV ARTWORKS
          </span>

          <h2 className="fw-bold mb-3">
            Vamos criar alguma coisa juntos?
          </h2>

          <p className="text-secondary mb-4">
            Conheça meu portfólio ou entre em contato para conversar
            sobre uma possível arte personalizada.
          </p>

          <div className="d-flex justify-content-center flex-wrap gap-2">

            <Link
              to="/portfolio"
              className="btn btn-primary btn-lg"
            >
              Explorar Portfólio
            </Link>

            <Link
              to="/contato"
              className="btn btn-outline-light btn-lg"
            >
              Entre em contato
            </Link>

          </div>

        </div>

      </section>

    </div>
  )
}

export default Home