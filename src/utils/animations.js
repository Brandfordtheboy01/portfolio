import { gsap } from 'gsap'

// Fade in animation
export const fadeIn = (element, options = {}) => {
  const defaults = {
    duration: 1,
    opacity: 0,
    y: 30,
    ease: 'power3.out',
    ...options
  }
  
  return gsap.fromTo(element, 
    { opacity: 0, y: defaults.y },
    { opacity: 1, y: 0, duration: defaults.duration, ease: defaults.ease }
  )
}

// Stagger animation for multiple elements
export const staggerFadeIn = (elements, options = {}) => {
  const defaults = {
    duration: 0.8,
    stagger: 0.1,
    y: 20,
    ease: 'power3.out',
    ...options
  }
  
  return gsap.fromTo(elements,
    { opacity: 0, y: defaults.y },
    { opacity: 1, y: 0, duration: defaults.duration, stagger: defaults.stagger, ease: defaults.ease }
  )
}

// Scale animation
export const scaleIn = (element, options = {}) => {
  const defaults = {
    duration: 0.8,
    scale: 0.8,
    opacity: 0,
    ease: 'back.out(1.7)',
    ...options
  }
  
  return gsap.fromTo(element,
    { scale: defaults.scale, opacity: 0 },
    { scale: 1, opacity: 1, duration: defaults.duration, ease: defaults.ease }
  )
}

// Slide in from left
export const slideInLeft = (element, options = {}) => {
  const defaults = {
    duration: 1,
    x: -100,
    ease: 'power3.out',
    ...options
  }
  
  return gsap.fromTo(element,
    { x: defaults.x, opacity: 0 },
    { x: 0, opacity: 1, duration: defaults.duration, ease: defaults.ease }
  )
}

// Slide in from right
export const slideInRight = (element, options = {}) => {
  const defaults = {
    duration: 1,
    x: 100,
    ease: 'power3.out',
    ...options
  }
  
  return gsap.fromTo(element,
    { x: defaults.x, opacity: 0 },
    { x: 0, opacity: 1, duration: defaults.duration, ease: defaults.ease }
  )
}

// Text reveal animation
export const textReveal = (element, options = {}) => {
  const defaults = {
    duration: 1.2,
    y: 100,
    ease: 'power4.out',
    ...options
  }
  
  return gsap.fromTo(element,
    { y: defaults.y, opacity: 0 },
    { y: 0, opacity: 1, duration: defaults.duration, ease: defaults.ease }
  )
}

// Hover scale effect
export const hoverScale = (element, options = {}) => {
  const defaults = {
    scale: 1.05,
    duration: 0.3,
    ease: 'power2.out',
    ...options
  }
  
  const enter = () => gsap.to(element, { scale: defaults.scale, duration: defaults.duration, ease: defaults.ease })
  const leave = () => gsap.to(element, { scale: 1, duration: defaults.duration, ease: defaults.ease })
  
  element.addEventListener('mouseenter', enter)
  element.addEventListener('mouseleave', leave)
  
  return () => {
    element.removeEventListener('mouseenter', enter)
    element.removeEventListener('mouseleave', leave)
  }
}

// Parallax effect
export const parallax = (element, options = {}) => {
  const defaults = {
    speed: 0.5,
    ease: 'power2.out',
    ...options
  }
  
  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2
    const y = (e.clientY / window.innerHeight - 0.5) * 2
    
    gsap.to(element, {
      x: x * 20 * defaults.speed,
      y: y * 20 * defaults.speed,
      duration: 1,
      ease: defaults.ease
    })
  }
  
  window.addEventListener('mousemove', handleMouseMove)
  
  return () => {
    window.removeEventListener('mousemove', handleMouseMove)
  }
}

// Magnetic button effect
export const magneticButton = (button, options = {}) => {
  const defaults = {
    strength: 0.3,
    ease: 'power2.out',
    ...options
  }
  
  const handleMouseMove = (e) => {
    const rect = button.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    
    gsap.to(button, {
      x: x * defaults.strength,
      y: y * defaults.strength,
      duration: 0.3,
      ease: defaults.ease
    })
  }
  
  const handleMouseLeave = () => {
    gsap.to(button, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.3)'
    })
  }
  
  button.addEventListener('mousemove', handleMouseMove)
  button.addEventListener('mouseleave', handleMouseLeave)
  
  return () => {
    button.removeEventListener('mousemove', handleMouseMove)
    button.removeEventListener('mouseleave', handleMouseLeave)
  }
}

// Smooth scroll to element (using native smooth scroll)
export const smoothScroll = (target, options = {}) => {
  const defaults = {
    offset: 0,
    behavior: 'smooth',
    ...options
  }
  
  const element = typeof target === 'string' ? document.querySelector(target) : target
  if (!element) return
  
  const y = element.getBoundingClientRect().top + window.pageYOffset + defaults.offset
  
  window.scrollTo({
    top: y,
    behavior: defaults.behavior
  })
}