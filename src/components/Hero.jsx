import { useEffect, useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: #0d0010;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
  }

  .hero-section {
    min-height: 100vh;
    background: #0d0010;
    position: relative;
    overflow: hidden;
    font-family: 'Inter', sans-serif;
  }

  .hero-glow {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 60% 70% at 50% 30%, #4c1d95 0%, transparent 70%),
      radial-gradient(ellipse 40% 50% at 50% 10%, rgba(124,58,237,0.27) 0%, transparent 60%);
    pointer-events: none;
    z-index: 0;
  }

  /* NAV */
  .hero-nav {
    position: absolute;
    top: 0; left: 0; right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 28px 48px;
    z-index: 10;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 15px;
    font-weight: 600;
    color: #fff;
    letter-spacing: 0.5px;
  }

  .logo-icon {
    width: 28px; height: 28px;
    background: #7c3aed;
    border-radius: 6px;
    display: flex; align-items: center; justify-content: center;
    font-size: 13px; font-weight: 700; color: #fff;
  }

  .nav-links {
    display: flex;
    gap: 32px;
    list-style: none;
    font-size: 11px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: rgba(255,255,255,0.5);
  }

  .nav-links li { cursor: pointer; transition: color 0.2s; }
  .nav-links li:hover { color: #fff; }

  .time-badge {
    background: rgba(255,255,255,0.08);
    border: 0.5px solid rgba(255,255,255,0.15);
    border-radius: 20px;
    padding: 6px 14px;
    font-size: 11px;
    color: rgba(255,255,255,0.6);
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .time-dot {
    width: 6px; height: 6px;
    background: #a78bfa;
    border-radius: 50%;
  }

  /* HERO GRID */
  .hero-grid {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: end;
    position: relative;
    z-index: 2;
  }

  /* LEFT */
  .hero-left {
    padding: 0 0 100px 48px;
    display: flex;
    flex-direction: column;
  }

  .hello-tag {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 11px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: rgba(255,255,255,0.5);
    margin-top: 110px;
  }

  .hello-dot {
    width: 6px; height: 6px;
    background: #f59e0b;
    border-radius: 50%;
  }

  .touch-btn {
    width: 100px; height: 100px;
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-top: 60px;
    cursor: pointer;
    background: transparent;
    transition: border-color 0.3s;
  }

  .touch-btn:hover { border-color: rgba(255,255,255,0.5); }

  .touch-arrow {
    color: #fff;
    font-size: 20px;
    transform: rotate(-45deg);
    display: inline-block;
  }

  .spin-svg {
    position: absolute;
    top: 50%; left: 50%;
    width: 100px; height: 100px;
    transform: translate(-50%, -50%);
    animation: spin 8s linear infinite;
  }

  @keyframes spin { to { transform: translate(-50%, -50%) rotate(360deg); } }

  /* CENTER */
  .hero-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    position: relative;
  }

  .person-wrap {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  .person-frame {
    width: 300px;
    height: 500px;
    background: linear-gradient(180deg, rgba(124,58,237,0.35) 0%, rgba(76,29,149,0.55) 60%, #0d0010 100%);
    border-radius: 150px 150px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
  }

  .person-frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
  }

  .person-placeholder-svg {
    width: 180px;
    opacity: 0.25;
  }

  .like-badge {
    position: absolute;
    top: 90px;
    right: -28px;
    background: #7c3aed;
    border-radius: 50px;
    padding: 10px 18px;
    font-size: 11px;
    font-weight: 600;
    color: #fff;
    letter-spacing: 0.5px;
    white-space: nowrap;
    border: 1px solid rgba(255,255,255,0.2);
    text-align: center;
    line-height: 1.3;
  }

  .like-badge span {
    color: rgba(255,255,255,0.6);
    font-size: 10px;
    display: block;
    font-weight: 400;
  }

  /* BIG TITLE */
  .big-title-row {
    position: absolute;
    bottom: 52px;
    left: 0; right: 0;
    display: flex;
    justify-content: center;
    z-index: 3;
    pointer-events: none;
    padding: 0 20px;
  }

  .big-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(72px, 13vw, 150px);
    line-height: 0.85;
    text-align: center;
    color: #fff;
    width: 100%;
    letter-spacing: 1px;
  }

  .big-title .line2 { color: #e8e0c8; }

  /* RIGHT */
  .hero-right {
    padding: 0 48px 100px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 36px;
    margin-top: 110px;
  }

  .desc-text {
    font-size: 11px;
    line-height: 1.9;
    color: rgba(255,255,255,0.5);
    text-align: right;
    max-width: 200px;
    letter-spacing: 0.3px;
  }

  .desc-text strong { color: rgba(255,255,255,0.85); font-weight: 500; }

  .rating-block {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 5px;
  }

  .rating-num {
    font-size: 30px;
    font-weight: 300;
    color: #fff;
    letter-spacing: -1px;
  }

  .stars { display: flex; gap: 3px; }

  .star {
    width: 11px; height: 11px;
    background: #f59e0b;
    clip-path: polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%);
  }

  .rating-sub {
    font-size: 10px;
    color: rgba(255,255,255,0.3);
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }

  .social-row {
    display: flex;
    gap: 14px;
    font-size: 10px;
    letter-spacing: 1.5px;
    color: rgba(255,255,255,0.25);
    text-transform: uppercase;
  }

  /* BOTTOM BAR */
  .bottom-bar {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 48px;
    background: rgba(255,255,255,0.04);
    border-top: 0.5px solid rgba(255,255,255,0.08);
    display: flex;
    align-items: center;
    overflow: hidden;
    z-index: 5;
  }

  .scroll-track {
    display: flex;
    gap: 48px;
    animation: scrollLeft 18s linear infinite;
    white-space: nowrap;
  }

  @keyframes scrollLeft {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  .scroll-item {
    font-size: 11px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: rgba(255,255,255,0.25);
  }

  .scroll-dot {
    color: #7c3aed;
    font-size: 16px;
    line-height: 1;
  }
`;

const scrollItems = [
  "Product Designer", "•", "UI/UX Designer", "•",
  "Web Developer", "•", "Brand Identity", "•",
  "Product Designer", "•", "UI/UX Designer", "•",
  "Web Developer", "•", "Brand Identity", "•",
];

export default function HeroSection({ imageSrc }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const t = new Date().toLocaleTimeString("en-US", {
        hour: "2-digit", minute: "2-digit", hour12: true, timeZone: "America/New_York"
      });
      setTime(t);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <style>{styles}</style>

      <section className="hero-section">
        <div className="hero-glow" />

        {/* NAV */}
        <nav className="hero-nav">
          <div className="logo">
            <div className="logo-icon">S</div>
            shahzaib
          </div>
          <ul className="nav-links">
            <li>About</li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
          <div className="time-badge">
            <div className="time-dot" />
            {time || "12:00 AM"}, pakistan
          </div>
        </nav>

        {/* GRID */}
        <div className="hero-grid">

          {/* LEFT */}
          <div className="hero-left">
            <div className="hello-tag">
              <div className="hello-dot" />
              Hello • I'm Shahzaib khan
            </div>
            <button className="touch-btn">
              <span className="touch-arrow">↗</span>
              <svg className="spin-svg" viewBox="0 0 100 100">
                <defs>
                  <path id="cp" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0"/>
                </defs>
                <text>
                  <textPath href="#cp" style={{ fontSize: "8px", fill: "rgba(255,255,255,0.45)", letterSpacing: "3px" }}>
                    GET IN TOUCH • GET IN TOUCH •{" "}
                  </textPath>
                </text>
              </svg>
            </button>
          </div>

          {/* CENTER */}
          <div className="hero-center">
            <div className="person-wrap">
              <div className="person-frame">
                {imageSrc ? (
                  <img src={imageSrc} alt="Jackbo" />
                ) : (
                  <svg className="person-placeholder-svg" viewBox="0 0 200 400" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="100" cy="90" rx="55" ry="65" fill="rgba(255,255,255,0.2)" />
                    <path d="M20 400 Q20 240 100 210 Q180 240 180 400 Z" fill="rgba(255,255,255,0.12)" />
                  </svg>
                )}
              </div>
              <div className="like-badge">
                LIKE THE <span>SEASON</span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero-right">
            <p className="desc-text">
              I have <strong>6 month of experience</strong> in web design &amp; development.
              I create <strong>unconventional yet functional</strong> digital experiences.
            </p>
            <div className="rating-block">
              <div className="rating-num">4.8</div>
              <div className="stars">
                {[...Array(5)].map((_, i) => <div key={i} className="star" />)}
              </div>
              <div className="rating-sub">2,513 Ratings</div>
            </div>
            <div className="social-row">
              <span>Github</span>
              <span>linkdin</span>
              <span>instagram</span>
            </div>
          </div>
        </div>

        {/* BIG TITLE */}
        <div className="big-title-row">
          <div className="big-title">
            Web<br /><span className="line2">DESIGNER</span>
          </div>
        </div>

        {/* BOTTOM SCROLLING BAR */}
        <div className="bottom-bar">
          <div className="scroll-track">
            {[...scrollItems, ...scrollItems].map((item, i) =>
              item === "•"
                ? <span key={i} className="scroll-dot">•</span>
                : <span key={i} className="scroll-item">{item}</span>
            )}
          </div>
        </div>

      </section>
    </>
  );
}
