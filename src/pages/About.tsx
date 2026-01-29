import { motion } from "framer-motion";
import { GraduationCap, Award, MapPin, Calendar } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeader from "@/components/ui/SectionHeader";

import heroPortrait from "@/assets/hero-portrait.jpg";
import womenLeadership from "@/assets/women-leadership.jpg";

const coreCompetencies = [
  "Electoral Integrity",
  "Gender Advocacy", 
  "Constitutional Law",
  "Community Organizing",
  "Social Movements",
  "Election Observation",
];

const education = [
  {
    year: "2017",
    institution: "Central European University (CEU)",
    location: "Budapest, Hungary / Vienna, Austria",
    degree: "Master of Laws (LL.M.)",
    field: "Comparative Constitutional Law",
    description: "Master's degree focused on the legal framework for democracy, human rights, and constitutional reforms, providing a foundation for advocacy work in political inclusion and governance across Africa.",
  },
  {
    year: "Various",
    institution: "Harvard Kennedy School, UNISA, UCT",
    location: "Global Executive Programs",
    degree: "Executive Leadership Programs",
    field: "Leadership, Governance, and Development",
    description: "Alumna of several international executive and leadership development programs, demonstrating continuous commitment to advanced study in democracy and social change.",
  },
];

const achievements = [
  "Pivotal role in adoption of Nigeria's Electoral Act 2022",
  "Led election observation missions across multiple African countries and USA",
  "Founding leader of the Not Too Young to Run movement",
  "Helped achieve constitutional amendment lowering age limits for political office",
  "Certified community organizer managing programs in Nigeria and West Africa",
  "Board member of Amnesty International Nigeria",
];

const About = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-24 bg-muted">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="inline-block text-accent font-medium tracking-widest text-sm uppercase">
                About Me
              </span>
              <h1>Cynthia Onyinye Mbamalu</h1>
              <p className="text-lg text-accent font-medium">
                Director of Programs — Yiaga Africa
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A human and gender rights advocate with 18 years of experience promoting democracy, 
                youth and women's political inclusion, electoral integrity, and human rights.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-portrait max-w-md mx-auto">
                <img
                  src={heroPortrait}
                  alt="Cynthia Mbamalu"
                  className="w-full h-full object-cover rounded-lg shadow-strong"
                />
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent rounded-lg -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="py-24">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              label="Biography"
              title="A Journey of Advocacy and Impact"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 space-y-6 text-lg text-muted-foreground leading-relaxed"
            >
              <p>
                Cynthia Onyinye Mbamalu is a lawyer with an LLM in Comparative Constitutional Law 
                from CEU. She co-founded Yiaga Africa and serves as its Director of Programs, leading 
                initiatives in democratic practice, social movements, political inclusion, gender 
                equality, and electoral integrity in Nigeria and Africa.
              </p>
              
              <p>
                She was pivotal in the adoption of Nigeria's Electoral Act 2022 and has led election 
                observation missions in multiple African countries and the USA. She spearheads the 
                <strong className="text-foreground"> #WatchingTheVote project</strong>, a data-driven 
                initiative for election integrity.
              </p>

              <p>
                As a founding leader of the <strong className="text-foreground">Not Too Young to Run</strong> movement, 
                she helped lower the constitutional age for contesting elections in Nigeria—a historic 
                achievement for youth political participation.
              </p>

              <p>
                As an experienced and certified community organizer, she manages the Community Organising 
                program for young people in Nigeria and West Africa, mentors youth, and hosts the 
                <strong className="text-foreground"> 'Unamplified Podcast'</strong> on democracy and 
                development in Africa.
              </p>

              <p>
                She is an alumna of executive programs at Harvard Kennedy School of Government, CEU, 
                UNISA, and the University of Cape Town. She is a member of the Board of Amnesty 
                International Nigeria amongst others.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-24 bg-primary">
        <div className="container-wide">
          <SectionHeader
            label="Expertise"
            title="Core Competencies"
            centered
            light
          />

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {coreCompetencies.map((competency, index) => (
              <motion.div
                key={competency}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 text-center border border-primary-foreground/20"
              >
                <span className="text-primary-foreground font-medium">{competency}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-24">
        <div className="container-wide">
          <SectionHeader
            label="Academic Background"
            title="Education"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-card rounded-lg p-8 shadow-soft border border-border"
              >
                <div className="flex items-center gap-2 text-accent mb-4">
                  <GraduationCap className="h-5 w-5" />
                  <span className="font-medium">{edu.year}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-1">{edu.institution}</h3>
                
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                  <MapPin className="h-4 w-4" />
                  <span>{edu.location}</span>
                </div>

                <div className="space-y-2 mb-4">
                  <p className="font-medium text-foreground">{edu.degree}</p>
                  <p className="text-accent text-sm">{edu.field}</p>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-24 bg-muted">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeader
                label="Impact"
                title="Key Achievements"
              />

              <ul className="mt-8 space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <Award className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground">{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={womenLeadership}
                alt="Cynthia at a leadership summit"
                className="rounded-lg shadow-medium"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24">
        <div className="container-narrow">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-3xl md:text-4xl font-serif text-foreground leading-relaxed italic">
              "The men in the senate need to understand that we are no longer in those ages 
              where women who face any level of oppression will sit back and not fight back. 
              Nigerian women are now more informed about their rights."
            </p>
            <footer className="mt-8">
              <p className="text-lg font-medium text-foreground">Cynthia Mbamalu</p>
              <p className="text-muted-foreground">Speaking on News Central TV</p>
            </footer>
          </motion.blockquote>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
