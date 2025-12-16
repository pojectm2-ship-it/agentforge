export default function HomePage() {
  const pageStyles: React.CSSProperties = {
    background:
      "radial-gradient(circle at top, #1f2937 0, #020617 55%, #000000 100%)",
    minHeight: "100vh",
    color: "white",
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  };

  const containerStyles: React.CSSProperties = {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "3rem 1.5rem 4rem",
  };

  const topPillStyles: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: ".6rem",
    padding: ".45rem .85rem",
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,.12)",
    background: "rgba(255,255,255,.04)",
    backdropFilter: "blur(10px)",
    fontSize: ".9rem",
    color: "rgba(255,255,255,.85)",
  };

  const heroStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: "3rem",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "2.25rem",
  };

  const leftColStyles: React.CSSProperties = {
    flex: 1,
    minWidth: 0,
  };

  const rightColStyles: React.CSSProperties = {
    width: "420px",
    maxWidth: "100%",
    borderRadius: "22px",
    border: "1px solid rgba(255,255,255,.10)",
    background: "rgba(255,255,255,.04)",
    backdropFilter: "blur(12px)",
    padding: "1.25rem 1.25rem 1.1rem",
    boxShadow: "0 20px 60px rgba(0,0,0,.45)",
  };

  const titleStyles: React.CSSProperties = {
    fontSize: "clamp(2.6rem, 4.6vw, 4.2rem)",
    lineHeight: 1.05,
    margin: "1rem 0 1rem",
    letterSpacing: "-0.03em",
    fontWeight: 800,
  };

  const gradientWordStyles: React.CSSProperties = {
    backgroundImage: "linear-gradient(90deg, #22d3ee, #3b82f6, #a78bfa)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  };

  const subtitleStyles: React.CSSProperties = {
    fontSize: "1.15rem",
    lineHeight: 1.6,
    color: "rgba(255,255,255,.72)",
    maxWidth: "54ch",
    margin: "0 0 1.6rem",
  };

  const ctaRowStyles: React.CSSProperties = {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: "1.8rem",
  };

  const primaryButtonStyles: React.CSSProperties = {
    padding: ".95rem 1.25rem",
    borderRadius: "14px",
    border: "none",
    cursor: "pointer",
    fontWeight: 700,
    color: "#081018",
    backgroundImage: "linear-gradient(90deg, #22d3ee, #3b82f6, #a78bfa)",
    boxShadow: "0 12px 30px rgba(59,130,246,.18)",
  };

  const secondaryLinkStyles: React.CSSProperties = {
    color: "rgba(255,255,255,.85)",
    textDecoration: "underline",
    cursor: "pointer",
    fontWeight: 600,
  };

  const statsRowStyles: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "1.2rem",
    marginTop: "1.6rem",
  };

  const statItemStyles: React.CSSProperties = {
    borderRadius: "18px",
    border: "1px solid rgba(255,255,255,.10)",
    background: "rgba(255,255,255,.03)",
    padding: "1rem 1rem .95rem",
  };

  const statNumberStyles: React.CSSProperties = {
    fontSize: "1.15rem",
    fontWeight: 800,
    marginBottom: ".25rem",
  };

  const statLabelStyles: React.CSSProperties = {
    color: "rgba(255,255,255,.70)",
    fontSize: ".95rem",
    lineHeight: 1.35,
  };

  const sectionStyles: React.CSSProperties = {
    marginTop: "3.2rem",
    paddingTop: "1.6rem",
    borderTop: "1px solid rgba(255,255,255,.08)",
  };

  const sectionTitleStyles: React.CSSProperties = {
    fontSize: "1.4rem",
    fontWeight: 800,
    margin: "0 0 .65rem",
    letterSpacing: "-0.01em",
  };

  const sectionSubtitleStyles: React.CSSProperties = {
    color: "rgba(255,255,255,.72)",
    lineHeight: 1.6,
    margin: "0 0 1.25rem",
    maxWidth: "80ch",
  };

  const gridStyles: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "1.2rem",
  };

  const cardStyles: React.CSSProperties = {
    borderRadius: "18px",
    border: "1px solid rgba(255,255,255,.10)",
    background: "rgba(255,255,255,.03)",
    padding: "1.05rem 1.05rem 1rem",
  };

  const cardTitleStyles: React.CSSProperties = {
    fontWeight: 800,
    margin: "0 0 .35rem",
  };

  const cardTextStyles: React.CSSProperties = {
    color: "rgba(255,255,255,.72)",
    lineHeight: 1.55,
    margin: 0,
  };

  const stepStyles: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "80px 1fr",
    gap: "1rem",
    padding: "1rem",
    borderRadius: "18px",
    border: "1px solid rgba(255,255,255,.10)",
    background: "rgba(255,255,255,.03)",
    marginBottom: "1rem",
  };

  const stepBadgeStyles: React.CSSProperties = {
    width: "80px",
    height: "80px",
    borderRadius: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 900,
    background: "rgba(255,255,255,.06)",
    border: "1px solid rgba(255,255,255,.10)",
    color: "rgba(255,255,255,.90)",
  };

  const miniPillStyles: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    padding: ".35rem .65rem",
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,.12)",
    background: "rgba(255,255,255,.04)",
    color: "rgba(255,255,255,.85)",
    fontSize: ".85rem",
    fontWeight: 650,
  };

  const listStyles: React.CSSProperties = {
    margin: ".75rem 0 0",
    paddingLeft: "1.15rem",
    color: "rgba(255,255,255,.75)",
    lineHeight: 1.55,
  };

  const footerCtaStyles: React.CSSProperties = {
    marginTop: "3.2rem",
    borderRadius: "22px",
    border: "1px solid rgba(255,255,255,.10)",
    background:
      "linear-gradient(135deg, rgba(34,211,238,.10), rgba(59,130,246,.08), rgba(167,139,250,.10))",
    padding: "1.6rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem",
    flexWrap: "wrap",
  };

  const footerCtaTitle: React.CSSProperties = {
    fontSize: "1.25rem",
    fontWeight: 900,
    margin: 0,
    letterSpacing: "-0.01em",
  };

  const footerCtaText: React.CSSProperties = {
    margin: ".35rem 0 0",
    color: "rgba(255,255,255,.78)",
    lineHeight: 1.5,
    maxWidth: "70ch",
  };

  return (
    <div style={pageStyles}>
      <div style={containerStyles}>
        <div style={topPillStyles}>
          ⚡ <strong style={{ fontWeight: 800 }}>AI WORKFORCE</strong>{" "}
          <span style={{ opacity: 0.75 }}>• replace work • scale revenue</span>
        </div>

        <div style={heroStyles}>
          <div style={leftColStyles}>
            <h1 style={titleStyles}>
              Your AI Workforce.{" "}
              <span style={gradientWordStyles}>Built to scale</span> your business.
            </h1>

            <p style={subtitleStyles}>
              We build autonomous AI agents that take over repetitive workflows,
              capture leads, and ship outcomes—so your team stays lean while revenue
              scales.
            </p>

            <div style={ctaRowStyles}>
              <button style={primaryButtonStyles}>Get your AI system</button>
              <span style={secondaryLinkStyles}>See how it works →</span>
            </div>

            <div style={statsRowStyles}>
              <div style={statItemStyles}>
                <div style={statNumberStyles}>48h</div>
                <div style={statLabelStyles}>
                  first agent deployed (pilot-ready, not a prototype)
                </div>
              </div>
              <div style={statItemStyles}>
                <div style={statNumberStyles}>0 hires</div>
                <div style={statLabelStyles}>
                  automate without adding headcount or complex dev cycles
                </div>
              </div>
              <div style={statItemStyles}>
                <div style={statNumberStyles}>ROI-first</div>
                <div style={statLabelStyles}>
                  build only what pays back (tracked and measurable)
                </div>
              </div>
            </div>
          </div>

          <div style={rightColStyles}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ color: "rgba(255,255,255,.70)", fontWeight: 700 }}>
                Live agent preview
              </div>
              <span style={miniPillStyles}>Nova • Sales Assistant</span>
            </div>

            <div style={{ marginTop: "1rem" }}>
              <ul style={listStyles}>
                <li>
                  Define role, tone, and boundaries to match your brand and compliance.
                </li>
                <li>
                  Connect your sources: FAQs, offers, docs, product sheets, policies.
                </li>
                <li>
                  Deploy on your site as a widget or dedicated landing page.
                </li>
                <li>
                  Track leads, conversations, and performance in one dashboard.
                </li>
              </ul>
            </div>

            <div
              style={{
                marginTop: "1.15rem",
                padding: ".95rem",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,.10)",
                background: "rgba(0,0,0,.25)",
                color: "rgba(255,255,255,.78)",
                lineHeight: 1.5,
                fontSize: ".95rem",
              }}
            >
              <strong style={{ color: "rgba(255,255,255,.92)" }}>
                Outcome:
              </strong>{" "}
              higher conversion, faster response times, and consistent follow-up—24/7.
            </div>
          </div>
        </div>

        <div style={sectionStyles}>
          <h2 style={sectionTitleStyles}>What we automate</h2>
          <p style={sectionSubtitleStyles}>
            We focus on workflows that directly impact revenue and operational load.
            Start with one agent, prove ROI, then scale to a system.
          </p>

          <div style={gridStyles}>
            <div style={cardStyles}>
              <div style={cardTitleStyles}>Sales follow-up</div>
              <p style={cardTextStyles}>
                Qualify inbound leads, answer objections, book calls, and chase
                dormant opportunities automatically.
              </p>
            </div>
            <div style={cardStyles}>
              <div style={cardTitleStyles}>Customer support</div>
              <p style={cardTextStyles}>
                Deflect repetitive tickets, keep SLAs under control, and escalate
                only the cases that need humans.
              </p>
            </div>
            <div style={cardStyles}>
              <div style={cardTitleStyles}>Ops & reporting</div>
              <p style={cardTextStyles}>
                Summaries, status updates, task creation, and structured reporting
                pulled from your knowledge sources.
              </p>
            </div>
          </div>
        </div>

        <div style={sectionStyles}>
          <h2 style={sectionTitleStyles}>How it works</h2>
          <p style={sectionSubtitleStyles}>
            A simple, ROI-driven process designed to get you to a working deployment
            fast—without building a big engineering team.
          </p>

          <div style={stepStyles}>
            <div style={stepBadgeStyles}>1</div>
            <div>
              <div style={{ fontWeight: 900, marginBottom: ".25rem" }}>
                Scope the outcome
              </div>
              <div style={{ color: "rgba(255,255,255,.75)", lineHeight: 1.55 }}>
                We define the job-to-be-done, success metrics, guardrails, and the
                fastest path to measurable ROI.
              </div>
            </div>
          </div>

          <div style={stepStyles}>
            <div style={stepBadgeStyles}>2</div>
            <div>
              <div style={{ fontWeight: 900, marginBottom: ".25rem" }}>
                Connect your knowledge
              </div>
              <div style={{ color: "rgba(255,255,255,.75)", lineHeight: 1.55 }}>
                We plug in your offers, policies, FAQs, docs, and product sheets so
                the agent answers with your truth—not generic internet guesses.
              </div>
            </div>
          </div>

          <div style={stepStyles}>
            <div style={stepBadgeStyles}>3</div>
            <div>
              <div style={{ fontWeight: 900, marginBottom: ".25rem" }}>
                Deploy + track performance
              </div>
              <div style={{ color: "rgba(255,255,255,.75)", lineHeight: 1.55 }}>
                You ship it on your site. We track conversations, leads, and
                conversion. Then we iterate on what moves revenue.
              </div>
            </div>
          </div>
        </div>

        <div style={footerCtaStyles}>
          <div>
            <p style={footerCtaTitle}>Ready to replace work with AI?</p>
            <p style={footerCtaText}>
              Start with one high-impact agent, prove ROI, then expand to a full AI
              workforce across sales, support, and operations.
            </p>
          </div>
          <button style={primaryButtonStyles}>Get your AI system</button>
        </div>
      </div>
    </div>
  );
}
