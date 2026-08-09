import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nvklaxmikanth.github.io"),
  title: "Venkat Kumar Laxmi Kanth Nemala — World Models Researcher",
  description: "Portfolio of Venkat Kumar Laxmi Kanth Nemala, an NYU computer engineering graduate working on world models, multimodal learning, robotic planning, and 3D scene understanding.",
  openGraph: {
    title: "Venkat Kumar Laxmi Kanth Nemala — World Models Researcher",
    description: "NYU Computer Engineering graduate and AI4CE researcher working on world models, robotic planning, multimodal learning, and 3D scene understanding.",
    url: "https://nvklaxmikanth.github.io/",
    siteName: "Venkat Kumar Laxmi Kanth Nemala",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Venkat Kumar Laxmi Kanth Nemala — World Models Researcher",
    description: "NYU Computer Engineering graduate and AI4CE researcher working on world models, robotic planning, multimodal learning, and 3D scene understanding.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
