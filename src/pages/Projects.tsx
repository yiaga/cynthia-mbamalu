import { motion } from "framer-motion";
import { ArrowUpRight, Database, Users, Scale, Mic, Globe, Award } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeader from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";

import electionMonitoring from "@/assets/election-monitoring.jpg";
import youthMovement from "@/assets/youth-movement.jpg";
import legalAdvocacy from "@/assets/legal-advocacy.jpg";
import dataCenter from "@/assets/data-center.jpg";
import communityOrganizing from "@/assets/community-organizing.jpg";
import podcastStudio from "@/assets/podcast-studio.jpg";

const projects = [
  {
    id: "watching-the-vote",
    title: "#WatchingTheVote Project",
    category: "Electoral Integrity",
    description: "A cutting-edge, data-driven citizen observation initiative for election integrity. This platform uses sophisticated methodology and technology to deploy thousands of observers, providing independent verification of election results and processes in Nigeria and other African countries.",
    image: electionMonitoring,
    icon: Database,
    highlights: [
      "Data-driven election monitoring system",
      "Thousands of trained citizen observers deployed",
      "Real-time SMS-based data collection",
      "Independent verification of election results",
      "Technology-enhanced transparency",
    ],
  },
  {
    id: "not-too-young-to-run",
    title: "Not Too Young to Run Movement",
    category: "Youth Political Inclusion",
    description: "As a founding leader of this landmark social movement, Cynthia Mbamalu was instrumental in achieving a historic constitutional amendment in Nigeria. The movement successfully advocated for and secured the reduction of the constitutional age limits for contesting various political offices, significantly increasing political inclusion for Nigerian youth.",
    image: youthMovement,
    icon: Users,
    highlights: [
      "Historic constitutional amendment achieved",
      "Reduced age limits for political office",
      "Mobilized youth across Nigeria",
      "International recognition and replication",
      "Ongoing Run-to-Win campaign",
    ],
  },
  {
    id: "electoral-act-2022",
    title: "Electoral Act & Legal Advocacy",
    category: "Constitutional Reform",
    description: "Played a pivotal role in the advocacy for and final adoption of Nigeria's Electoral Act 2022, a landmark reform enhancing the transparency and efficiency of the electoral process. Continues to drive legal advocacy for constitutional reforms aimed at addressing human rights, gender equality, and better democratic practice.",
    image: legalAdvocacy,
    icon: Scale,
    highlights: [
      "Nigeria's Electoral Act 2022 adoption",
      "Enhanced electoral transparency",
      "Electronic transmission of results",
      "Gender equality provisions",
      "Ongoing constitutional reform advocacy",
    ],
  },
  {
    id: "data-center",
    title: "Election Data Analytics Center",
    category: "Technology & Innovation",
    description: "Yiaga Africa's #WatchingTheVote data center receives thousands of text messages containing individual pieces of information about elections. The sophisticated data analysis platform processes real-time information from observers across polling stations, enabling independent parallel vote tabulation.",
    image: dataCenter,
    icon: Database,
    highlights: [
      "Real-time data processing",
      "Parallel vote tabulation",
      "54,500+ data points per election",
      "Statistical analysis and projections",
      "Transparent result verification",
    ],
  },
  {
    id: "community-organizing",
    title: "Community Organizing Program",
    category: "Youth Development",
    description: "As an experienced and certified community organizer, Cynthia manages the Community Organising program for young people in Nigeria and West Africa. The program strengthens institutional and technical capacities of youth organizations in organizing as a leadership practice.",
    image: communityOrganizing,
    icon: Globe,
    highlights: [
      "Youth Organizing School (YOS)",
      "West Africa regional scope",
      "Leadership development",
      "Democratic values and principles",
      "Advocacy and policy formulation",
    ],
  },
  {
    id: "unamplified-podcast",
    title: "The Unamplified Podcast",
    category: "Media & Advocacy",
    description: "An innovative chatroom for diverse conversations across generations on issues of democracy and development in Africa through a gender lens. The podcast focuses on social issues in today's society, covering topics ranging from politics, democracy, development, social norms and lifestyle.",
    image: podcastStudio,
    icon: Mic,
    highlights: [
      "Bi-weekly episodes",
      "Available on Spotify and YouTube",
      "Gender-focused perspective",
      "Cross-generational dialogue",
      "Democracy and development themes",
    ],
    links: {
      spotify: "https://open.spotify.com/show/1hfGyFL8v4UpKzmfBNPapI",
      youtube: "https://www.youtube.com/channel/UCS20W_AJwMatcpxXBFJTA0g",
    },
  },
];

const Projects = () => {
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
              Projects & Initiatives
            </span>
            <h1>Transforming Democracy Through Action</h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Leading transformative initiatives that strengthen electoral integrity,
              empower youth, and advance gender equality across Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="container-wide">
          <div className="space-y-24">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative overflow-hidden rounded-lg shadow-medium">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-landscape object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="badge-accent">{project.category}</span>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary rounded-lg flex items-center justify-center shadow-medium">
                    <project.icon className="h-10 w-10 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h2 className="text-3xl">{project.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Award className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="text-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {project.links && (
                    <div className="flex flex-wrap gap-4 pt-4">
                      {project.links.spotify && (
                        <Button asChild variant="outline">
                          <a href={project.links.spotify} target="_blank" rel="noopener noreferrer">
                            Listen on Spotify <ArrowUpRight className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {project.links.youtube && (
                        <Button asChild className="bg-primary-foreground text-primary hover:bg-primary hover:text-primary-foreground shadow-soft transition-colors">
                          <a href={project.links.youtube} target="_blank" rel="noopener noreferrer">
                            Watch on YouTube <ArrowUpRight className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* International Recognition */}
      <section className="py-24 bg-primary">
        <div className="container-wide">
          <SectionHeader
            label="Global Impact"
            title="International Recognition"
            description="Election observation missions and advocacy work spanning multiple countries"
            centered
            light
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {["Nigeria", "Ghana", "Kenya", "South Africa", "Sierra Leone", "Liberia", "USA", "And More"].map((country, index) => (
              <div
                key={country}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 text-center border border-primary-foreground/20"
              >
                <span className="text-primary-foreground font-medium">{country}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2>Interested in Collaboration?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether it's election observation, community organizing, or advocacy partnerships,
              let's work together to strengthen democracy in Africa.
            </p>
            <Button asChild size="lg" className="mt-4">
              <Link to="/contact">
                Get in Touch <ArrowUpRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Projects;
