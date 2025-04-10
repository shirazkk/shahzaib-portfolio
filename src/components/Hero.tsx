"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const Hero = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <motion.span
              className="inline-block text-[#7C3BED] font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Assalam Alaikum, I&apos;m
            </motion.span>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Shahzaib Usman
            </motion.h1>
            <motion.h2
              className="text-2xl md:text-3xl font-medium text-foreground/80 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Creative Graphic Designer
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              I&apos;m a graphic designer with extensive experience in creating eye-catching designs. From logos to
              social media graphics, I tell stories through my designs using the latest tools and trends.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button asChild size="lg" className="bg-[#7C3BED]">
                <Link href="#portfolio">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Download className="mr-2 h-4 w-4" /> Download CV
              </Button>
            </motion.div>
          </div>
          <div className="order-1 md:order-2 flex justify-center ">
            <motion.div
              className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[#7C3BED] "
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#7C3BED]/20 to-[#7C3BED]/80 flex items-center justify-center">
                <Image
                src="/profile.jpg"
                alt="Shahzaib Usman"
                width={320}
                height={320}
                className="rounded-full object-cover w-full h-full"
         
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-[#7C3BED]/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#7C3BED]/10 rounded-full filter blur-3xl"></div>
    </section>
  )
}

export default Hero
