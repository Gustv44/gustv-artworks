function StepCard({ numero, titulo, descricao, icone }) {
  return (
    <div className="step-card h-100">

      <div className="step-number">
        {numero}
      </div>

      <div className="step-icon">
        {icone}
      </div>

      <h3 className="step-title">
        {titulo}
      </h3>

      <p className="step-description">
        {descricao}
      </p>

    </div>
  )
}

export default StepCard