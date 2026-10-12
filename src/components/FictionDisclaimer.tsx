/**
 * Fictional-content notice. Required for this project: the page presents
 * fabricated events, figures and allegations about real organisations and
 * individuals. This banner must remain on the page while such content is shown.
 */
export default function FictionDisclaimer() {
  return (
    <div
      role="note"
      className="border-b-4 border-amber-400 bg-amber-100 px-4 py-3 text-amber-950"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-1 md:flex-row md:items-center md:gap-3">
        <span className="shrink-0 bg-amber-500 px-2 py-0.5 text-[10px] font-black uppercase tracking-[0.25em] text-black">
          Fiction
        </span>
        <p className="text-xs leading-relaxed font-medium md:text-sm">
          This page is a <strong>fictional sample</strong> used to demonstrate a
          news-template layout and content management system. The organisations,
          individuals, figures and events described here are invented and are not
          real. Any resemblance to actual people, companies or events is
          coincidental. Do not rely on this page for financial, legal or safety
          decisions — consult a licensed professional or{" "}
          <a
            href="https://reportfraud.ftc.gov/"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            reportfraud.ftc.gov
          </a>{" "}
          if you have a genuine concern.
        </p>
      </div>
    </div>
  );
}