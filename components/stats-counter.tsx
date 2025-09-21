"use client"

import { useEffect, useState, useRef } from "react"
import { Users, Building, Award, Clock } from "lucide-react"

const stats = [
  {
    icon: Users,
    number: 10000,
    label: "Happy Clients Served",
    suffix: "+",
  },
  {
    icon: Building,
    number: 5000,
    label: "Businesses Registered",
    suffix: "+",
  },
  {
    icon: Award,
    number: 15,
    label: "Years of Experience",
    suffix: "",
  },
  {
    icon: Clock,
    number: 24,
    label: "Hour Support",
    suffix: "/7",
  },
]

function AnimatedCounter({
  target,
  duration = 2000,
  isVisible,
}: {
  target: number
  duration?: number
  isVisible: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * target))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [target, duration, isVisible])

  return <span>{count.toLocaleString()}</span>
}

export function StatsCounter() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 saffron-bg">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white text-balance">
            Trusted Across <span className="text-accent">India</span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">Numbers that speak for our commitment to excellence</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="p-4 bg-white/20 rounded-full">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl lg:text-5xl font-bold text-white">
                    <AnimatedCounter target={stat.number} isVisible={isVisible} />
                    {stat.suffix}
                  </div>
                  <div className="text-white/90 font-medium">{stat.label}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
