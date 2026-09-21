import { Link } from 'react-router-dom'

import PageBanner from '../components/PageBanner'
import ServiceCard from '../components/ServiceCard'

function Servicos() {
  return (
    <>
      {/* ================================================== */}
      {/* BANNER                                             */}
      {/* ================================================== */}

      <PageBanner
        imagem="/assets/images/banner-servicos.png"
        alt="Gustv Artworks - Serviços"
      />


      {/* ================================================== */}
      {/* INTRODUÇÃO                                         */}
      {/* ================================================== */}

      <section className="services-introduction py-5">

        <div className="container py-5">

          <div className="row justify-content-center text-center">

            <div className="col-lg-8">

              <span className="section-label">
                SERVIÇOS
              </span>

              <h1 className="section-title mt-2">
                Artes feitas para você.
              </h1>

              <p className="section-text mt-3">
                Serviços de manipulação de imagens e arte digital
                para comunidades, redes sociais e projetos online.
              </p>

              <p className="section-text mt-3">
                Os valores apresentados são preços iniciais e podem
                variar de acordo com a complexidade de cada projeto.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================================================== */}
      {/* SERVIÇOS                                           */}
      {/* ================================================== */}

      <section className="services-list py-5">

        <div className="container py-5">

          <div className="text-center mb-5">

            <span className="section-label">
              ESCOLHA O SEU
            </span>

            <h2 className="section-title mt-2">
              Serviços disponíveis
            </h2>

          </div>


          <div className="row g-4 justify-content-center">

            {/* Ícone */}
            <div className="col-md-6 col-lg-4">

              <ServiceCard
                titulo="Ícone"
                descricao="Arte personalizada para perfil, servidor ou comunidade."
                preco="R$ 10,00"
              >
                🖼️
              </ServiceCard>

            </div>


            {/* Banner */}
            <div className="col-md-6 col-lg-4">

              <ServiceCard
                titulo="Banner"
                descricao="Banner personalizado para Discord e mídias sociais."
                preco="R$ 20,00"
              >
                🎨
              </ServiceCard>

            </div>


            {/* Combo */}
            <div className="col-md-6 col-lg-4">

              <div className="combo-promotion-label">
                PROMOÇÃO
              </div>

              <ServiceCard
                titulo="Combo"
                descricao="1 ícone + 1 banner personalizados em um único pedido."
                preco="R$ 25,00"
                destaque={true}
              >
                ⭐
              </ServiceCard>

              <div className="combo-old-price">
                De <span>R$ 30,00</span> por R$ 25,00
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================================================== */}
      {/* FORMAS DE PAGAMENTO                               */}
      {/* ================================================== */}

      <section className="services-payment py-5">

        <div className="container py-5">

          <div className="row justify-content-center">

            <div className="col-lg-8">

              <div className="payment-card text-center">

                <span className="section-label">
                  PAGAMENTO
                </span>

                <h2 className="section-title mt-2">
                  Forma de pagamento
                </h2>

                <div className="payment-icon mt-4">
                  💳
                </div>

                <h3 className="payment-title mt-3">
                  PIX
                </h3>

                <p className="section-text mt-3">
                  No momento, o pagamento é realizado via Pix.
                  Os detalhes do pagamento são combinados no
                  momento da solicitação da arte.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================================================== */}
      {/* O QUE ESTÁ INCLUÍDO                               */}
      {/* ================================================== */}

      <section className="services-included py-5">

        <div className="container py-5">

          <div className="row justify-content-center text-center">

            <div className="col-lg-9">

              <span className="section-label">
                O QUE ESTÁ INCLUÍDO
              </span>

              <h2 className="section-title mt-2">
                O que você recebe?
              </h2>

            </div>

          </div>


          <div className="row g-4 mt-4 justify-content-center">

            <div className="col-md-6 col-lg-4">

              <div className="included-card h-100">

                <div className="included-icon">
                  🎨
                </div>

                <h3>
                  Arte personalizada
                </h3>

                <p>
                  O projeto é desenvolvido de acordo com
                  as referências e informações fornecidas.
                </p>

              </div>

            </div>


            <div className="col-md-6 col-lg-4">

              <div className="included-card h-100">

                <div className="included-icon">
                  💻
                </div>

                <h3>
                  Arquivo digital
                </h3>

                <p>
                  A arte final é entregue em formato digital
                  adequado ao projeto.
                </p>

              </div>

            </div>


            <div className="col-md-6 col-lg-4">

              <div className="included-card h-100">

                <div className="included-icon">
                  ✨
                </div>

                <h3>
                  Personalização
                </h3>

                <p>
                  Cores, textos, personagens e referências
                  podem ser definidos durante o pedido.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================================================== */}
      {/* COMO FUNCIONA                                     */}
      {/* ================================================== */}

      <section className="services-process py-5">

        <div className="container py-5">

          <div className="text-center mb-5">

            <span className="section-label">
              PROCESSO
            </span>

            <h2 className="section-title mt-2">
              Como funciona?
            </h2>

          </div>


          <div className="row g-4 justify-content-center">

            {/* 01 */}
            <div className="col-md-6 col-lg-3">

              <div className="process-card">

                <span>01</span>

                <h3>
                  Escolha
                </h3>

                <p>
                  Escolha o serviço que deseja contratar.
                </p>

              </div>

            </div>


            {/* 02 */}
            <div className="col-md-6 col-lg-3">

              <div className="process-card">

                <span>02</span>

                <h3>
                  Contato
                </h3>

                <p>
                  Entre em contato e explique sua ideia.
                </p>

              </div>

            </div>


            {/* 03 */}
            <div className="col-md-6 col-lg-3">

              <div className="process-card">

                <span>03</span>

                <h3>
                  Pagamento
                </h3>

                <p>
                  O pagamento é combinado e realizado via Pix.
                </p>

              </div>

            </div>


            {/* 04 */}
            <div className="col-md-6 col-lg-3">

              <div className="process-card">

                <span>04</span>

                <h3>
                  Criação
                </h3>

                <p>
                  Definimos os detalhes e desenvolvemos a arte.
                </p>

              </div>

            </div>


            {/* 05 */}
            <div className="col-md-6 col-lg-3">

              <div className="process-card">

                <span>05</span>

                <h3>
                  Entrega
                </h3>

                <p>
                  Você recebe o arquivo final da sua arte.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================================================== */}
      {/* FAQ                                                */}
      {/* ================================================== */}

      <section className="services-faq py-5">

        <div className="container py-5">

          <div className="text-center mb-5">

            <span className="section-label">
              DÚVIDAS
            </span>

            <h2 className="section-title mt-2">
              Perguntas frequentes
            </h2>

          </div>


          <div className="accordion gustv-accordion" id="servicesFaq">

            <div className="accordion-item">

              <h2 className="accordion-header">

                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqOne"
                >
                  Posso pedir uma arte personalizada?
                </button>

              </h2>

              <div
                id="faqOne"
                className="accordion-collapse collapse"
                data-bs-parent="#servicesFaq"
              >

                <div className="accordion-body">
                  Sim. A ideia dos serviços é justamente desenvolver
                  artes de acordo com as necessidades de cada cliente.
                </div>

              </div>

            </div>


            <div className="accordion-item">

              <h2 className="accordion-header">

                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqTwo"
                >
                  Os valores são fixos?
                </button>

              </h2>

              <div
                id="faqTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#servicesFaq"
              >

                <div className="accordion-body">
                  Os valores apresentados são preços iniciais.
                  Projetos mais complexos podem ter valores diferentes.
                </div>

              </div>

            </div>


            <div className="accordion-item">

              <h2 className="accordion-header">

                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqThree"
                >
                  Onde posso utilizar a arte?
                </button>

              </h2>

              <div
                id="faqThree"
                className="accordion-collapse collapse"
                data-bs-parent="#servicesFaq"
              >

                <div className="accordion-body">
                  As artes podem ser desenvolvidas para comunidades,
                  servidores, redes sociais e outros projetos digitais.
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================================================== */}
      {/* CALL TO ACTION                                    */}
      {/* ================================================== */}

      <section className="services-cta py-5">

        <div className="container py-5">

          <div className="row justify-content-center text-center">

            <div className="col-lg-8">

              <span className="section-label">
                GUSTV ARTWORKS
              </span>

              <h2 className="section-title mt-2">
                Pronto para começar?
              </h2>

              <p className="section-text mt-3">
                Entre em contato e conte um pouco sobre a arte
                que você gostaria de criar.
              </p>

              <Link
                to="/contato"
                className="btn gustv-cta-button mt-3"
              >
                Solicitar uma arte →
              </Link>

            </div>

          </div>

        </div>

      </section>
      
{/* ================================================== */}
{/* REQUISITOS E CONDIÇÕES                             */}
{/* ================================================== */}

<section className="services-requirements py-5">

  <div className="container py-5">

    <div className="text-center mb-5">

      <span className="section-label">
        REQUISITOS E CONDIÇÕES
      </span>

      <h2 className="section-title mt-2">
        Antes de solicitar sua arte.
      </h2>

      <p className="section-text mt-3">
        Para manter o processo claro para todos, alguns tipos
        de conteúdo não fazem parte dos serviços oferecidos.
      </p>

    </div>


    <div className="row g-4 justify-content-center">

      {/* Conteúdo não aceito */}
      <div className="col-md-6 col-lg-4">

        <div className="requirement-card h-100">

          <div className="requirement-icon">
            🚫
          </div>

          <h3>
            Conteúdos não aceitos
          </h3>

          <p>
            Não faço trabalhos envolvendo conteúdo NSFW,
            sexualmente explícito ou de natureza semelhante.
          </p>

        </div>

      </div>


      {/* Gore */}
      <div className="col-md-6 col-lg-4">

        <div className="requirement-card h-100">

          <div className="requirement-icon">
            ⚠️
          </div>

          <h3>
            Conteúdo grotesco
          </h3>

          <p>
            Não trabalho com gore, violência gráfica extrema
            ou outros conteúdos grotescos.
          </p>

        </div>

      </div>


      {/* Prazo */}
      <div className="col-md-6 col-lg-4">

        <div className="requirement-card h-100">

          <div className="requirement-icon">
            ⏱️
          </div>

          <h3>
            Prazo de produção
          </h3>

          <p>
            O prazo será previamente combinado com o cliente
            de acordo com o projeto e sua complexidade.
          </p>

        </div>

      </div>


      {/* Referências */}
      <div className="col-md-6 col-lg-4">

        <div className="requirement-card h-100">

          <div className="requirement-icon">
            📝
          </div>

          <h3>
            Referências
          </h3>

          <p>
            O cliente deve fornecer as informações e referências
            necessárias para orientar o desenvolvimento da arte.
          </p>

        </div>

      </div>


      {/* Complexidade */}
      <div className="col-md-6 col-lg-4">

        <div className="requirement-card h-100">

          <div className="requirement-icon">
            🎨
          </div>

          <h3>
            Complexidade
          </h3>

          <p>
            Projetos que exigirem um nível de trabalho diferente
            podem ter valores ou condições específicos.
          </p>

        </div>

      </div>


      {/* Comunicação */}
      <div className="col-md-6 col-lg-4">

        <div className="requirement-card h-100">

          <div className="requirement-icon">
            💬
          </div>

          <h3>
            Comunicação
          </h3>

          <p>
            Os detalhes do projeto serão definidos diretamente
            com o cliente antes do início da produção.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>
    </>
  )
}

export default Servicos