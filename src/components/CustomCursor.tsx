import { useEffect, useRef, useState } from 'react'

// Cursor customizado com a identidade da Ameriê: um ponto com o gradiente da
// marca que segue o mouse com um leve delay, e cresce ao passar sobre
// elementos clicáveis. Só ativa em dispositivos com mouse (pointer: fine) —
// em touch, o cursor nativo continua normal.
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    setEnabled(mq.matches)
    const onChange = (e: MediaQueryListEvent) => setEnabled(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!enabled) return

    document.body.classList.add('custom-cursor-active')

    const ring = { x: 0, y: 0 }
    const dot = { x: 0, y: 0 }
    let target = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    let raf = 0

    const onMove = (e: MouseEvent) => {
      target = { x: e.clientX, y: e.clientY }
      setVisible(true)
      const el = e.target as HTMLElement
      setHovering(!!el.closest('a, button, input, textarea, [role="button"], .cursor-pointer'))
    }
    const onLeave = () => setVisible(false)

    const loop = () => {
      dot.x += (target.x - dot.x) * 0.9
      dot.y += (target.y - dot.y) * 0.9
      ring.x += (target.x - ring.x) * 0.18
      ring.y += (target.y - ring.y) * 0.18

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dot.x}px, ${dot.y}px, 0) translate(-50%, -50%)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    raf = requestAnimationFrame(loop)

    return () => {
      document.body.classList.remove('custom-cursor-active')
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full gradient-bg transition-[width,height,opacity] duration-200 ease-out"
        style={{
          width: hovering ? 10 : 8,
          height: hovering ? 10 : 8,
          opacity: visible ? 1 : 0,
        }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full border border-white/70 transition-[width,height,opacity,border-color] duration-200 ease-out mix-blend-difference"
        style={{
          width: hovering ? 52 : 32,
          height: hovering ? 52 : 32,
          opacity: visible ? 1 : 0,
        }}
      />
    </>
  )
}
