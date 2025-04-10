"use client"

import { useEffect } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Palette, ImageIcon, PenTool, FileType, Instagram } from "lucide-react"
import Link from "next/link"

const Services = () => {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal")

      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight
        const revealTop = reveal.getBoundingClientRect().top
        const revealPoint = 150

        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add("active")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const services = [
    {
      icon: <Palette className="h-10 w-10 text-[#7C3BED]" />,
      title: "Brand Identity",
      description: "Complete brand identity design including logo, color palette, typography, and brand guidelines.",
      price: "Starting from $150",
    },
    {
      icon: <PenTool className="h-10 w-10 text-[#7C3BED]" />,
      title: "Logo Design",
      description: "Professional, unique, and memorable logo design that represents your brand's values and vision.",
      price: "Starting from $80",
    },
    {
      icon: <Instagram className="h-10 w-10 text-[#7C3BED]" />,
      title: "Social Media Design",
      description: "Eye-catching social media graphics, post templates, and profile designs for various platforms.",
      price: "Starting from $7 per post",
    },
    {
      icon: <FileType className="h-10 w-10 text-[#7C3BED]" />,
      title: "Card Design",
      description: "Custom card designs for invitations, business cards, greeting cards, and special occasions.",
      price: "Starting from $12",
    },
    {
      icon: <ImageIcon className="h-10 w-10 text-[#7C3BED]" />,
      title: "Print Design",
      description: "Professional designs for brochures, flyers, posters, packaging, and other print materials.",
      price: "Starting from $50",
    },
  ]

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 ">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
          <div className="w-20 h-1 bg-[#7C3BED] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            I offer a wide range of graphic design services to help businesses and individuals establish a strong visual
            presence and connect with their audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
              <CardFooter className="flex flex-col items-start">
                <p className="text-lg font-medium text-[#7C3BED] mb-4">{service.price}</p>
                <Button asChild className="bg-[#7C3BED]">
                  <Link href="#contact">Request Service</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
