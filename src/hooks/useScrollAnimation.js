import { useEffect, useRef } from 'react'

export default function useScrollAnimation(visibleClassName = 'visible') {
    const ref = useRef(null)

    useEffect(() => {
        const node = ref.current
        if (!node) return

        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries
                if (entry && entry.isIntersecting) {
                    node.classList.add(visibleClassName)
                    observer.unobserve(node)
                }
            },
            {
                threshold: 0.15,
                rootMargin: '0px 0px -6% 0px'
            }
        )

        observer.observe(node)

        return () => observer.disconnect()
    }, [visibleClassName])

    return ref
}
