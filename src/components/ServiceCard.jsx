import { Link } from 'react-router-dom'

function ServiceCard({
  titulo,
  descricao,
  preco,
  destaque = false,
  children
}) {
  return (
    <div
      className={`service-card h-100 ${
        destaque ? 'service-card-featured' : ''
      }`}
    >

      {destaque && (
        <div className="service-badge">
          ⭐ Destaque
        </div>
      )}

      <div className="service-icon">
        {children}
      </div>

      <h3 className="service-title">
        {titulo}
      </h3>

      <p className="service-description">
        {descricao}
      </p>

      <div className="service-price">
        {preco}
      </div>

      <Link
        to="/contato"
        className="btn gustv-btn service-button"
      >
        Solicitar serviço
      </Link>

    </div>
  )
}

export default ServiceCard