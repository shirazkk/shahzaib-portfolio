import Link from "next/link"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-[#7C3BED]">
              ShaziDzins
            </Link>
            <p className="mt-2 text-muted-foreground max-w-md">
              Professional graphic designer specializing in brand identity, logo design, and social media graphics.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              <Link href="#home" className="text-foreground/80 hover:text-[#7C3BED] transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-foreground/80 hover:text-[#7C3BED] transition-colors">
                About
              </Link>
              <Link href="#portfolio" className="text-foreground/80 hover:text-[#7C3BED] transition-colors">
                Portfolio
              </Link>
              <Link href="#services" className="text-foreground/80 hover:text-[#7C3BED] transition-colors">
                Services
              </Link>
              <Link href="#contact" className="text-foreground/80 hover:text-[#7C3BED] transition-colors">
                Contact
              </Link>
            </div>
            <p className="text-muted-foreground text-sm">&copy; {currentYear} ShaziDzins. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
