
export default function App() {

  return (
    <div
      className="min-h-screen grid-bg relative flex flex-col items-center justify-center px-6 py-12"
      style={{ background: '#1A1A1A' }}
    >
      {/* Radial glow behind content */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(181,228,42,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: 'linear-gradient(90deg, transparent, #B5E42A, transparent)' }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl w-full gap-10">

        {/* Logo */}
        <div className="animate-slide-up">
          <img
            src="/src/assets/logo.png"
            alt="110 Events Logo"
            style={{ width: 'clamp(100px, 22vw, 160px)', height: 'auto' }}
          />
        </div>

        {/* Headline */}
        <div className="animate-slide-up-delay-1 flex flex-col items-center gap-4">
          <div
            style={{
              background: 'rgba(181,228,42,0.1)',
              border: '1px solid rgba(181,228,42,0.25)',
              borderRadius: '100px',
              padding: '6px 20px',
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 600,
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              color: '#B5E42A',
              textTransform: 'uppercase',
            }}
          >
            www.110uae.me
          </div>

          <h1
            className="glow-text"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(2.8rem, 10vw, 6rem)',
              lineHeight: 0.95,
              color: '#B5E42A',
              textTransform: 'uppercase',
              letterSpacing: '-0.01em',
            }}
          >
            We Are<br />Rebranding
          </h1>

          <p
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(1.4rem, 5vw, 2.2rem)',
              color: '#ffffff',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
            }}
          >
            Coming Soon
          </p>

          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 400,
              fontSize: 'clamp(0.9rem, 2.5vw, 1.05rem)',
              color: 'rgba(255,255,255,0.5)',
              maxWidth: '480px',
              lineHeight: 1.6,
            }}
          >
            Something bold is on the way. We're upgrading our identity to match the energy we bring to every event. Stay tuned.
          </p>
        </div>

        {/* Divider */}
        <div
          className="animate-slide-up-delay-3 w-full"
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(181,228,42,0.3), transparent)',
          }}
        />

        {/* Contact */}
        <div
          className="animate-slide-up-delay-3 flex flex-col items-center gap-2"
          style={{
            fontFamily: "'Barlow', sans-serif",
            fontSize: '0.85rem',
            color: 'rgba(255,255,255,0.4)',
          }}
        >
          <span>In the meantime, reach us at</span>
          <a
            href="mailto:info@110uae.com"
            style={{
              color: '#B5E42A',
              textDecoration: 'none',
              fontWeight: 600,
              letterSpacing: '0.05em',
            }}
            onMouseEnter={e => (e.currentTarget.style.textDecoration = 'underline')}
            onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}
          >
            info@110uae.com
          </a>
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{ background: 'linear-gradient(90deg, transparent, #B5E42A, transparent)' }}
      />
    </div>
  )
}
