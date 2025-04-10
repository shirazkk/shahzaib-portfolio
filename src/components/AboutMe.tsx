"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Palette, Globe, Lightbulb, TrendingUp } from "lucide-react"

const About = () => {


  const skills = [
    {
      icon: <Palette className="h-10 w-10 text-[#7C3BED]" />,
      title: "Creative Design",
      description: "Creating visually appealing designs that communicate effectively.",
    },
    {
      icon: <Globe className="h-10 w-10 text-[#7C3BED]" />,
      title: "Brand Identity",
      description: "Developing cohesive brand identities that resonate with target audiences.",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-[#7C3BED]" />,
      title: "Problem Solving",
      description: "Finding creative solutions to design challenges.",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-[#7C3BED]" />,
      title: "Trend Awareness",
      description: "Staying current with the latest design trends and technologies.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-[#7C3BED] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            I&apos;m a passionate graphic designer from Karachi, Pakistan with a focus on creating impactful visual
            solutions for brands and businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <h3 className="text-2xl font-bold mb-6">My Story</h3>
            <p className="text-muted-foreground mb-6">
              Hey there! Myself Shahzaib Usman & I&apos;m a graphic designer with a lot of experience in making things
              look cool and eye-catching. I&apos;ve worked on all sorts of design stuff like logos, online graphics,
              print materials, and illustrations.
            </p>
            <p className="text-muted-foreground mb-6">
              I like telling stories through my designs, and I&apos;m pretty good at using the latest design tools and
              keeping up with what&apos;s trendy. My approach combines creativity with strategic thinking to deliver
              designs that not only look great but also achieve business objectives.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div>
                <h4 className="font-bold">Location</h4>
                <p className="text-muted-foreground">Karachi, Pakistan</p>
              </div>
              <div>
                <h4 className="font-bold">Experience</h4>
                <p className="text-muted-foreground">5+ Years</p>
              </div>
              <div>
                <h4 className="font-bold">Projects</h4>
                <p className="text-muted-foreground">100+ Completed</p>
              </div>
              <div>
                <h4 className="font-bold">Clients</h4>
                <p className="text-muted-foreground">50+ Happy Clients</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="mb-4">{skill.icon}</div>
                  <h4 className="text-xl font-bold mb-2">{skill.title}</h4>
                  <p className="text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
