import { Github, Linkedin } from "lucide-react"

export const Footer = () => {

    const socialLinks = [
        {
            icon: Github, 
            href: "https://github.com/RaymondL11",
            label: "Github"
        },
        {
            icon: Linkedin,
            href: "https://www.linkedin.com/in/raymondleung12",
            label: "LinkedIn"
        }
    ];

    const footerLinks = [
    {href: "#about", label: "About"},
    {href: "#projects", label: "Projects"},
    {href: "#experience", label: "Experience"}
];

const currentYear = new Date().getFullYear()

    return (
        <footer className="py-12 border-t border-border">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo and Copyright */}
                    <div className="text-center md:text-left"> 
                        <a href="#">RL<span className="text-primary">.</span></a>
                        <p className="text-sm text-muted-foreground mt-2">
                           © {currentYear} Raymond Leung. All rights reserved.
                        </p>
                    </div>

                    {/* Links */}
                    <nav className="flex flex-wrap justify-center gap-6">
                        {footerLinks.map((link) => {
                            return <a 
                            href={link.href} 
                            key={link.href} 
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                {link.label}
                            </a>
                        })}
                    </nav>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => {
                            return <a href={social.href} className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all cursor-pointer">
                                <social.icon className="w-5 h-5" />
                            </a>
                        })}
                    </div>
                </div>
            </div>
        </footer>
    )
}