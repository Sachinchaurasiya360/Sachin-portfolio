import { useEffect, useState } from "react";
import { links, profile } from "../content";

function useLocalTime(timeZone: string) {
  const format = () =>
    new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone }).format(new Date());
  const [time, setTime] = useState(format);

  useEffect(() => {
    const id = window.setInterval(() => setTime(format()), 30_000);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeZone]);

  return time;
}

const elsewhere = [
  { label: "GitHub", href: links.github },
  { label: "LinkedIn", href: links.linkedin },
  { label: "X", href: links.twitter },
  { label: "Medium", href: links.writing },
];

export default function Contact() {
  const time = useLocalTime(profile.timezone);

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="grid">
          <p className="eyebrow">
            <span className="eyebrow-index">08</span>
            Contact
          </p>
          <div className="contact-body">
            <h2>Have something worth building? Let's talk.</h2>
            <p className="section-lede">
              I am open to engineering roles, freelance work, and interesting collaborations. The fastest way to
              reach me is email. I reply within a day.
            </p>
            <a href={links.email} className="contact-email">
              {profile.email}
            </a>

            <div className="contact-meta grid">
              <div>
                <h3 className="mono">Prefer to talk</h3>
                <a href={links.call} target="_blank" rel="noopener noreferrer" className="link">
                  Book a 30-minute call <span aria-hidden="true">↗</span>
                </a>
              </div>
              <div>
                <h3 className="mono">Elsewhere</h3>
                <ul className="inline-list">
                  {elsewhere.map((e) => (
                    <li key={e.label}>
                      <a href={e.href} target="_blank" rel="noopener noreferrer" className="link link-quiet">
                        {e.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mono">Local time</h3>
                <p>
                  {time} in {profile.city}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
