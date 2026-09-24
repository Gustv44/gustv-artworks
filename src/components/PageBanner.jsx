import { assetPath } from '../utils/assetPath.js'

function PageBanner({ imagem, alt }) {
  return (
    <section className="page-banner">
      <div className="page-banner-frame">

        <span className="page-banner-line line-purple"></span>
        <span className="page-banner-line line-blue"></span>

        <span className="page-banner-corner corner-top-left"></span>
        <span className="page-banner-corner corner-top-right"></span>
        <span className="page-banner-corner corner-bottom-left"></span>
        <span className="page-banner-corner corner-bottom-right"></span>

        <div className="page-banner-image-wrapper">

          <img
            src={assetPath(imagem)}
            alt={alt}
            className="page-banner-image"
          />

        </div>

      </div>
    </section>
  )
}

export default PageBanner