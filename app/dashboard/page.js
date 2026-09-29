const sections = [
  {
    title: "Overview",
    items: [
      ["🏠", "Dashboard"],
      ["🤖", "Bot"],
    ],
  },
  {
    title: "Moderation",
    items: [
      ["🛡️", "Moderation"],
      ["⚠️", "Warnings"],
      ["🔨", "Bans"],
      ["🧹", "Message Tools"],
    ],
  },
  {
    title: "Community",
    items: [
      ["👋", "Welcome"],
      ["🎫", "Tickets"],
      ["🎉", "Giveaways"],
      ["📈", "Levels"],
      ["💡", "Suggestions"],
    ],
  },
  {
    title: "Automation",
    items: [
      ["⚙️", "Automations"],
      ["💬", "Custom Messages"],
      ["🧩", "Custom Commands"],
      ["🎭", "Auto Roles"],
    ],
  },
  {
    title: "Management",
    items: [
      ["📊", "Analytics"],
      ["📜", "Audit Logs"],
      ["🔐", "Permissions"],
    ],
  },
];

export default function Dashboard() {
  return (
    <div className="dashboard">

      <aside className="sidebar">

        <div className="brand">
          <div className="brandIcon">🤖</div>
          <span>Roblox Bot</span>
        </div>

        {sections.map((section) => (
          <div key={section.title} className="navSection">

            <div className="sectionTitle">
              {section.title}
            </div>

            {section.items.map(([icon, name]) => (
              <button
                key={name}
                className={
                  name === "Dashboard"
                    ? "navItem active"
                    : "navItem"
                }
              >
                <span>{icon}</span>
                {name}
              </button>
            ))}

          </div>
        ))}

        <div className="navSection">

          <div className="sectionTitle">
            Roblox Bot
          </div>

          <button className="navItem premium">
            <span>💎</span>
            Premium
          </button>

          <button className="navItem">
            <span>🛒</span>
            Add-ons
          </button>

          <button className="navItem">
            <span>⚙️</span>
            Settings
          </button>

        </div>

      </aside>

      <main className="main">

        <header className="topbar">

          <div className="server">

            <div className="serverIcon">
              🏠
            </div>

            <div>
              <strong>My Discord Server</strong>

              <small>
                Roblox Bot
              </small>
            </div>

          </div>

          <div className="account">
            <div className="avatar">
              ?
            </div>

            <span>
              Not logged in
            </span>
          </div>

        </header>

        <section className="content">

          <div className="heading">

            <div>
              <h1>Dashboard</h1>

              <p>
                Welcome to your Roblox Bot control centre.
              </p>
            </div>

            <button className="manageButton">
              Manage Server
            </button>

          </div>

          <div className="stats">

            <div className="stat">
              <span>Members</span>
              <strong>—</strong>
            </div>

            <div className="stat">
              <span>Commands Today</span>
              <strong>—</strong>
            </div>

            <div className="stat">
              <span>Moderation Actions</span>
              <strong>—</strong>
            </div>

            <div className="stat">
              <span>Bot Status</span>
              <strong className="online">
                Online
              </strong>
            </div>

          </div>

          <div className="grid">

            <div className="card">

              <div className="cardIcon">
                🛡️
              </div>

              <h2>Moderation</h2>

              <p>
                Manage warnings, bans, kicks,
                timeouts and other moderation tools.
              </p>

              <button>
                Configure
              </button>

            </div>

            <div className="card">

              <div className="cardIcon">
                🎫
              </div>

              <h2>Tickets</h2>

              <p>
                Create support panels and configure
                your server's ticket system.
              </p>

              <button>
                Configure
              </button>

            </div>

            <div className="card">

              <div className="cardIcon">
                🧩
              </div>

              <h2>Custom Commands</h2>

              <p>
                Build your own commands with
                custom responses and actions.
              </p>

              <button>
                Configure
              </button>

            </div>

            <div className="card">

              <div className="cardIcon">
                💬
              </div>

              <h2>Custom Messages</h2>

              <p>
                Create automated messages for
                your Discord community.
              </p>

              <button>
                Configure
              </button>

            </div>

            <div className="card">

              <div className="cardIcon">
                ⚙️
              </div>

              <h2>Automation</h2>

              <p>
                Build automated actions and
                configurable server workflows.
              </p>

              <button>
                Configure
              </button>

            </div>

            <div className="card premiumCard">

              <div className="cardIcon">
                💎
              </div>

              <h2>Premium</h2>

              <p>
                Unlock optional add-ons and
                advanced customisation.
              </p>

              <button>
                Explore Premium
              </button>

            </div>

          </div>

        </section>

      </main>

      <style>{`

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
        }

        .dashboard {
          min-height: 100vh;
          background: #0a0c10;
          color: white;
          font-family: Arial, Helvetica, sans-serif;
          display: flex;
        }

        .sidebar {
          width: 260px;
          position: fixed;
          top: 0;
          bottom: 0;
          overflow-y: auto;
          background: #0d1016;
          border-right: 1px solid #20242d;
          padding: 20px 14px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 20px;
          font-weight: 700;
          padding: 8px 10px 25px;
        }

        .brandIcon,
        .serverIcon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: #5865f2;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sectionTitle {
          color: #646b78;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          padding: 18px 10px 7px;
        }

        .navItem {
          width: 100%;
          border: 0;
          background: transparent;
          color: #aeb4c0;
          padding: 11px 12px;
          margin: 2px 0;
          border-radius: 8px;
          text-align: left;
          cursor: pointer;
          font-size: 14px;
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .navItem:hover {
          background: #181c25;
          color: white;
        }

        .navItem.active {
          background: #5865f2;
          color: white;
        }

        .premium {
          color: #f1c75b;
        }

        .main {
          width: calc(100% - 260px);
          margin-left: 260px;
        }

        .topbar {
          height: 70px;
          padding: 0 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #0d1016;
          border-bottom: 1px solid #20242d;
        }

        .server {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .server small {
          display: block;
          color: #777e8b;
          margin-top: 3px;
        }

        .account {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #9da4b0;
          font-size: 14px;
        }

        .avatar {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background: #20242d;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .content {
          padding: 35px;
          max-width: 1450px;
        }

        .heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        h1 {
          margin: 0;
          font-size: 30px;
        }

        .heading p {
          color: #858c99;
          margin-top: 8px;
        }

        .manageButton,
        .card button {
          background: #5865f2;
          color: white;
          border: 0;
          border-radius: 8px;
          padding: 11px 17px;
          cursor: pointer;
          font-weight: 600;
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          margin-top: 30px;
        }

        .stat {
          background: #11141b;
          border: 1px solid #20242d;
          border-radius: 14px;
          padding: 22px;
        }

        .stat span {
          display: block;
          color: #858c99;
          font-size: 13px;
        }

        .stat strong {
          display: block;
          margin-top: 9px;
          font-size: 28px;
        }

        .online {
          color: #45d483;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-top: 30px;
        }

        .card {
          background: #11141b;
          border: 1px solid #20242d;
          border-radius: 14px;
          padding: 25px;
        }

        .cardIcon {
          font-size: 30px;
        }

        .card h2 {
          font-size: 19px;
          margin: 15px 0 8px;
        }

        .card p {
          color: #9299a6;
          line-height: 1.5;
          min-height: 48px;
        }

        .premiumCard {
          border-color: #65551e;
        }

        @media (max-width: 1000px) {

          .stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .grid {
            grid-template-columns: repeat(2, 1fr);
          }

        }

        @media (max-width: 700px) {

          .sidebar {
            display: none;
          }

          .main {
            width: 100%;
            margin-left: 0;
          }

          .content {
            padding: 20px;
          }

          .stats,
          .grid {
            grid-template-columns: 1fr;
          }

          .heading {
            align-items: flex-start;
            flex-direction: column;
          }

        }

      `}</style>

    </div>
  );
}
