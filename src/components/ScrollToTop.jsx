import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    const html = document.documentElement
    const previousScrollBehavior = html.style.scrollBehavior

    // Desativa temporariamente o smooth scroll
    // para que a mudança de página vá diretamente para o topo.
    html.style.scrollBehavior = 'auto'

    window.scrollTo(0, 0)

    html.style.scrollBehavior = previousScrollBehavior
  }, [pathname])

  return null
}

export default ScrollToTop