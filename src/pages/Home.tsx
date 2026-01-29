import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Vote, Users, Scale, Mic, Award } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeader from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";

// Import images
import heroPortrait from "@/assets/hero-portrait.jpg";
import electionMonitoring from "@/assets/election-monitoring.jpg";
import youthMovement from "@/assets/youth-movement.jpg";
import womenLeadership from "@/assets/women-leadership.jpg";

const competencies = [
  { icon: Vote, label: "Electoral Integrity" },
  { icon: Users, label: "Gender Advocacy" },
  { icon: Scale, label: "Constitutional Law" },
  { icon: Users, label: "Community Organizing" },
  { icon: Award, label: "Social Movements" },
  { icon: Vote, label: "Election Observation" },
];

const featuredProjects = [
  {
    title: "#WatchingTheVote",
    description: "A cutting-edge, data-driven citizen observation initiative for election integrity across Africa.",
    image: electionMonitoring,
  },
  {
    title: "Not Too Young to Run",
    description: "Historic movement that achieved constitutional amendment lowering age limits for political office.",
    image: youthMovement,
  },
  {
    title: "Women's Political Inclusion",
    description: "Advocacy for gender equality and women's representation in governance across Nigeria.",
    image: womenLeadership,
  },
];

const Home = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden">
        <div className="absolute inset-0 hero-overlay" />

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 border border-primary-foreground rounded-full" />
          <div className="absolute bottom-20 right-10 w-96 h-96 border border-primary-foreground rounded-full" />
        </div>

        <div className="container-wide relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-primary-foreground space-y-6"
            >
              <span className="inline-block text-accent font-medium tracking-widest text-sm uppercase">
                Advocate • Leader • Changemaker
              </span>

              <h1 className="text-primary-foreground leading-tight">
                Cynthia Onyinye<br />
                <span className="text-gradient">Mbamalu</span>
              </h1>

              <p className="text-xl text-primary-foreground/80 max-w-lg leading-relaxed">
                Human rights advocate with 18 years of experience promoting democracy,
                youth and women's political inclusion, electoral integrity, and human rights across Africa.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link to="/about">
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary hover:text-primary-foreground shadow-medium transition-colors">
                  <Link to="/projects">View Projects</Link>
                </Button>
              </div>

              {/* Role Badge */}
              <div className="pt-8">
                <p className="text-sm text-primary-foreground/60 uppercase tracking-wide mb-2">Current Role</p>
                <p className="text-lg font-medium text-primary-foreground">
                  Director of Programs — <span className="text-accent">Yiaga Africa</span>
                </p>
              </div>
            </motion.div>

            {/* Portrait Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-portrait max-w-md mx-auto lg:ml-auto">
                <img
                  src={heroPortrait}
                  alt="Cynthia Mbamalu"
                  className="w-full h-full object-cover rounded-lg shadow-strong"
                />
                <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-accent rounded-lg -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-16 bg-secondary">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {competencies.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 bg-background rounded-full shadow-soft"
              >
                <item.icon className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeader
                label="About"
                title="Championing Democracy Across Africa"
                description="A lawyer with an LLM in Comparative Constitutional Law, co-founder of Yiaga Africa, leading initiatives in democratic practice, social movements, and electoral integrity."
              />

              <div className="mt-8 space-y-4 text-muted-foreground">
                <p>
                  Pivotal in the adoption of Nigeria's Electoral Act 2022, Cynthia has led election
                  observation missions in multiple African countries and the USA.
                </p>
                <p>
                  As a founding leader of the Not Too Young to Run movement, she helped achieve
                  a historic constitutional amendment lowering age limits for political office in Nigeria.
                </p>
              </div>

              <Button asChild className="mt-8" variant="outline">
                <Link to="/about">
                  Full Biography <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <blockquote className="quote-accent text-2xl md:text-3xl font-serif text-foreground leading-relaxed">
                "As young Africans, the only way our numbers will be powerful is if we learn to
                mobilize and organize ourselves better, so that we can transform that numerical
                strength into the requisite power we need to make demands on the system."
              </blockquote>
              <p className="mt-4 text-muted-foreground font-medium">— Cynthia Mbamalu</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-muted">
        <div className="container-wide">
          <SectionHeader
            label="Featured Work"
            title="Key Initiatives & Projects"
            description="Leading transformative initiatives that strengthen democracy and empower citizens across Africa."
            centered
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group relative overflow-hidden rounded-lg card-hover"
              >
                <div className="aspect-landscape overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 image-overlay" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-primary-foreground/80 text-sm">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link to="/projects">
                View All Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* The Unamplified Podcast CTA */}
      <section className="py-24 hero-gradient">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary-foreground space-y-6"
            >
              <span className="inline-flex items-center gap-2 text-accent font-medium tracking-widest text-sm uppercase">
                <Mic className="h-5 w-5" />
                Podcast
              </span>
              <h2 className="text-primary-foreground">The Unamplified Podcast</h2>
              <p className="text-xl text-primary-foreground/80 max-w-lg">
                An innovative chatroom for diverse conversations across generations on issues of
                democracy and development in Africa through a gender lens.
              </p>
              <p className="text-primary-foreground/70">
                Amplifying diversity of voices and transformational conversations driven by growth-mindset.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <a href="https://open.spotify.com/show/1hfGyFL8v4UpKzmfBNPapI" target="_blank" rel="noopener noreferrer">
                    Listen on Spotify
                  </a>
                </Button>
                <Button asChild className="bg-primary-foreground text-primary hover:bg-primary hover:text-primary-foreground shadow-medium transition-colors">
                  <a href="https://www.youtube.com/channel/UCS20W_AJwMatcpxXBFJTA0g" target="_blank" rel="noopener noreferrer">
                    Watch on YouTube
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-8 border border-primary-foreground/20">
                <h3 className="text-primary-foreground text-xl font-semibold mb-4">Vision</h3>
                <p className="text-primary-foreground/80 leading-relaxed">
                  Creating an open and safe space for effective conversation that aids in promoting
                  learning and inspiring a mindset shift within respective societies. Built on the
                  premise that simple daily living is like constant conversations with the world around us.
                </p>
                <div className="mt-6 pt-6 border-t border-primary-foreground/20">
                  <p className="text-sm text-primary-foreground/60">Executive Producer & Host</p>
                  <p className="text-primary-foreground font-medium">Cynthia Mbamalu</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2>Let's Connect</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Interested in collaboration, speaking engagements, or learning more about
              democratic advocacy in Africa? I'd love to hear from you.
            </p>
            <Button asChild size="lg" className="mt-4">
              <Link to="/contact">
                Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
