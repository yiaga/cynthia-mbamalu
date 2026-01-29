import { motion } from "framer-motion";
import { ExternalLink, Youtube, Newspaper, Mic, Video } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeader from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";
import podcastLogo from "@/assets/podcast-logo.jpg";

const mediaCategories = [
  { id: "all", label: "All" },
  { id: "video", label: "Video" },
  { id: "article", label: "Articles" },
  { id: "podcast", label: "Podcast" },
];

const newsItems = [
  {
    type: "video",
    title: "Youth Leadership and Change | TEDxNzaStreet",
    source: "TEDx",
    date: "2023",
    description: "Cynthia discusses the power of youth mobilization and organizing for political change in Africa.",
    link: "https://www.youtube.com/watch?v=R0Al-_SzUiE",
    featured: true,
  },
  {
    type: "article",
    title: "Breaking the Chains of Bias Against Women in Nigeria",
    source: "Legit.ng",
    date: "2024",
    description: "Op-ed discussing systemic barriers women face in Nigerian politics and pathways to gender equality.",
    link: "https://www.legit.ng/editorial/opinion/1459878-breaking-the-chains-of-bias-against-women-in-nigeria-by-cynthia-mbamalu/",
  },
  {
    type: "article",
    title: "Women: Balancing Representation Through Constitutional Reforms",
    source: "Premium Times",
    date: "2024",
    description: "Analysis of the bill to create special seats for women in legislative bodies.",
    link: "https://www.premiumtimesng.com/opinion/519428-women-balancing-representation-through-constitutional-reforms-by-cynthia-mbamalu.html",
  },
  {
    type: "video",
    title: "Ondo Election 2024: Vote Buying Allegations",
    source: "TVC News",
    date: "2024",
    description: "Preliminary assessment of the Ondo State governorship election and observations on electoral integrity.",
    link: "https://www.youtube.com/watch?v=dAefe-FiUak",
  },
  {
    type: "article",
    title: "How We Got #NotTooYoungToRun Bill to Trend and Become Law",
    source: "Punch Nigeria",
    date: "2023",
    description: "Behind-the-scenes look at the advocacy strategy that led to constitutional amendment.",
    link: "https://punchng.com/how-we-got-nottooyoungtorun-bill-to-trend-become-law-mbamalu-yiaga-africa-co-founder/",
  },
  {
    type: "video",
    title: "INEC's Proposed Electoral Reforms for 2027",
    source: "FCT Brief",
    date: "2024",
    description: "Discussion on INEC's proposed reforms and their implications for future elections.",
    link: "https://www.youtube.com/watch?v=SoqRjdMchAQ",
  },
  {
    type: "article",
    title: "Special Seats Bill: Balancing Representation Through Constitutional Reforms",
    source: "Punch Nigeria",
    date: "2024",
    description: "Advocacy for constitutional reforms to ensure gender balance in legislative representation.",
    link: "https://punchng.com/special-seats-bill-balancing-representation-through-constitutional-reforms/",
  },
  {
    type: "video",
    title: "On International Women's Day & General Elections",
    source: "Political Paradigm",
    date: "2023",
    description: "Discussion on women's participation in Nigeria's electoral process.",
    link: "https://www.youtube.com/watch?v=7kDfhZ5qWho",
  },
  {
    type: "article",
    title: "The Different Faces of Freedom as South Africans March to the Polls",
    source: "Vanguard",
    date: "2024",
    description: "Analysis of the South African elections and lessons for African democracy.",
    link: "https://www.vanguardngr.com/2024/05/different-faces-of-freedom-as-south-africans-march-to-the-polls/",
  },
  {
    type: "video",
    title: "Analysis: Conduct of Local Government Elections",
    source: "YouTube",
    date: "2024",
    description: "Expert analysis on the conduct and implications of local government elections.",
    link: "https://www.youtube.com/watch?v=qukTTMC6KEI",
  },
  {
    type: "article",
    title: "Twitter Ban: Nigeria Not Open for Investment",
    source: "Punch Nigeria",
    date: "2021",
    description: "Commentary on the implications of social media restrictions on democratic engagement.",
    link: "https://punchng.com/twitter-ban-nigeria-not-open-for-investment-yiaga-africa/",
  },
  {
    type: "video",
    title: "Nigeria's Legislators Must Carry Out Demands of the People",
    source: "Channels TV",
    date: "2023",
    description: "Discussion on legislative accountability and citizen engagement.",
    link: "https://www.youtube.com/watch?v=HT0XgeY9oPo",
  },
];

const podcastInfo = {
  title: "The Unamplified Podcast",
  description: "An innovative chatroom for diverse conversations across generations on issues of democracy and development in Africa through a gender lens.",
  vision: "Amplifying diversity of voices and transformational conversations driven by growth-mindset.",
  host: "Cynthia Mbamalu",
  coHosts: ["Kween Cy", "Andrea", "Ayomide"],
  topics: ["Politics", "Democracy", "Development", "Social Norms", "Lifestyle"],
  spotify: "https://open.spotify.com/show/1hfGyFL8v4UpKzmfBNPapI",
  youtube: "https://www.youtube.com/channel/UCS20W_AJwMatcpxXBFJTA0g",
};

const News = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case "video":
        return Video;
      case "article":
        return Newspaper;
      case "podcast":
        return Mic;
      default:
        return Newspaper;
    }
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
              News & Publications
            </span>
            <h1>Media & Commentary</h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Featured interviews, op-eds, analysis, and commentary on democracy, 
              elections, and governance across Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Podcast Feature Section */}
      <section className="py-24">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-2 text-accent">
                <Mic className="h-5 w-5" />
                <span className="font-medium tracking-widest text-sm uppercase">Featured Podcast</span>
              </div>
              
              <h2>{podcastInfo.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {podcastInfo.description}
              </p>
              
              <blockquote className="quote-accent text-foreground">
                {podcastInfo.vision}
              </blockquote>

              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">Topics covered:</p>
                <div className="flex flex-wrap gap-2">
                  {podcastInfo.topics.map((topic) => (
                    <span key={topic} className="badge-primary">{topic}</span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <a href={podcastInfo.spotify} target="_blank" rel="noopener noreferrer">
                    Listen on Spotify
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={podcastInfo.youtube} target="_blank" rel="noopener noreferrer">
                    Watch on YouTube
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-card rounded-lg p-8 shadow-medium border border-border">
                <div className="aspect-square max-w-sm mx-auto mb-6 rounded-lg overflow-hidden">
                  <img
                    src={podcastLogo}
                    alt="The Unamplified Podcast"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center space-y-2">
                  <p className="text-sm text-muted-foreground">Executive Producer & Host</p>
                  <p className="font-semibold text-lg">{podcastInfo.host}</p>
                  <p className="text-sm text-muted-foreground">
                    Co-hosts: {podcastInfo.coHosts.join(", ")}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* News & Articles Grid */}
      <section className="py-24 bg-muted">
        <div className="container-wide">
          <SectionHeader
            label="In the Media"
            title="News & Publications"
            description="Featured interviews, articles, and analysis on democracy and governance"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item, index) => {
              const IconComponent = getIcon(item.type);
              return (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`group bg-background rounded-lg p-6 shadow-soft border border-border card-hover block ${
                    item.featured ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2 py-1 rounded-full ${
                      item.type === "video" 
                        ? "bg-highlight/10 text-highlight" 
                        : item.type === "article"
                        ? "bg-primary/10 text-primary"
                        : "bg-accent/10 text-accent"
                    }`}>
                      <IconComponent className="h-3 w-3" />
                      {item.type === "video" ? "Video" : item.type === "article" ? "Article" : "Podcast"}
                    </span>
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                  </div>

                  <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-accent">{item.source}</span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Speaking & Appearances */}
      <section className="py-24">
        <div className="container-wide">
          <SectionHeader
            label="Speaking"
            title="International Appearances"
            description="Selected conferences, summits, and speaking engagements"
            centered
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { title: "TEDxNzaStreet", topic: "Youth Leadership and Change" },
              { title: "National Endowment for Democracy", topic: "Nigerian Elections & Youth Participation" },
              { title: "Cool Czechia: Young African Leaders", topic: "Mobilizing for Political Power" },
              { title: "UN SDG Roundtable", topic: "75 Years of Human Rights" },
              { title: "Advocacy and Women Parliament Summit", topic: "Women's Political Inclusion" },
              { title: "Harvard Kennedy School", topic: "Executive Leadership Program" },
            ].map((event, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 shadow-soft border border-border"
              >
                <h3 className="font-semibold mb-2">{event.title}</h3>
                <p className="text-sm text-muted-foreground">{event.topic}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default News;
