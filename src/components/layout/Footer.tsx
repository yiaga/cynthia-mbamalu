import { Link } from "react-router-dom";
import { Linkedin, Twitter, Youtube, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/DCynthiaM", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Youtube, href: "https://www.youtube.com/channel/UCS20W_AJwMatcpxXBFJTA0g", label: "YouTube" },
    { icon: Mail, href: "mailto:contact@cynthiambamalu.com", label: "Email" },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "News", path: "/news" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold">
              Cynthia Mbamalu<span className="text-accent">.</span>
            </h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Human rights advocate, democracy champion, and Director of Programs at Yiaga Africa. 
              Dedicated to electoral integrity, gender equality, and youth political inclusion across Africa.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <MapPin className="h-4 w-4" />
              <span>Lagos, Nigeria</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Connect</h4>
            <p className="text-primary-foreground/80 text-sm">
              Follow for insights on democracy, governance, and social movements in Africa.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center 
                    hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Cynthia Mbamalu. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Advocate • Leader • Changemaker
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
