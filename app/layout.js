import "./globals.css";
import { SiteFooter, SiteHeader } from "./components/site-chrome";

export const metadata = {
  title: "Solid Rock Missionary Baptist Church | Peoria, AZ",
  description:
    "Worship with Solid Rock Missionary Baptist Church in Peoria, Arizona. Sunday worship is in person at 10:00 AM and online at 10:30 AM.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}