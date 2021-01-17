import { useEffect } from 'react'

/**
 * Apply any changes necessary to theme for the preferred color scheme (dark/light)
 */
const useColorScheme = () => {
  useEffect(() => {
    // Handle favicon for dark/light theme
    const icons = document.head.querySelectorAll('link[rel*="icon"]');

    const favicon = document.createElement('link')
    favicon.setAttribute('rel', 'favicon icon')
    document.head.appendChild(favicon)

    let matched, current
    icons.forEach(icon => {
      if (window.matchMedia(icon.media).matches) {
        matched = icon
      }
      // remove icons so we only have the preferred
      document.head.removeChild(icon)
    })
    if (matched && matched.media !== current) {
      current = matched.media
      favicon.setAttribute('type', matched.getAttribute('type'))
      favicon.setAttribute('href', matched.getAttribute('href'))
    }

    // cleanup - add icons back to head
    return () => {
      console.log('=== cleanup ===')
      icons.forEach(function(icon) {
        document.head.appendChild(icon)
      })
    }
  })
}

export default useColorScheme
