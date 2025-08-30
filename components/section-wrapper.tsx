"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface SectionWrapperProps {
  id: string
  children: React.ReactNode
  className?: string
}

export function SectionWrapper({ id, children, className = "" }: SectionWrapperProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`transition-all duration-700 ${
        isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </section>
  )
}
