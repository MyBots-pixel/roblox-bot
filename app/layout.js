export const metadata = {
  title: "Roblox Bot",
  description:
    "Roblox Bot - powerful Discord moderation, automation and server management.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          background: "#0a0c10",
          color: "#ffffff",
        }}
      >
        {children}
      </body>
    </html>
  );
}
