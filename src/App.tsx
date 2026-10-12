import Header from "./components/Header";
import Footer from "./components/Footer";
import heroArrest from "./assets/hero-arrest.jpg";
import {
  article,
  bodySections,
  keyFacts,
  protectionTips,
  quotes,
  relatedStories,
  tickerItems,
  timeline,
} from "./data/article";

export default function App() {
  const doubledTicker = [...tickerItems, ...tickerItems];

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-red-600 selection:text-white">
      <Header />

      {/* Breaking marquee */}
      <div className="border-b border-black bg-red-600 text-white">
        <div className="mx-auto flex max-w-7xl items-stretch">
          <div className="flex shrink-0 items-center gap-2 bg-black px-4 py-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-600 live-glow" />
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.35em]">
              Breaking
            </span>
          </div>
          <div className="relative flex-1 overflow-hidden py-2">
            <div className="animate-marquee flex w-max gap-12 whitespace-nowrap text-xs font-bold uppercase tracking-widest">
              {doubledTicker.map((item, i) => (
                <span key={`${item}-${i}`} className="flex items-center gap-12">
                  <span>{item}</span>
                  <span className="text-white/50">//</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <main>
        {/* Hero */}
        <section id="report" className="border-b-8 border-black">
          <div className="mx-auto max-w-7xl px-4 py-8 md:py-12">
            <div className="mb-4 flex flex-wrap items-center gap-3 text-[10px] font-black uppercase tracking-[0.35em]">
              <span className="bg-red-600 px-2 py-1 text-white">{article.kicker}</span>
              <span className="text-zinc-500">{article.section}</span>
              <span className="text-zinc-300">|</span>
              <span className="text-zinc-500">{article.location}</span>
              <span className="text-zinc-300">|</span>
              <span className="text-zinc-500">{article.readTime}</span>
            </div>

            <h1 className="max-w-5xl text-4xl font-black uppercase leading-[0.95] tracking-tighter text-zinc-900 md:text-6xl lg:text-7xl">
              {article.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg font-medium leading-relaxed text-zinc-600 md:text-2xl">
              {article.dek}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-t-4 border-black pt-4 text-xs font-bold uppercase tracking-widest text-zinc-600">
              <p>
                By <span className="text-zinc-900">{article.byline}</span>
              </p>
              <span className="text-zinc-300">|</span>
              <p>Published {article.published}</p>
              <span className="text-zinc-300">|</span>
              <p>Updated {article.updated}</p>
            </div>

            {/* Hero media */}
            <div className="relative mt-8 overflow-hidden border-8 border-black bg-zinc-900">
              <div className="relative aspect-video">
                <img
                  src={heroArrest}
                  alt="Police officers arresting a man in a business suit"
                  className="h-full w-full object-cover object-[center_20%] opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="scanlines absolute inset-0 opacity-40" />
                <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-2 p-4 md:flex-row md:items-end md:justify-between md:p-6">
                  <p className="max-w-2xl text-sm font-medium text-white md:text-base">
                    {article.heroCaption}
                  </p>
                  <div className="flex items-center gap-2 self-start bg-red-600 px-3 py-1 text-[10px] font-black uppercase tracking-[0.35em] text-white">
                    <span className="h-2 w-2 rounded-full bg-white live-glow" />
                    Live investigation
                  </div>
                </div>
              </div>
            </div>

            {/* Stat strip */}
            <div className="mt-8 grid grid-cols-2 border-4 border-black md:grid-cols-4">
              {[
                { k: "Losses", v: "$1.3B+" },
                { k: "Firm", v: "Edward Jones" },
                { k: "Under probe", v: "Beau Wilson" },
                { k: "Action", v: "File w/ FTC" },
              ].map((stat, i) => (
                <div
                  key={stat.k}
                  className={`bg-white p-4 ${i % 2 === 1 ? "bg-zinc-100" : ""} ${
                    i < 3 ? "border-r-0 border-black md:border-r-4" : ""
                  } ${i < 2 ? "border-b-4 border-black md:border-b-0" : ""} border-black`}
                >
                  <p className="text-[10px] font-black uppercase tracking-[0.35em] text-red-600">
                    {stat.k}
                  </p>
                  <p className="mt-1 text-xl font-black uppercase tracking-tighter md:text-2xl">
                    {stat.v}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Body grid */}
        <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 lg:grid-cols-3">
          <article className="lg:col-span-2">
            <div className="mb-10 border-l-8 border-red-600 bg-zinc-100 p-6">
              <p className="text-[10px] font-black uppercase tracking-[0.35em] text-red-600">
                Editor’s note
              </p>
              <p className="mt-2 text-sm font-medium leading-relaxed text-zinc-700 md:text-base">
                Developing report on alleged compromises involving{" "}
                <strong>Edward Jones</strong> in <strong>Louisiana</strong>,
                Iranian-linked hackers, and elderly U.S. targets. Advisor{" "}
                <strong>Beau Wilson</strong> is under investigation. Activity
                began last month. Reported losses:
                upwards of <strong>$1.3 billion</strong>. Affected branches are
                under heavy FTC and IRS audit. If you are facing something
                similar, do not be afraid, refrain from contacting advisors, and
                file with the FTC at ReportFraud.ftc.gov.
              </p>
            </div>

            <div className="space-y-12">
              {bodySections.map((section, idx) => (
                <section key={section.heading} id={idx === 0 ? "story" : undefined}>
                  <h2 className="border-b-4 border-black pb-3 text-2xl font-black uppercase tracking-tighter md:text-3xl">
                    {section.heading}
                  </h2>
                  <div className="mt-6 space-y-5 text-base leading-relaxed text-zinc-700 md:text-lg">
                    {section.paragraphs.map((paragraph, pIdx) => (
                      <p
                        key={paragraph.slice(0, 40)}
                        className={idx === 0 && pIdx === 0 ? "drop-cap" : ""}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* Quotes */}
            <div className="mt-12 space-y-6">
              {quotes.map((quote) => (
                <blockquote
                  key={quote.text.slice(0, 32)}
                  className="border-l-8 border-red-600 bg-zinc-100 p-6 md:p-8"
                >
                  <p className="text-xl font-black leading-tight tracking-tight text-zinc-900 md:text-2xl">
                    “{quote.text}”
                  </p>
                  <footer className="mt-4 text-[10px] font-black uppercase tracking-[0.35em] text-zinc-500">
                    — {quote.source}
                  </footer>
                </blockquote>
              ))}
            </div>

            {/* Timeline */}
            <section id="timeline" className="mt-16">
              <div className="mb-8 flex items-end justify-between gap-4 border-b-8 border-black pb-4">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.35em] text-red-600">
                    Chronology
                  </p>
                  <h2 className="mt-2 text-3xl font-black uppercase tracking-tighter md:text-4xl">
                    How the Louisiana campaign unfolded
                  </h2>
                </div>
              </div>
              <ol className="relative space-y-0 border-l-4 border-black pl-8">
                {timeline.map((item, index) => (
                  <li key={item.title} className="relative pb-10 last:pb-0">
                    <span className="absolute -left-[42px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-4 border-black bg-red-600" />
                    <p className="text-[10px] font-black uppercase tracking-[0.35em] text-red-600">
                      {item.date}
                    </p>
                    <h3 className="mt-1 text-xl font-black uppercase tracking-tighter">
                      {index + 1}. {item.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-base leading-relaxed text-zinc-600">
                      {item.body}
                    </p>
                  </li>
                ))}
              </ol>
            </section>

            {/* Protect */}
            <section id="protect" className="mt-16">
              <div className="overflow-hidden border-8 border-black bg-black text-white">
                <div className="grid lg:grid-cols-2">
                  <div className="border-b-8 border-white/10 p-8 lg:border-b-0 lg:border-r-8">
                    <p className="text-[10px] font-black uppercase tracking-[0.35em] text-red-500">
                      For seniors & families
                    </p>
                    <h2 className="mt-3 text-3xl font-black uppercase leading-none tracking-tighter">
                      Facing something similar in Louisiana?
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
                      Do not be afraid. Compromised Edward Jones branches are
                      under heavy FTC and IRS audit. Advisor Beau Wilson is under
                      investigation. Losses are upwards of $1.3 billion. Refrain
                      from contacting advisors — file a report with the FTC
                      instead.
                    </p>
                    <div className="relative mt-6 aspect-video overflow-hidden border-4 border-zinc-700">
                      <img
                        src="https://images.pexels.com/photos/8370962/pexels-photo-8370962.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900"
                        alt="Investigators reviewing documents"
                        className="h-full w-full object-cover opacity-90"
                      />
                      <div className="scanlines absolute inset-0 opacity-30" />
                    </div>
                  </div>
                  <div id="tips" className="p-8">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.35em] text-zinc-400">
                      Safety checklist
                    </h3>
                    <ul className="mt-5 space-y-4">
                      {protectionTips.map((tip, i) => (
                        <li
                          key={tip.title}
                          className="flex gap-4 border border-zinc-800 bg-zinc-900 p-4"
                        >
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-red-600 text-sm font-black">
                            {i + 1}
                          </span>
                          <div>
                            <p className="font-black uppercase tracking-tight text-white">
                              {tip.title}
                            </p>
                            <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                              {tip.text}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="https://reportfraud.ftc.gov/"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 flex w-full items-center justify-center bg-red-600 px-5 py-4 text-xs font-black uppercase tracking-[0.35em] text-white transition hover:bg-red-700"
                    >
                      File FTC report →
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Bottom line */}
            <section className="mt-16 border-4 border-black p-6 md:p-10">
              <p className="text-[10px] font-black uppercase tracking-[0.35em] text-red-600">
                The bottom line
              </p>
              <h2 className="mt-2 text-2xl font-black uppercase tracking-tighter md:text-3xl">
                $1.3B. Louisiana. Report to the FTC.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-700 md:text-lg">
                Iranian-linked hackers, Edward Jones in Louisiana, and a
                deliberate focus on elderly Americans — with advisor Beau Wilson
                under investigation, the campaign underway since last month, and
                losses climbing upwards of $1.3 billion. Those branches are under
                heavy FTC and IRS audit. If you are facing something similar, do
                not be afraid. Refrain from contacting advisors. File a report at
                the FTC instead.
              </p>
              <a
                href="https://reportfraud.ftc.gov/"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex bg-black px-5 py-3 text-xs font-black uppercase tracking-[0.35em] text-white transition hover:bg-red-600"
              >
                ReportFraud.ftc.gov
              </a>
            </section>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start lg:col-span-1">
            <div className="border-4 border-black">
              <div className="bg-black px-4 py-3">
                <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white">
                  At a glance
                </p>
              </div>
              <dl className="divide-y divide-zinc-200">
                {keyFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="grid grid-cols-[0.9fr_1.1fr] gap-2 px-4 py-3"
                  >
                    <dt className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
                      {fact.label}
                    </dt>
                    <dd className="text-sm font-bold leading-snug text-zinc-900">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="border-4 border-black bg-red-600 p-5 text-white">
              <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/80">
                Immediate guidance
              </p>
              <p className="mt-2 text-2xl font-black uppercase leading-none tracking-tighter">
                Do not be afraid. Skip advisors. File with the FTC.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/90">
                Louisiana Edward Jones branches are under heavy FTC and IRS
                investigation. Advisor Beau Wilson is under probe after losses
                upwards of $1.3 billion.
              </p>
              <a
                href="https://reportfraud.ftc.gov/"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex bg-black px-4 py-2 text-[10px] font-black uppercase tracking-[0.35em] text-white transition hover:bg-zinc-900"
              >
                ReportFraud.ftc.gov
              </a>
            </div>

            <div className="overflow-hidden border-4 border-black">
              <img
                src="https://images.pexels.com/photos/6266311/pexels-photo-6266311.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800"
                alt="Fraud awareness"
                className="aspect-video w-full object-cover"
              />
              <div className="p-4">
                <p className="text-[10px] font-black uppercase tracking-[0.35em] text-red-600">
                  Why it matters
                </p>
                <p className="mt-2 text-lg font-black uppercase leading-tight tracking-tight">
                  Local branch trust turned into a $1.3B emergency for seniors.
                </p>
              </div>
            </div>

            <div className="border-4 border-black">
              <div className="border-b-4 border-black bg-zinc-100 px-4 py-3">
                <p className="text-[10px] font-black uppercase tracking-[0.35em] text-zinc-500">
                  Related coverage
                </p>
              </div>
              <ul className="divide-y divide-zinc-200">
                {relatedStories.map((story) => (
                  <li key={story.title} className="group cursor-pointer p-4 transition hover:bg-zinc-50">
                    <p className="text-[10px] font-black uppercase tracking-[0.35em] text-red-600">
                      {story.tag}
                    </p>
                    <p className="mt-1 font-bold leading-snug text-zinc-900 group-hover:underline">
                      {story.title}
                    </p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                      {story.time} read
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-4 border-dashed border-zinc-400 bg-zinc-100 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.35em] text-zinc-500">
                Scope snapshot
              </p>
              <ul className="mt-3 space-y-2 text-sm font-bold text-zinc-800">
                {[
                  "Edward Jones",
                  "Louisiana branches",
                  "Beau Wilson under investigation",
                  "Iranian-linked hackers",
                  "Elderly Americans targeted",
                  "Losses upwards of $1.3B",
                  "FTC & IRS audits ongoing",
                  "Report to FTC, not advisors",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 bg-red-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </section>

        {/* Newsletter */}
        <section className="border-y-8 border-black bg-zinc-100">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-10 md:flex-row md:items-center">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.35em] text-red-600">
                CWN alerts
              </p>
              <h2 className="mt-2 text-3xl font-black uppercase tracking-tighter text-zinc-900">
                Follow the Edward Jones investigation
              </h2>
              <p className="mt-2 max-w-xl text-sm font-medium text-zinc-600">
                Get updates when the FTC, IRS, or investigators issue new guidance
                for affected clients in Louisiana.
              </p>
            </div>
            <form
              className="flex w-full max-w-md flex-col gap-2 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Email address"
                className="w-full border-4 border-black bg-white px-4 py-3 text-sm font-medium outline-none"
              />
              <button
                type="submit"
                className="bg-red-600 px-5 py-3 text-xs font-black uppercase tracking-[0.35em] text-white transition hover:bg-black"
              >
                Notify me
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
