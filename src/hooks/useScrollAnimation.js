import { useEffect, useRef } from 'react'
import { fadeIn, scaleIn, slideInLeft, slideInRight } from '../utils/animations'

export const useScrollAnimation = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target
            const animationType = element.dataset.animation || 'fadeIn'
            
            switch (animationType) {
              case 'scaleIn':
                scaleIn(element)
                break
              case 'slideInLeft':
                slideInLeft(element)
                break
              case 'slideInRight':
                slideInRight(element)
                break
              default:
                fadeIn(element)
            }
            
            observer.unobserve(element)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      const animatedElements = sectionRef.current.querySelectorAll('[data-animation]')
      animatedElements.forEach((el) => observer.observe(el))
    }

    return () => {
      if (sectionRef.current) {
        const animatedElements = sectionRef.current.querySelectorAll('[data-animation]')
        animatedElements.forEach((el) => observer.unobserve(el))
      }
    }
  }, [])

  return sectionRef
}