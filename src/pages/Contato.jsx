import { Link } from 'react-router-dom'

function Contato() {
  const redesSociais = [
    {
      nome: 'Discord',
      icone: '💬',
      tipo: 'Principal',
      descricao:
        'Meu principal canal de comunicação para conversar sobre trabalhos, dúvidas e encomendas.',
      textoBotao: 'Entrar em contato',
      url: 'https://discord.com/channels/@me',
      externo: true,
      destaque: true,
    },
    {
      nome: 'X',
      icone: '𝕏',
      tipo: 'Divulgação',
      descricao:
        'Espaço para compartilhar novos trabalhos, experimentações e atualizações do Gustv Artworks.',
      textoBotao: 'Visitar perfil',
      url: 'https://x.com/Gustv_Artworks',
      externo: true,
    },
    {
      nome: 'Reddit',
      icone: '👽',
      tipo: 'Comunidades',
      descricao:
        'Participação em comunidades e compartilhamento de trabalhos e projetos.',
      textoBotao: 'Visitar perfil',
      url: 'https://www.reddit.com/user/Gustv_Artworks/',
      externo: true,
    },
    {
      nome: 'Bluesky',
      icone: '🦋',
      tipo: 'Futuramente',
      descricao:
        'Um espaço que poderá fazer parte das redes do Gustv Artworks no futuro.',
      textoBotao: 'Em breve',
      url: '#',
      externo: false,
    },
  ]

  return (
    <>
      {/* ================================================== */}
      {/* INTRODUÇÃO                                         */}
      {/* ================================================== */}

      <section className="contact-header py-5">

        <div className="container py-5">

          <div className="row justify-content-center text-center">

            <div className="col-lg-8">

              <span className="section-label">
                CONTATO
              </span>

              <h1 className="section-title mt-2">
                Vamos conversar?
              </h1>

              <p className="section-text mt-3">
                Minhas redes são canais de comunicação e também espaços
                onde compartilho meus trabalhos, experimentações e novidades.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================================================== */}
      {/* REDES SOCIAIS                                      */}
      {/* ================================================== */}

      <section className="contact-socials py-5">

        <div className="container py-5">

          <div className="text-center mb-5">

            <span className="section-label">
              ONDE ME ENCONTRAR
            </span>

            <h2 className="section-title mt-2">
              Escolha onde acompanhar o projeto.
            </h2>

          </div>


          <div className="row g-4 justify-content-center">

            {redesSociais.map((rede) => (

              <div
                className="col-md-6 col-lg-5"
                key={rede.nome}
              >

                <div
                  className={`contact-card h-100 ${
                    rede.destaque
                      ? 'contact-card-featured'
                      : ''
                  }`}
                >

                  <div className="contact-card-header">

                    <div className="contact-icon">
                      {rede.icone}
                    </div>

                    {rede.destaque && (
                      <span className="contact-badge">
                        Principal
                      </span>
                    )}

                  </div>


                  <span className="contact-type">
                    {rede.tipo}
                  </span>


                  <h3 className="contact-card-title">
                    {rede.nome}
                  </h3>


                  <p className="contact-card-description">
                    {rede.descricao}
                  </p>


                  {rede.externo ? (
                    <a
                      href={rede.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn gustv-btn contact-button"
                    >
                      {rede.textoBotao} →
                    </a>
                  ) : (
                    <button
                      type="button"
                      className="btn contact-button contact-button-disabled"
                      disabled
                    >
                      {rede.textoBotao}
                    </button>
                  )}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================================================== */}
      {/* COMO SOLICITAR                                     */}
      {/* ================================================== */}

      <section className="contact-request py-5">

        <div className="container py-5">

          <div className="row justify-content-center text-center">

            <div className="col-lg-9">

              <span className="section-label">
                SOLICITE UMA ARTE
              </span>

              <h2 className="section-title mt-2">
                Quer transformar uma ideia em arte?
              </h2>

              <p className="section-text mt-3">
                O Discord é o principal canal para conversar sobre
                encomendas. Ao entrar em contato, conte um pouco sobre
                o que você gostaria de criar e, se possível, envie
                referências para o projeto.
              </p>


              <div className="row g-4 mt-4 text-start">

                <div className="col-md-6">

                  <div className="request-card h-100">

                    <span className="request-number">
                      01
                    </span>

                    <h3>
                      Explique sua ideia
                    </h3>

                    <p>
                      Diga qual tipo de arte você deseja e onde pretende
                      utilizá-la.
                    </p>

                  </div>

                </div>


                <div className="col-md-6">

                  <div className="request-card h-100">

                    <span className="request-number">
                      02
                    </span>

                    <h3>
                      Envie referências
                    </h3>

                    <p>
                      Personagens, cores, textos e exemplos ajudam
                      a definir a direção do projeto.
                    </p>

                  </div>

                </div>


                <div className="col-md-6">

                  <div className="request-card h-100">

                    <span className="request-number">
                      03
                    </span>

                    <h3>
                      Definimos os detalhes
                    </h3>

                    <p>
                      Conversamos sobre o estilo, composição e demais
                      detalhes necessários.
                    </p>

                  </div>

                </div>


                <div className="col-md-6">

                  <div className="request-card h-100">

                    <span className="request-number">
                      04
                    </span>

                    <h3>
                      Começamos o projeto
                    </h3>

                    <p>
                      Depois de alinhar tudo, seguimos para o
                      desenvolvimento da arte.
                    </p>

                  </div>

                </div>

              </div>


              <a
                href="https://discord.com/channels/@me"
                target="_blank"
                rel="noopener noreferrer"
                className="btn gustv-cta-button mt-5"
              >
                Falar pelo Discord →
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* ================================================== */}
      {/* CTA                                                */}
      {/* ================================================== */}

      <section className="contact-cta py-5">

        <div className="container py-5">

          <div className="row justify-content-center text-center">

            <div className="col-lg-8">

              <span className="section-label">
                GUSTV ARTWORKS
              </span>

              <h2 className="section-title mt-2">
                A próxima arte pode ser a sua.
              </h2>

              <p className="section-text mt-3">
                Conheça os serviços disponíveis e veja como podemos
                transformar sua ideia em um projeto visual.
              </p>

              <Link
                to="/servicos"
                className="btn gustv-cta-button mt-3"
              >
                Conhecer Serviços →
              </Link>

            </div>

          </div>

        </div>

      </section>

    </>
  )
}

export default Contato