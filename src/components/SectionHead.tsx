type Props = {
  index: string;
  label: string;
  title: string;
  lede?: string;
};

export default function SectionHead({ index, label, title, lede }: Props) {
  return (
    <header className="section-head grid">
      <p className="eyebrow">
        <span className="eyebrow-index">{index}</span>
        {label}
      </p>
      <div className="section-head-body">
        <h2>{title}</h2>
        {lede && <p className="section-lede">{lede}</p>}
      </div>
    </header>
  );
}
