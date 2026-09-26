import Link from "next/link";
import Tx from "./Tx";
import { Icon } from "./Marks";
import { practiceAreas } from "@/lib/ui";
import { hasWhatsapp, whatsappLink } from "@/lib/site";

const bnNum = ["১", "২", "৩", "৪", "৫", "৬", "৭", "৮"];

export default function ServicesView() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="kicker light">
            <Tx en="Practice areas" bn="প্র্যাকটিস এরিয়া" />
          </p>
          <h1>
            <Tx
              en="What this chamber takes on — and how each matter is run."
              bn="এই চেম্বার যেসব মামলা নেয় — আর প্রতিটা মামলা কীভাবে চলে।"
            />
          </h1>
          <p className="page-dek">
            <Tx
              en="Six practice areas, described plainly: what is covered, what the first step looks like, and when to act. If your matter sits between two of these, ask — the answer is often 'yes, and here is how'."
              bn="ছয়টা প্র্যাকটিস এরিয়া, সোজাসাপ্টা বর্ণনায় — কী কী ধরা আছে, প্রথম ধাপ কেমন, আর কখন নড়তে হবে। আপনার বিষয়টা দুটোর মাঝামাঝি হলে জিজ্ঞেস করুন — উত্তর প্রায়ই 'হ্যাঁ, আর এভাবে'।"
            />
          </p>
          <div className="hero-actions">
            <Link href="/start" className="btn gold big">
              <Tx en="Request consultation" bn="পরামর্শের অনুরোধ" />
              <Icon name="arrow" size={18} />
            </Link>
            {hasWhatsapp() && (
              <a className="btn ghost-light big" href={whatsappLink()} target="_blank" rel="noreferrer">
                <Icon name="whatsapp" size={19} />
                WhatsApp
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="section service-list">
        <div className="wrap">
          {practiceAreas.map((a, i) => (
            <article className={`service-row ${i % 2 ? "flip" : ""}`} id={a.id} key={a.id}>
              <div className="service-side">
                <span className="service-num">০{(i + 1).toString()}</span>
                <div className="area-icon big">
                  <Icon name={a.icon} size={30} />
                </div>
              </div>
              <div className="service-body">
                <h2>
                  <Tx en={a.title.en} bn={a.title.bn} />
                </h2>
                <p className="service-long">
                  <Tx en={a.long.en} bn={a.long.bn} />
                </p>
                <ul className="service-points">
                  {a.points.map((p) => (
                    <li key={p.en}>
                      <Icon name="check" size={14} />
                      <Tx en={p.en} bn={p.bn} />
                    </li>
                  ))}
                </ul>
                <Link href={`/start?matter=${a.id}`} className="btn ghost small">
                  <Tx en="Discuss this matter" bn="এই বিষয়ে কথা বলি" />
                  <Icon name="arrow" size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
