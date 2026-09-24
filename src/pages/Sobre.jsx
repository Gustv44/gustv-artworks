import { Link } from 'react-router-dom'
import { assetPath } from '../utils/assetPath.js'

function Sobre() {
  return (
    <>
      {/* ================================================== */}
      {/* INTRODUÇÃO                                         */}
      {/* ================================================== */}

      <section className="about-header py-5">

        <div className="container py-5">

          <div className="row justify-content-center text-center">

            <div className="col-lg-8">

              <span className="section-label">
                SOBRE
              </span>

              <h1 className="section-title mt-2">
                A pessoa por trás da arte.
              </h1>

              <p className="section-text mt-3">
                Conheça um pouco da história e da trajetória
                por trás do Gustv Artworks.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================================================== */}
      {/* QUEM É GUSTV                                      */}
      {/* ================================================== */}

      <section className="about-profile py-5">

        <div className="container py-5">

          <div className="row align-items-center g-5">

            <div className="col-lg-5 text-center">

              <div className="about-avatar-wrapper">

                <img
                  src={assetPath('assets/images/gustv-avatar.png')}
                  alt="Avatar do Gustv"
                  className="about-avatar"
                />

              </div>

            </div>


            <div className="col-lg-7">

              <span className="section-label">
                QUEM É GUSTV?
              </span>

              <h2 className="section-title mt-2">
                Olá, eu sou o Gustv.
              </h2>

              <p className="section-text mt-3">
                Sou um criador que começou a explorar a manipulação
                de imagens como hobby e, através da prática,
                experimentação e projetos pessoais, fui desenvolvendo
                minhas habilidades em design digital.
              </p>

              <p className="section-text mt-3">
                O Gustv Artworks surgiu como uma forma de reunir
                esse trabalho, compartilhar minha evolução e,
                futuramente, transformar essa experiência em serviços
                de arte digital personalizados.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================================================== */}
      {/* COMO TUDO COMEÇOU                                 */}
      {/* ================================================== */}

      <section className="about-beginning py-5">

        <div className="container py-5">

          <div className="row justify-content-center text-center">

            <div className="col-lg-8">

              <span className="section-label">
                COMO TUDO COMEÇOU
              </span>

              <h2 className="section-title mt-2">
                Um hobby que continua evoluindo.
              </h2>

              <p className="section-text mt-3">
                A manipulação de imagens começou como uma forma
                de aprender, experimentar e descobrir novas maneiras
                de trabalhar com imagens, cores, personagens e composição.
              </p>

              <p className="section-text mt-3">
                Cada projeto foi uma oportunidade de testar algo
                diferente e aprender um pouco mais sobre o processo
                de criação.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================================================== */}
      {/* EVOLUÇÃO                                           */}
      {/* ================================================== */}

      <section className="about-evolution py-5">

        <div className="container py-5">

          <div className="text-center mb-5">

            <span className="section-label">
              MINHA EVOLUÇÃO
            </span>

            <h2 className="section-title mt-2">
              Cada projeto trouxe um novo aprendizado.
            </h2>

          </div>


          <div className="row g-4 justify-content-center">

            <div className="col-md-6 col-lg-4">

              <div className="about-skill-card h-100">

                <div className="about-skill-icon">
                  🎨
                </div>

                <h3>
                  Composição
                </h3>

                <p>
                  Experimentação com diferentes elementos,
                  enquadramentos e formas de organizar uma composição.
                </p>

              </div>

            </div>


            <div className="col-md-6 col-lg-4">

              <div className="about-skill-card h-100">

                <div className="about-skill-icon">
                  ✨
                </div>

                <h3>
                  Efeitos visuais
                </h3>

                <p>
                  Exploração de iluminação, contrastes, cores,
                  brilhos e outros recursos visuais.
                </p>

              </div>

            </div>


            <div className="col-md-6 col-lg-4">

              <div className="about-skill-card h-100">

                <div className="about-skill-icon">
                  🔤
                </div>

                <h3>
                  Tipografia
                </h3>

                <p>
                  Desenvolvimento de combinações entre textos,
                  estilos e elementos gráficos.
                </p>

              </div>

            </div>


            <div className="col-md-6 col-lg-4">

              <div className="about-skill-card h-100">

                <div className="about-skill-icon">
                  🖼️
                </div>

                <h3>
                  Manipulação
                </h3>

                <p>
                  Prática na integração de personagens,
                  fundos e diferentes recursos visuais.
                </p>

              </div>

            </div>


            <div className="col-md-6 col-lg-4">

              <div className="about-skill-card h-100">

                <div className="about-skill-icon">
                  🌈
                </div>

                <h3>
                  Tratamento de cores
                </h3>

                <p>
                  Experimentação com paletas e tratamentos
                  cromáticos para criar diferentes atmosferas.
                </p>

              </div>

            </div>


            <div className="col-md-6 col-lg-4">

              <div className="about-skill-card h-100">

                <div className="about-skill-icon">
                  💡
                </div>

                <h3>
                  Experimentação
                </h3>

                <p>
                  Uso de projetos pessoais para testar ideias,
                  estilos e novas possibilidades.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================================================== */}
      {/* FERRAMENTAS UTILIZADAS                            */}
      {/* ================================================== */}

      <section className="about-tools py-5">

        <div className="container py-5">

          <div className="text-center mb-5">

            <span className="section-label">
              FERRAMENTAS
            </span>

            <h2 className="section-title mt-2">
              Ferramentas que utilizo.
            </h2>

            <p className="section-text mt-3">
              Estas são algumas das ferramentas que fazem parte
              do meu processo criativo atualmente.
            </p>

          </div>


          <div className="row justify-content-center">

            <div className="col-md-6 col-lg-4">

              <div className="tool-card h-100">

                <div className="tool-icon">
                  🎨
                </div>

                <h3>
                  Canva
                </h3>

                <span className="tool-status">
                  FERRAMENTA ATUAL
                </span>

                <p>
                  É a ferramenta que utilizo atualmente para compor,
                  manipular e desenvolver minhas artes digitais.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================================================== */}
      {/* GUSTV ARTWORKS                                    */}
      {/* ================================================== */}

      <section className="about-brand py-5">

        <div className="container py-5">

          <div className="row justify-content-center text-center">

            <div className="col-lg-8">

              <span className="section-label">
                GUSTV ARTWORKS
              </span>

              <h2 className="section-title mt-2">
                Transformando aprendizado em criação.
              </h2>

              <p className="section-text mt-3">
                O Gustv Artworks reúne meus trabalhos, experimentações
                e projetos criativos em um espaço dedicado à evolução
                e ao desenvolvimento de novos trabalhos.
              </p>

              <p className="section-text mt-3">
                O objetivo é continuar aprendendo, desenvolver novos
                estilos e, com o tempo, ampliar os serviços oferecidos.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================================================== */}
      {/* OBJETIVOS                                          */}
      {/* ================================================== */}

      <section className="about-goals py-5">

        <div className="container py-5">

          <div className="text-center mb-5">

            <span className="section-label">
              OBJETIVOS
            </span>

            <h2 className="section-title mt-2">
              Para onde quero levar o projeto.
            </h2>

          </div>


          <div className="row g-4 justify-content-center">

            <div className="col-md-6 col-lg-3">

              <div className="goal-card h-100">

                <span>01</span>

                <h3>
                  Aprender
                </h3>

                <p>
                  Continuar aprimorando minhas habilidades de design.
                </p>

              </div>

            </div>


            <div className="col-md-6 col-lg-3">

              <div className="goal-card h-100">

                <span>02</span>

                <h3>
                  Criar
                </h3>

                <p>
                  Experimentar novos estilos e possibilidades visuais.
                </p>

              </div>

            </div>


            <div className="col-md-6 col-lg-3">

              <div className="goal-card h-100">

                <span>03</span>

                <h3>
                  Expandir
                </h3>

                <p>
                  Desenvolver novos serviços e formatos de arte.
                </p>

              </div>

            </div>


            <div className="col-md-6 col-lg-3">

              <div className="goal-card h-100">

                <span>04</span>

                <h3>
                  Compartilhar
                </h3>

                <p>
                  Conectar minhas criações com pessoas e comunidades.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================================================== */}
      {/* CALL TO ACTION                                    */}
      {/* ================================================== */}

      <section className="about-cta py-5">

        <div className="container py-5">

          <div className="row justify-content-center text-center">

            <div className="col-lg-8">

              <span className="section-label">
                GUSTV ARTWORKS
              </span>

              <h2 className="section-title mt-2">
                Gostou do meu trabalho?
              </h2>

              <p className="section-text mt-3">
                Conheça os serviços disponíveis e veja como podemos
                transformar sua ideia em uma arte.
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

export default Sobre