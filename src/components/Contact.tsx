"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Instagram, Linkedin, Facebook, Youtube } from "lucide-react"
import Link from "next/link"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 3000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-[#7C3BED]" />,
      title: "Location",
      details: "Karachi, Pakistan",
    },
    {
      icon: <Phone className="h-6 w-6 text-[#7C3BED]" />,
      title: "Phone",
      details: "+92 XXX XXXXXXX",
    },
    {
      icon: <Mail className="h-6 w-6 text-[#7C3BED]" />,
      title: "Email",
      details: "contact@shazidzins.com",
    },
  ]

  const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, url: "https://instagram.com", label: "Instagram" },
    { icon: <Linkedin className="h-5 w-5" />, url: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Facebook className="h-5 w-5" />, url: "https://facebook.com", label: "Facebook" },
    { icon: <Youtube className="h-5 w-5" />, url: "https://youtube.com", label: "YouTube" },
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 ">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-[#7C3BED] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Have a project in mind or want to discuss a collaboration? Feel free to reach out to me through the contact
            form or using the information below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 ">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <Input
                        placeholder="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <Input
                      placeholder="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <Textarea
                      placeholder="Your Message"
                      rows={6}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full md:w-auto bg-[#7C3BED]" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                  {submitSuccess && <p className="text-green-600 mt-4">Your message has been sent successfully!</p>}
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="reveal">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mr-4 mt-1">{info.icon}</div>
                      <div>
                        <h4 className="font-bold">{info.title}</h4>
                        <p className="text-muted-foreground">{info.details}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h4 className="font-bold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-secondary hover:bg-[#7C3BED] hover:text-white transition-colors p-2 rounded-full"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
