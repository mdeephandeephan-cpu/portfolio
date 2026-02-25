interface Props {
  title: string;
  subtitle: string;
}

const SectionHeading = ({ title, subtitle }: Props) => (
  <div className="text-center mb-12">
    <p className="text-sm font-mono text-primary tracking-widest uppercase mb-2">
      {subtitle}
    </p>
    <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
  </div>
);

export default SectionHeading;
