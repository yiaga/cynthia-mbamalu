import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Twitter, Youtube, Send } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeader from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  {
    icon: Twitter,
    href: "https://twitter.com/DCynthiaM",
    label: "Twitter",
    username: "@DCynthiaM"
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com",
    label: "LinkedIn",
    username: "Cynthia Mbamalu"
  },
  {
    icon: Youtube,
    href: "https://www.youtube.com/channel/UCS20W_AJwMatcpxXBFJTA0g",
    label: "YouTube",
    username: "The Unamplified Podcast"
  },
];

const inquiryTypes = [
  "Speaking Engagement",
  "Media Interview",
  "Collaboration",
  "Consultation",
  "General Inquiry",
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    inquiryType: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = encodeURIComponent(`${formData.inquiryType || 'Contact Form'}: Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Organization: ${formData.organization || 'N/A'}\n` +
      `Inquiry Type: ${formData.inquiryType || 'General Inquiry'}\n\n` +
      `Message:\n${formData.message}`
    );

    // Open mailto link
    window.location.href = `mailto:cmbamalu@yiaga.org?subject=${subject}&body=${body}`;

    toast({
      title: "Opening Email Client",
      description: "Your default email client will open with the message pre-filled.",
    });

    setFormData({
      name: "",
      email: "",
      organization: "",
      inquiryType: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-24 bg-muted">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-accent font-medium tracking-widest text-sm uppercase mb-4">
              Contact
            </span>
            <h1>Let's Connect</h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Interested in speaking engagements, collaboration opportunities,
              or simply want to discuss democracy and governance in Africa?
              I'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeader
                label="Get in Touch"
                title="Send a Message"
              />

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization</Label>
                    <Input
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Your organization"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">Inquiry Type</Label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select type...</option>
                      {inquiryTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <SectionHeader
                  label="Contact Info"
                  title="Other Ways to Reach Me"
                />
              </div>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">Abuja, Nigeria</p>
                    <p className="text-sm text-muted-foreground">Based in Nigeria, working across Africa</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">For professional inquiries</p>
                    <a
                      href="mailto:cmbamalu@yiaga.org"
                      className="text-accent animated-underline"
                    >
                      cmbamalu@yiaga.org
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-border">
                <h3 className="font-semibold mb-4">Connect on Social Media</h3>
                <div className="space-y-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover:bg-accent transition-colors">
                        <social.icon className="h-5 w-5 text-foreground group-hover:text-accent-foreground transition-colors" />
                      </div>
                      <div>
                        <p className="font-medium group-hover:text-accent transition-colors">{social.label}</p>
                        <p className="text-sm text-muted-foreground">{social.username}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Speaking Engagements */}
              <div className="bg-card rounded-lg p-6 shadow-soft border border-border">
                <h3 className="font-semibold mb-4">Speaking Engagements</h3>
                <p className="text-muted-foreground mb-4">
                  Available for conferences, panels, workshops, and keynote speeches on:
                </p>
                <ul className="space-y-2 text-sm">
                  {[
                    "Electoral Integrity & Democracy",
                    "Youth Political Participation",
                    "Gender Equality in Governance",
                    "Constitutional Law & Reform",
                    "Community Organizing",
                    "Social Movements in Africa",
                  ].map((topic) => (
                    <li key={topic} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-primary">
        <div className="container-narrow">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-2xl md:text-3xl font-serif text-primary-foreground leading-relaxed italic">
              "We should not see elections as a battlefield... We should see elections
              as a necessary democratic process for a legitimate government to emerge."
            </p>
            <footer className="mt-8">
              <p className="text-lg font-medium text-primary-foreground">Cynthia Mbamalu</p>
              <p className="text-primary-foreground/70">Speaking on AIT</p>
            </footer>
          </motion.blockquote>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
