'use client'

import {useState, useEffect} from 'react'
import Link from 'next/link'
import {motion, useScroll, useTransform} from 'framer-motion'
import {Facebook, Instagram, Linkedin, Menu, X, ShoppingBag, Users, TrendingUp, Zap} from 'lucide-react'
import {Button} from "@/components/ui/button"
import {content} from './content'

export default function EnhancedLandingPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')
    const {scrollYProgress} = useScroll()
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

    useEffect(() => {
        const handleScroll = () => {
            const sections = content.nav.map(item => item.href.slice(1))
            const scrollPosition = window.scrollY

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element && scrollPosition >= element.offsetTop - 100) {
                    setActiveSection(section)
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <div className="min-h-screen bg-background text-foreground">
            <header
                className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="#home" className="text-2xl font-sans font-bold text-black">
                        {content.brand}
                    </Link>
                    <nav className="hidden md:flex items-center space-x-6">
                        {content.nav.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-sm font-medium transition-colors hover:text-[#FEC400] ${
                                    activeSection === item.href.slice(1) ? 'text-[#FEC400]' : 'text-muted-foreground'
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                    <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
                        {isMenuOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
                    </Button>
                </div>
            </header>

            {isMenuOpen && (
                <motion.div
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: -20}}
                    className="fixed inset-x-0 top-16 z-40 bg-background border-b md:hidden"
                >
                    <nav className="container mx-auto py-4">
                        {content.nav.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="block py-2 text-sm font-medium text-muted-foreground hover:text-[#FEC400]"
                                onClick={toggleMenu}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </motion.div>
            )}

            <main>
                <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
                    <motion.div
                        className="absolute inset-0 z-0"
                        style={{
                            backgroundImage: "url('/store.jpg?height=1080&width=1920')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            opacity,
                            scale,
                        }}
                    />
                    <div className="container mx-auto px-4 text-center relative z-10">
                        <motion.h1
                            className="text-4xl md:text-6xl font-bold mb-4 text-white"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{
                                delay: 0.01
                            }}
                        >
                            {content.home.title}
                        </motion.h1>
                        <motion.p
                            className="text-xl mb-8 text-white"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.4}}
                        >
                            {content.home.subtitle}
                        </motion.p>
                        <motion.div
                            className="space-x-4"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.6}}
                        >
                            <Button size="lg" className="bg-[#FEC400] text-black hover:bg-[#FEC400]/90">
                                {content.home.cta[0]}
                            </Button>
                            <Button variant="outline" size="lg"
                                    className="text-black border-white hover:bg-white hover:text-black">
                                {content.home.cta[1]}
                            </Button>
                        </motion.div>
                    </div>
                </section>

                <section id="about" className="py-20 md:py-32">
                    <div className="container mx-auto px-4">
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold mb-8 text-center"
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                        >
                            {content.about.title}
                        </motion.h2>
                        <motion.p
                            className="mb-12 text-center max-w-2xl mx-auto"
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{delay: 0.2}}
                        >
                            {content.about.description}
                        </motion.p>
                        <motion.h3
                            className="text-2xl md:text-3xl font-bold mb-4 text-center"
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{delay: 0.4}}
                        >
                            {content.about.team.title}
                        </motion.h3>
                        <motion.p
                            className="text-center max-w-2xl mx-auto"
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{delay: 0.6}}
                        >
                            {content.about.team.description}
                        </motion.p>
                    </div>
                </section>

                <section id="franchise" className="py-20 md:py-32 bg-[#FEC400]/10">
                    <div className="container mx-auto px-4">
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold mb-12 text-center"
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                        >
                            {content.franchise.title}
                        </motion.h2>
                        <div className="grid md:grid-cols-2 gap-12">
                            <motion.div
                                initial={{opacity: 0, x: -20}}
                                whileInView={{opacity: 1, x: 0}}
                                viewport={{once: true}}
                            >
                                <h3 className="text-2xl font-bold mb-6 flex items-center">
                                    <TrendingUp className="mr-2 text-[#FEC400]"/>
                                    {content.franchise.advantages.title}
                                </h3>
                                <ul className="space-y-4">
                                    {content.franchise.advantages.items.map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <Zap className="mr-2 mt-1 text-[#FEC400]"/>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                            <motion.div
                                initial={{opacity: 0, x: 20}}
                                whileInView={{opacity: 1, x: 0}}
                                viewport={{once: true}}
                            >
                                <h3 className="text-2xl font-bold mb-6 flex items-center">
                                    <Users className="mr-2 text-[#FEC400]"/>
                                    {content.franchise.process.title}
                                </h3>
                                <ol className="space-y-4">
                                    {content.franchise.process.steps.map((step, index) => (
                                        <li key={index} className="flex items-start">
                      <span
                          className="flex items-center justify-center w-6 h-6 rounded-full bg-[#FEC400] text-black font-bold mr-2 mt-1">
                        {index + 1}
                      </span>
                                            <span>{step}</span>
                                        </li>
                                    ))}
                                </ol>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section id="products" className="py-20 md:py-32">
                    <div className="container mx-auto px-4">
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold mb-8 text-center"
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                        >
                            {content.products.title}
                        </motion.h2>
                        <motion.p
                            className="mb-12 text-center max-w-2xl mx-auto"
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{delay: 0.2}}
                        >
                            {content.products.description}
                        </motion.p>
                        <div className="grid md:grid-cols-3 gap-8">
                            {content.products.items.map((product, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center justify-center"
                                    initial={{opacity: 0, y: 20}}
                                    whileInView={{opacity: 1, y: 0}}
                                    viewport={{once: true}}
                                    transition={{delay: index * 0.2}}
                                >
                                    <ShoppingBag className="w-12 h-12 text-[#FEC400] mb-4"/>
                                    <h3 className="text-xl font-bold mb-2 text-center">{product.name}</h3>
                                    <p className="text-center">{product.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="cases" className="py-20 md:py-32 bg-[#FEC400]/10">
                    <div className="container mx-auto px-4">
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold mb-12 text-center"
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                        >
                            {content.cases.title}
                        </motion.h2>
                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            {content.cases.stories.map((story, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white p-6 rounded-lg shadow-md"
                                    initial={{opacity: 0, x: index % 2 === 0 ? -20 : 20}}
                                    whileInView={{opacity: 1, x: 0}}
                                    viewport={{once: true}}
                                >
                                    <h3 className="text-2xl font-bold mb-4 text-[#FEC400]">{story.name}</h3>
                                    <p>{story.description}</p>
                                </motion.div>
                            ))}
                        </div>
                        <motion.p
                            className="text-center max-w-2xl mx-auto"
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{delay: 0.4}}
                        >
                            {content.cases.stats}
                        </motion.p>
                    </div>
                </section>

                <section id="testimonials" className="py-20 md:py-32">
                    <div className="container mx-auto px-4">
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold mb-12 text-center"
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                        >
                            {content.testimonials.title}
                        </motion.h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {content.testimonials.items.map((item, index) => (
                                <motion.blockquote
                                    key={index}
                                    className="bg-white p-6 rounded-lg shadow-md relative"
                                    initial={{opacity: 0, x: index % 2 === 0 ? -20 : 20}}
                                    whileInView={{opacity: 1, x: 0}}
                                    viewport={{once: true}}
                                >
                                    <svg
                                        className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4 h-16 w-16 text-[#FEC400]/20"
                                        width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path
                                            d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                                            fill="currentColor"/>
                                    </svg>
                                    <p className="relative z-10 italic mb-4">{item.quote}</p>
                                    <footer className="text-right font-bold text-[#FEC400]">— {item.author}</footer>
                                </motion.blockquote>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="contact" className="py-20 md:py-32 bg-[#FEC400]">
                    <div className="container mx-auto px-4">
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold mb-12 text-center text-black"
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                        >
                            {content.contact.title}
                        </motion.h2>
                        <motion.div
                            className="text-center mb-8 text-black"
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{delay: 0.2}}
                        >
                            <p>电话：{content.contact.phone}</p>
                            <p>邮箱：{content.contact.email}</p>
                            <p>地址：{content.contact.address}</p>
                        </motion.div>
                        <motion.div
                            className="flex justify-center space-x-4"
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{delay: 0.4}}
                        >
                            <Link href="#" className="text-black hover:text-white transition-colors">
                                <Facebook className="h-6 w-6"/>
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="text-black hover:text-white transition-colors">
                                <Instagram className="h-6 w-6"/>
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="#" className="text-black hover:text-white transition-colors">
                                <Linkedin className="h-6 w-6"/>
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </motion.div>
                    </div>
                </section>
            </main>

            <footer className="bg-black text-white py-6">
                <div className="container mx-auto px-4 text-center">
                    <p>© {new Date().getFullYear()} {content.brand}. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}