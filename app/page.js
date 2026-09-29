```jsx
import Link from "next/link";

const features = [
  {
    icon: "🛡️",
    title: "Moderation",
    description:
      "Manage warnings, kicks, bans, timeouts, message cleanup and powerful moderation tools.",
  },
  {
    icon: "🎫",
    title: "Tickets",
    description:
      "Create professional support panels with ticket controls, staff permissions and transcripts.",
  },
  {
    icon: "🧩",
    title: "Custom Commands",
    description:
      "Create your own commands with custom responses, permissions and actions.",
  },
  {
    icon: "💬",
    title: "Custom Messages",
    description:
      "Create automatic welcome messages, goodbye messages, announcements and more.",
  },
  {
    icon: "⚙️",
    title: "Automation",
    description:
      "Build automated actions that respond to events and keep your server running smoothly.",
  },
  {
    icon: "📊",
    title: "Analytics",
    description:
      "View server activity, command usage, moderation actions and useful statistics.",
  },
  {
    icon: "🎉",
    title: "Giveaways",
    description:
      "Create and manage giveaways with configurable requirements and winners.",
  },
  {
    icon: "📈",
    title: "Levels",
    description:
      "Give your community an engaging XP and leveling system with configurable rewards.",
  },
  {
    icon: "🎭",
    title: "Auto Roles",
    description:
      "Automatically assign roles when members join or meet your configured requirements.",
  },
];

const addons = [
  "Advanced Automations",
  "Extra Custom Commands",
  "Advanced Ticket Tools",
  "Custom Embeds",
  "Advanced Analytics",
  "Extra Server Branding",
];

export default function Home() {
  return (
    <main className="site">
      <header className="navbar">
        <Link href="/" className="brand">
          <span className="brandIcon">🤖</span>

          <span>Roblox Bot</span>
        </Link>

        <nav className="navLinks">
          <a href="#features">Features</a>
          <a href="#premium">Premium</a>
          <a href="#addons">Add-ons</a>
        </nav>

        <div className="navActions">
          <Link href="/dashboard" className="dashboardButton">
            Dashboard
          </Link>

          <a
            href="https://discord.com/oauth2/authorize?client_id=1554603983937470526&permissions=8&scope=bot%20applications.commands"
            className="discordButton"
          >
            Add to Discord
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="heroGlow" />

        <div className="botLogo">🤖</div>

        <div className="badge">
          ✨ Your all-in-one Discord bot
        </div>

        <h1>
          Powerful tools for
          <span> your Discord server.</span>
        </h1>

        <p className="heroText">
          Roblox Bot gives you moderation, automation, community
          management, custom commands, custom messages and much more —
          all controlled from one simple dashboard.
        </p>

        <div className="heroActions">
          <a
            href="https://discord.com/oauth2/authorize?client_id=1554603983937470526&permissions=8&scope=bot%20applications.commands"
            className="primaryButton"
          >
            🤖 Add Roblox Bot
          </a>

          <Link href="/dashboard" className="secondaryButton">
            Open Dashboard →
          </Link>
        </div>

        <div className="heroNote">
          Free to get started · More features available with optional
          Premium add-ons
        </div>
      </section>

      <section className="stats">
        <div>
          <strong>🛡️</strong>
          <span>Moderation</span>
        </div>

        <div>
          <strong>⚙️</strong>
          <span>Automation</span>
        </div>

        <div>
          <strong>🧩</strong>
          <span>Custom Tools</span>
        </div>

        <div>
          <strong>💎</strong>
          <span>Premium Add-ons</span>
        </div>
      </section>

      <section id="features" className="section">
        <div className="sectionHeading">
          <div className="sectionBadge">FEATURES</div>

          <h2>
            Everything your
            <span> server needs.</span>
          </h2>

          <p>
            Roblox Bot is designed to give you one place to configure
            and manage your Discord server.
          </p>
        </div>

        <div className="featureGrid">
          {features.map((feature) => (
            <article className="featureCard" key={feature.title}>
              <div className="featureIcon">{feature.icon}</div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

              <Link href="/dashboard">
                Configure →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section id="premium" className="premiumSection">
        <div className="premiumContent">
          <div className="sectionBadge premiumBadge">
            💎 PREMIUM
          </div>

          <h2>
            Same core bot.
            <br />
            <span>More ways to customise it.</span>
          </h2>

          <p>
            Roblox Bot's core experience can remain available while
            Premium plans provide optional extras, additional
            customisation and advanced tools.
          </p>

          <Link href="/dashboard" className="primaryButton">
            Explore Premium →
          </Link>
        </div>

        <div className="premiumPreview">
          <div className="previewTop">
            <span>💎</span>
            <strong>Premium</strong>
            <span className="activeDot">●</span>
          </div>

          <div className="previewLine">
            <span>Advanced Automations</span>
            <b>✓</b>
          </div>

          <div className="previewLine">
            <span>Custom Embeds</span>
            <b>✓</b>
          </div>

          <div className="previewLine">
            <span>Advanced Analytics</span>
            <b>✓</b>
          </div>

          <div className="previewLine">
            <span>Server Branding</span>
            <b>✓</b>
          </div>
        </div>
      </section>

      <section id="addons" className="section addonsSection">
        <div className="sectionHeading">
          <div className="sectionBadge">ADD-ONS</div>

          <h2>
            Build the setup
            <span> you want.</span>
          </h2>

          <p>
            Optional add-ons let you extend Roblox Bot without
            changing the core experience.
          </p>
        </div>

        <div className="addonGrid">
          {addons.map((addon, index) => (
            <div className="addon" key={addon}>
              <span>{String(index + 1).padStart(2, "0")}</span>

              <strong>{addon}</strong>

              <b>→</b>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <div className="ctaIcon">🤖</div>

        <h2>Ready to set up your server?</h2>

        <p>
          Add Roblox Bot to your Discord server and configure
          everything from the control centre.
        </p>

        <div className="heroActions">
          <a
            href="https://discord.com/oauth2/authorize?client_id=1554603983937470526&permissions=8&scope=bot%20applications.commands"
            className="primaryButton"
          >
            Add Roblox Bot
          </a>

          <Link href="/dashboard" className="secondaryButton">
            Open Control Centre
          </Link>
        </div>
      </section>

      <footer>
        <div className="footerMain">
          <Link href="/" className="footerBrand">
            <span>🤖</span>
            Roblox Bot
          </Link>

          <div className="footerLinks">
            <a href="#features">Features</a>
            <a href="#premium">Premium</a>
            <a href="#addons">Add-ons</a>
            <Link href="/dashboard">Dashboard</Link>
          </div>
        </div>

        <div className="footerBottom">
          <span>
            Roblox Bot · Discord server management made simple
          </span>

          <span>
            Built for Discord communities
          </span>
        </div>
      </footer>

      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #080a0f;
          color: #ffffff;
          font-family: Arial, Helvetica, sans-serif;
        }

        a {
          text-decoration: none;
        }

        .site {
          min-height: 100vh;
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(88, 101, 242, 0.13),
              transparent 35%
            ),
            #080a0f;
          overflow: hidden;
        }

        .navbar {
          height: 74px;
          padding: 0 5%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          border-bottom: 1px solid #20242d;
          background: rgba(10, 12, 17, 0.92);
          backdrop-filter: blur(15px);
          position: sticky;
          top: 0;
          z-index: 20;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 11px;
          color: white;
          font-size: 19px;
          font-weight: 800;
          white-space: nowrap;
        }

        .brandIcon {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 11px;
          background: #5865f2;
          box-shadow: 0 8px 30px rgba(88, 101, 242, 0.28);
        }

        .navLinks {
          display: flex;
          gap: 28px;
        }

        .navLinks a {
          color: #9ba2af;
          font-size: 14px;
          transition: 0.2s;
        }

        .navLinks a:hover {
          color: white;
        }

        .navActions {
          display: flex;
          gap: 9px;
          align-items: center;
        }

        .dashboardButton,
        .discordButton {
          padding: 10px 16px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 700;
        }

        .dashboardButton {
          color: white;
          background: #1b1f28;
          border: 1px solid #292e39;
        }

        .discordButton,
        .primaryButton {
          color: white;
          background: #5865f2;
          box-shadow: 0 10px 35px rgba(88, 101, 242, 0.2);
        }

        .hero {
          position: relative;
          max-width: 1050px;
          margin: auto;
          padding: 125px 25px 100px;
          text-align: center;
        }

        .heroGlow {
          position: absolute;
          width: 600px;
          height: 350px;
          background: rgba(88, 101, 242, 0.11);
          filter: blur(100px);
          border-radius: 50%;
          left: 50%;
          top: 80px;
          transform: translateX(-50%);
          pointer-events: none;
        }

        .botLogo {
          position: relative;
          width: 105px;
          height: 105px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 28px;
          background: #5865f2;
          font-size: 52px;
          box-shadow: 0 25px 80px rgba(88, 101, 242, 0.3);
        }

        .badge,
        .sectionBadge {
          display: inline-block;
          margin-top: 28px;
          padding: 7px 12px;
          border-radius: 999px;
          background: #151925;
          border: 1px solid #272d3a;
          color: #aeb5c2;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.8px;
        }

        .hero h1 {
          position: relative;
          margin: 25px auto 18px;
          max-width: 900px;
          font-size: clamp(45px, 7vw, 76px);
          line-height: 1.02;
          letter-spacing: -3px;
        }

        .hero h1 span,
        .sectionHeading h2 span,
        .premiumContent h2 span {
          color: #727ff5;
        }

        .heroText {
          position: relative;
          max-width: 720px;
          margin: auto;
          color: #9ca3b0;
          font-size: 18px;
          line-height: 1.7;
        }

        .heroActions {
          position: relative;
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 34px;
        }

        .primaryButton,
        .secondaryButton {
          padding: 14px 22px;
          border-radius: 9px;
          font-size: 15px;
          font-weight: 800;
          transition: transform 0.2s, opacity 0.2s;
        }

        .primaryButton:hover,
        .secondaryButton:hover,
        .discordButton:hover {
          transform: translateY(-2px);
          opacity: 0.92;
        }

        .secondaryButton {
          color: white;
          background: #171b24;
          border: 1px solid #2a303c;
        }

        .heroNote {
          margin-top: 18px;
          color: #626a78;
          font-size: 12px;
        }

        .stats {
          max-width: 1000px;
          margin: 0 auto 110px;
          padding: 0 25px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border: 1px solid #20242d;
          border-radius: 16px;
          overflow: hidden;
          background: #0e1117;
        }

        .stats div {
          padding: 23px;
          text-align: center;
          border-right: 1px solid #20242d;
        }

        .stats div:last-child {
          border-right: 0;
        }

        .stats strong {
          display: block;
          font-size: 24px;
          margin-bottom: 7px;
        }

        .stats span {
          color: #858d9a;
          font-size: 13px;
        }

        .section {
          max-width: 1150px;
          margin: 0 auto;
          padding: 30px 25px 120px;
        }

        .sectionHeading {
          max-width: 700px;
          margin: 0 auto 45px;
          text-align: center;
        }

        .sectionHeading .sectionBadge {
          margin-top: 0;
        }

        .sectionHeading h2 {
          margin: 18px 0 12px;
          font-size: 40px;
          letter-spacing: -1.5px;
        }

        .sectionHeading p {
          color: #858d9a;
          line-height: 1.6;
        }

        .featureGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .featureCard {
          padding: 25px;
          min-height: 220px;
          border: 1px solid #20242d;
          border-radius: 15px;
          background: #0f1218;
          transition: transform 0.2s, border-color 0.2s;
        }

        .featureCard:hover {
          transform: translateY(-4px);
          border-color: #343b4a;
        }

        .featureIcon {
          font-size: 30px;
        }

        .featureCard h3 {
          margin: 16px 0 8px;
          font-size: 18px;
        }

        .featureCard p {
          color: #858d9a;
          line-height: 1.55;
          font-size: 14px;
          min-height: 66px;
        }

        .featureCard a {
          color: #7380f4;
          font-size: 13px;
          font-weight: 700;
        }

        .premiumSection {
          max-width: 1100px;
          margin: 0 auto 120px;
          padding: 60px;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          align-items: center;
          border: 1px solid #3c3520;
          border-radius: 22px;
          background:
            radial-gradient(
              circle at 80% 20%,
              rgba(194, 155, 50, 0.08),
              transparent 40%
            ),
            #101118;
        }

        .premiumBadge {
          color: #e4bd54;
          border-color: #514521;
        }

        .premiumContent h2 {
          margin: 20px 0 15px;
          font-size: 42px;
          line-height: 1.1;
        }

        .premiumContent p {
          max-width: 570px;
          color: #9299a6;
          line-height: 1.7;
          margin-bottom: 30px;
        }

        .premiumPreview {
          padding: 22px;
          border: 1px solid #292d37;
          border-radius: 15px;
          background: #0b0e13;
        }

        .previewTop,
        .previewLine {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .previewTop {
          padding-bottom: 18px;
          border-bottom: 1px solid #20242d;
          color: #e6c25d;
        }

        .previewLine {
          padding: 17px 0;
          border-bottom: 1px solid #181c24;
          color: #aeb4c0;
          font-size: 13px;
        }

        .previewLine:last-child {
          border-bottom: 0;
        }

        .previewLine b {
          color: #45d483;
        }

        .activeDot {
          font-size: 8px;
          color: #45d483;
        }

        .addonGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .addon {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 19px;
          background: #0f1218;
          border: 1px solid #20242d;
          border-radius: 11px;
        }

        .addon span {
          color: #596170;
          font-size: 12px;
          font-weight: 800;
        }

        .addon strong {
          flex: 1;
          font-size: 14px;
        }

        .addon b {
          color: #5865f2;
        }

        .cta {
          max-width: 1000px;
          margin: 0 auto 100px;
          padding: 75px 25px;
          text-align: center;
          border-top: 1px solid #20242d;
          border-bottom: 1px solid #20242d;
        }

        .ctaIcon {
          font-size: 42px;
        }

        .cta h2 {
          font-size: 38px;
          margin: 15px 0 10px;
        }

        .cta p {
          color: #858d9a;
          max-width: 600px;
          margin: auto;
          line-height: 1.6;
        }

        footer {
          padding: 30px 5%;
          background: #0b0e13;
          border-top: 1px solid #20242d;
        }

        .footerMain,
        .footerBottom {
          max-width: 1150px;
          margin: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .footerBrand {
          color: white;
          font-weight: 800;
        }

        .footerBrand span {
          margin-right: 8px;
        }

        .footerLinks {
          display: flex;
          gap: 22px;
        }

        .footerLinks a,
        .footerBottom {
          color: #68707e;
          font-size: 12px;
        }

        .footerBottom {
          margin-top: 25px;
          padding-top: 20px;
          border-top: 1px solid #181c23;
        }

        @media (max-width: 900px) {
          .navLinks {
            display: none;
          }

          .featureGrid {
            grid-template-columns: repeat(2, 1fr);
          }

          .premiumSection {
            margin-left: 20px;
            margin-right: 20px;
            grid-template-columns: 1fr;
            padding: 40px;
          }

          .stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .stats div:nth-child(2) {
            border-right: 0;
          }

          .stats div:nth-child(-n + 2) {
            border-bottom: 1px solid #20242d;
          }
        }

        @media (max-width: 650px) {
          .navbar {
            padding: 0 18px;
          }

          .dashboardButton {
            display: none;
          }

          .hero {
            padding-top: 90px;
          }

          .hero h1 {
            letter-spacing: -2px;
          }

          .featureGrid,
          .addonGrid {
            grid-template-columns: 1fr;
          }

          .premiumSection {
            padding: 30px 22px;
          }

          .premiumContent h2,
          .sectionHeading h2,
          .cta h2 {
            font-size: 31px;
          }

          .footerMain,
          .footerBottom {
            align-items: flex-start;
            flex-direction: column;
          }

          .footerLinks {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </main>
  );
}
```
