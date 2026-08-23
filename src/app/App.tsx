import React from "react";

export default function App() {
  return (
    <>
      <main id="notice" className="construction-shell">
        <header className="construction-header" aria-label="Site identity">
          <p className="identity">Qinisile Gracious Mkhonto</p>
          <p className="place">South Africa · 2026</p>
        </header>

        <section className="construction-message" aria-labelledby="construction-title">
          <p className="eyebrow">Divergent Visual &amp; Communication Systems</p>
          <h1 id="construction-title">
            Portfolio
            <span>under construction.</span>
          </h1>
          <p className="statement">
            A new presentation of the practice is being reviewed, refined and rebuilt for a
            controlled release. Previous portfolio materials are no longer publicly available.
          </p>
        </section>

        <footer className="construction-footer">
          <p>Research · Visual Communication · Systems</p>
          <p className="status"><span aria-hidden="true" /> In development</p>
        </footer>
      </main>

      <style>{`
        :root {
          color-scheme: dark;
          font-family: Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
          background: #11100e;
          color: #f1ede4;
          font-synthesis: none;
          text-rendering: optimizeLegibility;
        }

        * {
          box-sizing: border-box;
        }

        html {
          min-width: 320px;
          min-height: 100%;
          background: #11100e;
        }

        body {
          min-width: 320px;
          min-height: 100vh;
          margin: 0;
          background:
            radial-gradient(circle at 76% 18%, rgba(177, 142, 83, 0.12), transparent 31rem),
            #11100e;
        }

        #root {
          min-height: 100vh;
        }

        .skip-link {
          position: fixed;
          top: 1rem;
          left: 1rem;
          z-index: 10;
          padding: 0.75rem 1rem;
          color: #11100e;
          background: #f1ede4;
          font-size: 0.75rem;
          font-weight: 700;
          text-decoration: none;
          transform: translateY(-200%);
          transition: transform 160ms ease;
        }

        .skip-link:focus {
          transform: translateY(0);
        }

        .construction-shell {
          position: relative;
          display: grid;
          grid-template-rows: auto 1fr auto;
          min-height: 100svh;
          padding: clamp(1.5rem, 4vw, 3.75rem);
          overflow: hidden;
          isolation: isolate;
        }

        .construction-shell::before {
          content: "";
          position: absolute;
          inset: clamp(0.75rem, 2vw, 1.5rem);
          z-index: -1;
          border: 1px solid rgba(224, 210, 181, 0.18);
          pointer-events: none;
        }

        .construction-shell::after {
          content: "";
          position: absolute;
          right: -12rem;
          bottom: -16rem;
          z-index: -2;
          width: 38rem;
          height: 38rem;
          border: 1px solid rgba(177, 142, 83, 0.2);
          border-radius: 50%;
          box-shadow: 0 0 0 7rem rgba(177, 142, 83, 0.025);
          pointer-events: none;
        }

        .construction-header,
        .construction-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          color: rgba(241, 237, 228, 0.62);
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          line-height: 1.4;
          text-transform: uppercase;
        }

        .construction-header p,
        .construction-footer p {
          margin: 0;
        }

        .identity {
          color: #f1ede4;
        }

        .construction-message {
          align-self: center;
          width: min(100%, 72rem);
          padding: clamp(4rem, 10vh, 8rem) clamp(0rem, 5vw, 5rem);
        }

        .eyebrow {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin: 0 0 1.75rem;
          color: #c5a367;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          line-height: 1.5;
          text-transform: uppercase;
        }

        .eyebrow::before {
          content: "";
          width: 2.75rem;
          height: 1px;
          background: currentColor;
        }

        h1 {
          max-width: 12ch;
          margin: 0;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(4rem, 11vw, 10rem);
          font-weight: 450;
          letter-spacing: -0.065em;
          line-height: 0.82;
        }

        h1 span {
          display: block;
          margin-left: clamp(0rem, 7vw, 7rem);
          color: transparent;
          -webkit-text-stroke: 1px rgba(241, 237, 228, 0.5);
        }

        .statement {
          max-width: 42rem;
          margin: clamp(2.5rem, 5vw, 4rem) 0 0 clamp(0rem, 7vw, 7rem);
          color: rgba(241, 237, 228, 0.7);
          font-size: clamp(1rem, 1.6vw, 1.25rem);
          line-height: 1.65;
        }

        .status {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .status span {
          width: 0.45rem;
          height: 0.45rem;
          border-radius: 50%;
          background: #c5a367;
          box-shadow: 0 0 0 0.25rem rgba(197, 163, 103, 0.12);
        }

        @media (max-width: 640px) {
          .construction-shell {
            padding: 1.5rem;
          }

          .construction-shell::before {
            inset: 0.75rem;
          }

          .construction-header,
          .construction-footer {
            align-items: flex-start;
            flex-direction: column;
            gap: 0.6rem;
          }

          .construction-message {
            padding: 5rem 0;
          }

          h1 {
            font-size: clamp(3.75rem, 20vw, 6rem);
          }

          h1 span,
          .statement {
            margin-left: 0;
          }

          h1 span {
            margin-top: 0.18em;
          }

          .construction-footer {
            padding-right: 1rem;
          }
        }

        @media (prefers-reduced-motion: no-preference) {
          .construction-message {
            animation: reveal 900ms cubic-bezier(0.22, 1, 0.36, 1) both;
          }

          @keyframes reveal {
            from { opacity: 0; transform: translateY(1.25rem); }
            to { opacity: 1; transform: translateY(0); }
          }
        }
      `}</style>
    </>
  );
}
