export default function Marquee() {
  const text = "WELCOME HOME";
  const separator = " \u2022 ";
  const repeated = Array(12).fill(text + separator).join("");

  return (
    <div
      style={{
        backgroundColor: "var(--color-navy)",
        overflow: "hidden",
        padding: "1rem 0",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "marquee-scroll 30s linear infinite",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.125rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase" as const,
            color: "var(--color-gold)",
            whiteSpace: "nowrap",
            paddingRight: "2rem",
          }}
        >
          {repeated}
        </span>
        <span
          aria-hidden="true"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.125rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase" as const,
            color: "var(--color-gold)",
            whiteSpace: "nowrap",
            paddingRight: "2rem",
          }}
        >
          {repeated}
        </span>
      </div>
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
