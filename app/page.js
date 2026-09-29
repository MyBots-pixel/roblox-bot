export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0a0c10",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <nav
        style={{
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 40px",
          background: "#0d1016",
          borderBottom: "1px solid #20242d",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "20px",
            fontWeight: "700",
          }}
        >
          <div
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "10px",
              background: "#5865f2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            🤖
          </div>

          Roblox Bot
        </div>

        <button
          style={{
            background: "#5865f2",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            padding: "12px 20px",
            fontSize: "14px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Login with Discord
        </button>
      </nav>

      <section
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          textAlign: "center",
          padding: "120px 25px",
        }}
      >
        <div
          style={{
            width: "100px",
            height: "100px",
            margin: "0 auto",
            borderRadius: "26px",
            background: "#5865f2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "50px",
            boxShadow: "0 20px 60px rgba(88,101,242,.25)",
          }}
        >
          🤖
        </div>

        <h1
          style={{
            fontSize: "60px",
            margin: "30px 0 15px",
          }}
        >
          Roblox Bot
        </h1>

        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            color: "#a8afbb",
            fontSize: "19px",
            lineHeight: "1.6",
          }}
        >
          An all-in-one Discord bot with moderation,
          automation, community tools, custom commands,
          custom messages and powerful server management.
        </p>

        <div
          style={{
            marginTop: "35px",
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              background: "#5865f2",
              color: "white",
              border: "none",
              borderRadius: "8px",
              padding: "15px 25px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Add Roblox Bot
          </button>

          <button
            style={{
              background: "#20242d",
              color: "white",
              border: "none",
              borderRadius: "8px",
              padding: "15px 25px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Explore Features
          </button>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "40px 25px 100px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "32px",
          }}
        >
          Everything your server needs
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "18px",
            marginTop: "35px",
          }}
        >
          {[
            ["🛡️", "Moderation", "Powerful moderation tools for your community."],
            ["🎫", "Tickets", "Create support tickets with staff controls."],
            ["🧩", "Custom Commands", "Create your own commands and responses."],
            ["💬", "Custom Messages", "Build automated personalised messages."],
            ["⚙️", "Automation", "Automate repetitive server tasks."],
            ["📊", "Analytics", "View useful server and bot statistics."],
          ].map(([icon, title, description]) => (
            <div
              key={title}
              style={{
                background: "#11141b",
                border: "1px solid #20242d",
                borderRadius: "14px",
                padding: "25px",
              }}
            >
              <div style={{ fontSize: "30px" }}>{icon}</div>

              <h3>{title}</h3>

              <p
                style={{
                  color: "#9299a6",
                  lineHeight: "1.5",
                }}
              >
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <footer
        style={{
          borderTop: "1px solid #20242d",
          padding: "35px",
          textAlign: "center",
          color: "#686f7c",
        }}
      >
        Roblox Bot · Discord server management made simple
      </footer>
    </main>
  );
}
