import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark gustv-navbar sticky-top">

      {/* ======================================== */}
      {/* DECORAÇÃO SUPERIOR                       */}
      {/* ======================================== */}

      <div className="navbar-decoration" aria-hidden="true">

        {/* Linhas */}
        <span className="navbar-line navbar-line-purple"></span>
        <span className="navbar-line navbar-line-blue"></span>
        <span className="navbar-line navbar-line-soft"></span>

        {/* Curvas */}
        <span className="navbar-curve navbar-curve-left"></span>
        <span className="navbar-curve navbar-curve-right"></span>

        {/* Pontos */}
        <span className="navbar-dot navbar-dot-1"></span>
        <span className="navbar-dot navbar-dot-2"></span>
        <span className="navbar-dot navbar-dot-3"></span>
        <span className="navbar-dot navbar-dot-4"></span>

        {/* Estrelas */}
        <span className="navbar-star navbar-star-1">✦</span>
        <span className="navbar-star navbar-star-2">✧</span>

      </div>


      {/* ======================================== */}
      {/* CONTEÚDO DO NAVBAR                       */}
      {/* ======================================== */}

      <div className="container">

        {/* Logo / nome da marca */}
        <NavLink
          to="/"
          className="navbar-brand gustv-logo"
        >
          <span className="gustv-symbol">✦</span>
          Gustv Artworks
        </NavLink>


        {/* Botão do menu no celular */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#gustvMenu"
          aria-controls="gustvMenu"
          aria-expanded="false"
          aria-label="Abrir menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        {/* Links */}
        <div
          className="collapse navbar-collapse"
          id="gustvMenu"
        >

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">

              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                Início
              </NavLink>

            </li>


            <li className="nav-item">

              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                Portfólio
              </NavLink>

            </li>


            <li className="nav-item">

              <NavLink
                to="/servicos"
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                Serviços
              </NavLink>

            </li>


            <li className="nav-item">

              <NavLink
                to="/sobre"
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                Sobre
              </NavLink>

            </li>


            <li className="nav-item">

              <NavLink
                to="/contato"
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                Contato
              </NavLink>

            </li>

          </ul>

        </div>

      </div>

    </nav>
  )
}

export default Navbar