import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Venkat Kumar Laxmi Kanth Nemala — World Models Researcher",
  description: "Portfolio of Venkat Kumar Laxmi Kanth Nemala, an NYU computer engineering graduate working on world models, multimodal learning, robotic planning, and 3D scene understanding.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
