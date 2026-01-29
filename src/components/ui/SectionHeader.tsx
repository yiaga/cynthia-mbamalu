import { motion } from "framer-motion";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeader = ({ label, title, description, centered = false, light = false }: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`space-y-4 ${centered ? "text-center" : ""}`}
    >
      {label && (
        <span className={`inline-block text-sm font-medium tracking-widest uppercase ${light ? "text-accent" : "text-accent"}`}>
          {label}
        </span>
      )}
      <h2 className={light ? "text-primary-foreground" : "text-foreground"}>
        {title}
      </h2>
      {description && (
        <p className={`max-w-2xl text-lg leading-relaxed ${centered ? "mx-auto" : ""} ${light ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
      <div className={`section-divider ${centered ? "mx-auto" : ""}`} />
    </motion.div>
  );
};

export default SectionHeader;
